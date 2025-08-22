import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description?: string;
  keywords?: string;
  favicon?: string;
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player" | string;
  twitterImage?: string;
  ogType?: string;
}

const PageMeta = ({
  title,
  description = "No description available",
  keywords,
  favicon,
  ogImage,
  twitterCard = "summary",
  twitterImage,
  ogType = "website",
}: PageMetaProps) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {keywords && <meta name="keywords" content={keywords} />}
    {favicon && <link rel="icon" href={favicon} />}

    {/* Open Graph */}
    {ogImage && <meta property="og:image" content={ogImage} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={ogType} />

    {/* Twitter Card */}
    {twitterCard && <meta name="twitter:card" content={twitterCard} />}
    {twitterImage && <meta name="twitter:image" content={twitterImage} />}
    {ogImage && <meta name="twitter:image" content={ogImage} />}
  </Helmet>
);

export default PageMeta;
