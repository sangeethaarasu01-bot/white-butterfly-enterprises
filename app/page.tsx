"use client";

import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";

import FeaturedProducts from "@/components/home/FeaturedProducts";
import EnquiryForm from "@/components/product/Enquiry";
import { products } from "@/data/product";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts
        products={products}
        onEnquiry={(product) => console.log(product)}
        // onEnquiry={handleEnquiry}
      />
      {/* <CTASection /> */}
    </div>
  );
}
