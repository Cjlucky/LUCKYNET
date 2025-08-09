import { useEffect } from "react";

type SeoProps = {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
};

export const Seo = ({ title, description, canonical = "/", jsonLd }: SeoProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name=\"${name}\"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    if (description) {
      setMeta("description", description);
      // Open Graph/Twitter mirrors
      const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
      const ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
      if (ogTitle) ogTitle.content = title;
      if (ogDesc) ogDesc.content = description;
    }

    const linkRel = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (linkRel) linkRel.href = canonical;

    if (jsonLd) {
      let script = document.getElementById("ld-json") as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "ld-json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, canonical, jsonLd]);

  return null;
};
