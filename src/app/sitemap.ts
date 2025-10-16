import { getBlogPosts } from "@/lib/blog";
import { MetadataRoute } from "next";

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getBlogPosts();
  const domain = "prowplus.com"; // Replace with your actual domain
  const protocol = "https";

  return [
    {
      url: `${protocol}://${domain}`,
      lastModified: new Date(),
    },
    ...allPosts.map((post) => ({
      url: `${protocol}://${domain}/blog/${post.slug}`,
      lastModified: new Date(),
    })),
  ];
}
