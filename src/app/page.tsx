// pages/_app.js or pages/_app.tsx

import CarouselComponenet from "@/components/home/carousel";
import Booking from "@/components/home/booking";
import HomeAbout from "./components/home-about";
import HomeRooms from "./components/featured-rooms";
import HomeServices from "./components/home-sercices";

export default function Home() {
  return (
    <>
      <CarouselComponenet />
      <Booking />
      <HomeAbout />
      <HomeRooms />
      <HomeServices />
    </>
  );
}
