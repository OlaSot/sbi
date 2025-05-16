import React from "react";

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({ title, description, canonicalUrl }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={`https://statom.com/en${window.location.pathname.replace(/^\/[a-z]{2}/, '')}`} />
      <link rel="alternate" hrefLang="ru" href={`https://statom.com/ru${window.location.pathname.replace(/^\/[a-z]{2}/, '')}`} />
      <link rel="alternate" hrefLang="lt" href={`https://statom.com/lt${window.location.pathname.replace(/^\/[a-z]{2}/, '')}`} />
      <link rel="alternate" hrefLang="x-default" href="https://statom.com/en" />
    </>
  );
}; 