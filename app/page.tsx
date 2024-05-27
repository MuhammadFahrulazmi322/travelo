import Card from "@/components/Card";
import Count from "@/components/Count";
import Hero from "@/components/Hero";
import PromoCarousel from "@/components/PromoCarousel";
import Testimonials from "@/components/Testimonial";
import "react-multi-carousel/lib/styles.css";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Count/>
      <section className="bg-card-section bg-no-repeat bg-top h-full my-20">
        <PromoCarousel/>
        <Card/>
        
      </section>

      <Testimonials/>

    </main>
  );
}
