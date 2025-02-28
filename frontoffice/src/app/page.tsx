
import { getHomePageData } from "@/data/loaders";
import { HeroSection } from "@/components/custom/hero-section";
import { FeatureSection } from "@/components/custom/FeaturesSection";

import { FeatureCard } from "@/components/custom/FeaturesCard";

import { Reference } from "@/components/custom/references";
const blockComponents = {
  "layout.hero-section": HeroSection,
  "layout.features-section": FeatureSection,
  "layout.features-cards": FeatureCard ,
  "layout.references": Reference ,
};

function blockRenderer(block: any) {
  const Component = blockComponents[block.__component as keyof typeof blockComponents];
  block.id=Math.random()
  return Component ? <Component key={block.id} data={block} /> : null;
}



export default async function Home() {
  const strapiData = await getHomePageData();
 
  
  const { blocks } = strapiData?.data || [];

  return <main>{blocks.map(blockRenderer)}</main>;
}