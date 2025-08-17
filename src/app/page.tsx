import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import BestSellingProducts from "@/components/home/BestSellingProducts";
import Gallery from "@/components/home/Gallery";
import Strengths from "@/components/home/Strengths";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export const metadata = {
  title: "ร้านขายเหล็กบ้านบึง ชลบุรี | เหล็กครบ จัดส่งไว",
  description:
    "เหล็กกล่อง เหล็กแผ่น เหล็กบีม เหล็กกัลวาไนซ์ บริการจัดส่งทั่วบ้านบึง-ชลบุรี",
  alternates: { canonical: "/" },
};


export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Banner 
      imageUrl="/images/banner-home.png" 
      mobileImageUrl="/images/banner-mobile.png"
      alt="TN Lohakit"/>
      <WhyChooseUs />
      <AboutUs/>
      <BestSellingProducts />
      <Strengths />
      <Gallery />
    </div>
  );
}
