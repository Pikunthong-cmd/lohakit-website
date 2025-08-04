import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import BestSellingProducts from "@/components/home/BestSellingProducts";
import Header from "@/components/home/Header";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner imageUrl="/images/banner-home.png" />
      <WhyChooseUs />
      <AboutUs/>
      <BestSellingProducts />
    </div>
  );
}
