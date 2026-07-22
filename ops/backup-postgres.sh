#!/usr/bin/env sh
set -eu

BACKUP_DIR="${BACKUP_DIR:-./backups}"
STAMP="$(date +%Y%m%d-%H%M%S)"

mkdir -p "$BACKUP_DIR"
docker compose exec -T postgres pg_dump -U tracodi -d tracodi > "$BACKUP_DIR/tracodi-$STAMP.sql"
find "$BACKUP_DIR" -type f -name 'tracodi-*.sql' -mtime +14 -delete
