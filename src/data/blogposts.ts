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

      <h2>The Ghost Problem</h2>
      <p>Too many companies are pursuing IoT strategies based on outdated assumptions about cellular network limitations. These “ghost” projects consume resources without delivering measurable outcomes because they’re built on shaky ground—custom protocols, complex Wi-Fi setups, or proprietary platforms that don’t scale or secure easily.</p>

      <h2>Embracing Practical Cellular IoT</h2>
      <p>Modern cellular networks offer unprecedented reliability, coverage, and cost-effectiveness for IoT deployments. By focusing on practical implementations that leverage existing cellular infrastructure, organizations can reduce time-to-market, improve security, and future-proof their operations.</p>

      <h2>The Payoff</h2>
      <p>Deploying real-world IoT solutions on cellular networks helps organizations monitor assets in real time, automate workflows, and reduce operational costs. Instead of chasing ghosts, you’ll be chasing ROI.</p>
    `,
    date: "2025-07-17",
    readTime: "4 min read",
    seoTitle: "Stop Chasing IoT Ghosts – Realize ROI with Cellular",
    seoDescription:
      "Learn how to stop wasting time on theoretical IoT and start driving value with secure, scalable cellular IoT deployments today.",
    keywords: ["cellular IoT", "network security", "iot business value", "aeris"]
  }
];

// ✅ Fix for blogpost.tsx
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
