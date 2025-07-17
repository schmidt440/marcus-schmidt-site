export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "stop-chasing-ghosts-cellular-network-embrace-iot",
    title: "Stop Chasing Ghosts in Your Cellular Network: Embrace IoT Today",
    excerpt:
      "Discover how to move beyond theoretical IoT concepts and implement practical cellular network solutions that deliver real business value in today’s connected world.",
    content: `
      <p>In today’s rapidly evolving technological landscape, many organizations find themselves chasing theoretical IoT implementations that never quite materialize into tangible business value. The reality is that cellular networks offer a stable, scalable, and highly accessible foundation for deploying impactful IoT solutions—today, not tomorrow.</p>

      <h2>The Ghost Problem in IoT</h2>
      <p>IT leaders and innovation teams often delay deployment, waiting for perfect use cases. But delaying results in stagnation. This blog breaks down how to build around existing cellular infrastructure and get started now.</p>

      <h2>What You’ll Learn</h2>
      <ul>
        <li>Why “ghost chasing” slows your IoT roadmap</li>
        <li>The ROI of choosing proven cellular solutions</li>
        <li>Case studies of real-world IoT wins</li>
      </ul>
    `,
    date: "2024-11-15",
    readTime: "4 min",
    seoTitle: "Embrace Cellular IoT Now",
    seoDescription: "Learn how to stop chasing theoretical IoT models and implement real cellular network solutions.",
    keywords: ["cellular IoT", "network", "iot security"],
  },
  // You can add more posts here
];

// ✅ Fix: Add this missing export for Vercel to stop failing
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
