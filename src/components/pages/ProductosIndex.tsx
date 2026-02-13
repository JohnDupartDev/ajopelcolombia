"use client";

import ProductFaq from "../Productos/ProductFaq";
import ProductReviews from "../Productos/ProductReviews";
import ProductsCTA from "../Productos/ProductsCTA";
import ProductGrid from "../Productos/ProductsGrid";
import ProductsHero from "../Productos/ProductsHero";
import ProductSpecs from "../Productos/ProductSpecs";




export default function PrivacyIndex() {
  return (
      <section className="w-full h-full pt-16">
       <ProductsHero />
       <ProductGrid />
       <ProductSpecs />
       <ProductReviews/>
       <ProductFaq/>
       <ProductsCTA/>
      </section>
  );
}
