import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { timestamps } from "../utils/sql";

export const workouts = sqliteTable("workout", {
  id: text("id", { length: 255 }).notNull().primaryKey(),
  name: text("name", { length: 255 }).notNull(),
  ...timestamps,
});

export const exercises = sqliteTable("exercise", {
  id: text("id", { length: 255 }).notNull().primaryKey(),
  name: text("name", { length: 255 }).notNull(),
  workoutId: text("workoutId", { length: 255 })
    .notNull()
    .references(() => workouts.id),
});
