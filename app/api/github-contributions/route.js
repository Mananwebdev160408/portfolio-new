export async function GET() {
  const res = await fetch(
    "https://github.com/users/Mananwebdev160408/contributions",
    {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      next: { revalidate: 3600 }, // cache for 1 hour
    }
  );

  const svg = await res.text();

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}
