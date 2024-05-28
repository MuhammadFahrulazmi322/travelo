import Card from "@/components/Card";
import Category from "@/components/Category";
import Count from "@/components/Count";
import Hero from "@/components/Hero";
import PromoCarousel from "@/components/PromoCarousel";
import Testimonials from "@/components/Testimonial";
import "react-multi-carousel/lib/styles.css";


export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-y-[100px]">
      <Hero/>
      <Count/>
      <div className="bg-card-section bg-no-repeat bg-top h-full py-8 mt-20">
        <PromoCarousel/>
        <Card/>
      </div>
      <Category/>
      <Testimonials/>
      </section>

    </main>
  );
}
