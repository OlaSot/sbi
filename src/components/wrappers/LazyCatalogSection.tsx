// components/wrappers/LazyCatalogSection.tsx
import dynamic from "next/dynamic";

const CatalogSection = dynamic(() => import("@/components/sections/CatalogSection"), {
  loading: () => <div className="min-h-[50px]" />,
});

export default CatalogSection;