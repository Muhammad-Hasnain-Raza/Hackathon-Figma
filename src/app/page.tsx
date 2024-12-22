import Image from "next/image";
import Notification from "@/components/notification";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Brands from "@/components/brands";
import Products from "./products/page";
import Selling from "./products/selling";
import Browse from "@/components/browse";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Notification/>
      <Header/>
      <Hero/>
      <Brands/>
      <Products/>
      <Selling/>
      <Browse/>
      <Footer/>
    </div>
  );
}
