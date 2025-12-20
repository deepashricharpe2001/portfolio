import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();

export async function GET() {
  try {
    // Fetch Medium RSS feed
    const feed = await parser.parseURL(
      "https://medium.com/feed/@deepashricharpe0"
    );

    const posts = feed.items.slice(0, 10).map((item: any) => {
      // Extract slug from the link
      const slug = item.link?.split("/").pop() || item.guid || "";
      
      // Extract cover image from content
      const imgMatch = item["content:encoded"]?.match(/<img[^>]+src="([^">]+)"/);
      const coverImage = imgMatch ? imgMatch[1] : "/images/news/default.jpg";

      return {
        title: item.title || "Untitled",
        subtitle: item.contentSnippet?.substring(0, 150) + "..." || "",
        slug: slug,
        dateAdded: item.pubDate || new Date().toISOString(),
        readTimeInMinutes: 5,
        views: 0,
        coverImage: coverImage,
      };
    });

    return NextResponse.json(posts, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    console.error("Blog fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}
