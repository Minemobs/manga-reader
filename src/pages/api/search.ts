export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";
import { db, like, Manga } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const searchInput = data.get("searchInput");
  // Validate the data - you'll probably want to do more than this
  if (!searchInput) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify((await db.select().from(Manga).where(like(Manga.title, `%${searchInput}%`)))),
    { status: 200 }
  );
};