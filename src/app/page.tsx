// pages/_app.js or pages/_app.tsx

import CarouselComponenet from "@/components/home/carousel";
import Booking from "@/components/home/booking";

export default function Home() {
  return (
    <>
      <CarouselComponenet />
      <Booking />
    </>
  );
}
