import { sql } from "drizzle-orm";
import { int } from "drizzle-orm/sqlite-core";

export const timestamps = {
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" }),
};
