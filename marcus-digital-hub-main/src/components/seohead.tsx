
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
}

const SEOHead = ({ 
  title = "Marcus Schmidt - IoT Expert & Technology Leader",
  description = "IoT security consultant and cellular IoT advisor helping enterprises implement scalable connected solutions. Expert in IoT architecture, digital transformation, and technology leadership.",
  keywords = ["IoT security", "cellular IoT consultant", "enterprise IoT advisor", "IoT architecture", "digital transformation"],
  canonical
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Additional SEO tags */}
      <meta name="author" content="Marcus Schmidt" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEOHead;
