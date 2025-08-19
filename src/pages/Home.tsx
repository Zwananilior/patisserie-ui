import React from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import HolidaySection from "../HolidaySection";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <SectionTitle title="Delight in every Bite!" />
      <div className="product-grid">
        <ProductCard title="Custom Cakes" image="/public/deva-williamson-rHz-DkDgA1k-unsplash.jpg" />
        <ProductCard title="Macarons" image="/public/alexandra-gornago-_B7shfNUXEA-unsplash.jpg" />
        <ProductCard title="Cupcake Collections" image="/public/diana-polekhina-tVRSj-KnfxE-unsplash.jpg" />
      </div>
      <HolidaySection />
    </>
  );
};

export default Home;
