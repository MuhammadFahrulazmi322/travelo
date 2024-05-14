import Count from "@/components/Count";
import Hero from "@/components/Hero";
import PromoCarousel from "@/components/PromoCarousel";
import "react-multi-carousel/lib/styles.css";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Count/>
      <section className="bg-card-section h-full">
        <PromoCarousel/>
      </section>
    </main>
  );
}
