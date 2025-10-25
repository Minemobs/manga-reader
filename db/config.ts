import { column, defineDb, defineTable, NOW } from "astro:db";

// https://astro.build/db/config

const Chapter = defineTable({
  columns: {
    id: column.number(),
    sourceURL: column.text({ unique: true }),
    pagesNumber: column.number(),
    pagesURLs: column.json(), // an array of URLs
    mangaId: column.number({ references: () => Manga.columns.id }),
  },
  indexes: [
    { on: ["id", "mangaId"], unique: true }, //idk if it's always unique or not
  ]
});

const Manga = defineTable({
  columns: {
    id: column.number({ unique: true, primaryKey: true }),
    cover: column.text(),
    title: column.text(),
    alternativeTitles: column.json(),
    chapters: column.json(), // an array of ids
    updated: column.date({ default: NOW })
  },
});

export default defineDb({
  tables: {
    Manga,
    Chapter,
  },
});
