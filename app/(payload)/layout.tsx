import configPromise from "@payload-config";
import { RootLayout, handleServerFunctions, metadata } from "@payloadcms/next/layouts";
import type { ReactNode } from "react";
import type { ServerFunctionClient } from "payload";
import { importMap } from "./admin/importMap";

type Args = {
  children: ReactNode;
};

export { metadata };

const serverFunction: ServerFunctionClient = async (args) => {
  "use server";

  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap
  });
};

export default function PayloadLayout({ children }: Args) {
  return (
    <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  );
}
