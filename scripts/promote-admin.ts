import fs from "node:fs";
import path from "node:path";
import pg from "pg";

const { Client } = pg;

function loadEnvFile() {
  const envPath = path.resolve(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    const value = rawValue.replace(/^['"]|['"]$/g, "");

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

async function main() {
  loadEnvFile();

  const email = process.argv[2]?.trim().toLowerCase();

  if (!email) {
    console.error("Usage: npm run promote:admin -- user@example.com");
    process.exit(1);
  }

  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not configured.");
    process.exit(1);
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });

  await client.connect();

  try {
    const tableResult = await client.query(
      `
        select table_schema, table_name
        from information_schema.tables
        where table_type = 'BASE TABLE'
          and table_schema not in ('pg_catalog', 'information_schema')
          and table_name = 'users'
        limit 1
      `
    );

    const table = tableResult.rows[0];

    if (!table) {
      console.error("Could not find the Payload users table.");
      process.exit(1);
    }

    const qualifiedTable = `"${table.table_schema}"."${table.table_name}"`;
    const result = await client.query(
      `
        update ${qualifiedTable}
        set role = $1, updated_at = now()
        where lower(email) = $2
        returning id, email, role
      `,
      ["admin", email]
    );

    const user = result.rows[0];

    if (!user) {
      console.error(`No user found for ${email}.`);
      process.exit(1);
    }

    console.log(`${user.email} is now an admin.`);
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
