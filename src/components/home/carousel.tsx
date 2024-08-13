"use client";
import { Carousel } from "antd";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const CarouselComponent = () => {
  const [animate, setAnimate] = useState(true);

  const handleBeforeChange = () => {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 50); // Small timeout to reset the animation
  };

  return (
    <div className="container-fluid p-0 mb-5">
      <Carousel arrows autoplay beforeChange={handleBeforeChange}>
        <div className="relative">
          <Image
            src="/carousel-1.jpg"
            alt="Image 1"
            layout="responsive"
            width={1024}
            height={576}
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <div className="p-3 max-w-lg text-center">
              <h6
                className={clsx(
                  "text-white text-uppercase mb-3",
                  animate && "animate-slideInDown"
                )}
              >
                Luxury Living
              </h6>
              <h1
                className={clsx(
                  "text-white text-3xl lg:text-6xl mb-4",
                  animate && "animate-slideInDown"
                )}
              >
                Discover A Brand Luxurious Hotel
              </h1>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className={clsx(
                    "bg-primary-text text-white py-3 px-5 text-lg font-medium hover:bg-primary-dark transition-all duration-300",
                    animate && "animate-slideInLeft"
                  )}
                >
                  Our Rooms
                </a>
                <a
                  href="#"
                  className={clsx(
                    "bg-white text-primary py-3 px-5 text-lg font-medium hover:bg-gray-200 transition-all duration-300",
                    animate && "animate-slideInRight"
                  )}
                >
                  Book A Room
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/carousel-2.jpg"
            alt="Image 2"
            layout="responsive"
            width={1024}
            height={576}
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <div className="p-3 max-w-lg text-center">
              <h6
                className={clsx(
                  "text-white text-uppercase mb-3",
                  animate && "animate-slideInDown"
                )}
              >
                Luxury Living
              </h6>
              <h1
                className={clsx(
                  "text-white text-3xl lg:text-6xl mb-4",
                  animate && "animate-slideInDown"
                )}
              >
                Discover A Brand Luxurious Hotel
              </h1>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className={clsx(
                    "bg-primary-text text-white py-3 px-5 text-lg font-medium hover:bg-primary-dark transition-all duration-300",
                    animate && "animate-slideInLeft"
                  )}
                >
                  Our Rooms
                </a>
                <a
                  href="#"
                  className={clsx(
                    "bg-white text-primary py-3 px-5 text-lg font-medium hover:bg-gray-200 transition-all duration-300",
                    animate && "animate-slideInRight"
                  )}
                >
                  Book A Room
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
