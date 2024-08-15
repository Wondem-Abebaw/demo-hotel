import Image from "next/image";
import { Button } from "antd";

export default function HomeAbout() {
  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-wrap -mx-4 items-center">
        <div className="lg:w-1/2 px-4">
          <h6 className="text-primary-text text-uppercase mb-2">About Us</h6>
          <h1 className="mb-4">
            Welcome to{" "}
            <span className="text-primary-text text-uppercase">Hotelier</span>
          </h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>
          <div className="flex -mx-2 mb-8">
            <div className="w-1/3 px-2">
              <div className="border rounded p-1">
                <div className="border rounded text-center p-4">
                  <i className="fa fa-hotel fa-2x text-primary-text mb-2"></i>
                  <h2 className="mb-1">1234</h2>
                  <p className="mb-0">Rooms</p>
                </div>
              </div>
            </div>
            <div className="w-1/3 px-2">
              <div className="border rounded p-1">
                <div className="border rounded text-center p-4">
                  <i className="fa fa-users-cog fa-2x text-primary-texty mb-2"></i>
                  <h2 className="mb-1">1234</h2>
                  <p className="mb-0">Staffs</p>
                </div>
              </div>
            </div>
            <div className="w-1/3 px-2">
              <div className="border rounded p-1">
                <div className="border rounded text-center p-4">
                  <i className="fa fa-users fa-2x text-primary mb-2"></i>
                  <h2 className="mb-1">1234</h2>
                  <p className="mb-0">Clients</p>
                </div>
              </div>
            </div>
          </div>
          <Button type="primary" className="py-3 px-5 mt-2">
            Explore More
          </Button>
        </div>
        <div className="lg:w-1/2 px-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2 text-right">
              <Image
                className="rounded w-3/4"
                src="/img/about-1.jpg"
                alt="About Image 1"
                width={200}
                height={200}
                style={{ marginTop: "25%" }}
              />
            </div>
            <div className="w-1/2 px-2">
              <Image
                className="rounded w-full"
                src="/img/about-2.jpg"
                alt="About Image 2"
                width={400}
                height={300}
              />
            </div>
            <div className="w-1/2 px-2 text-right">
              <Image
                className="rounded w-1/2"
                src="/img/about-3.jpg"
                alt="About Image 3"
                width={150}
                height={150}
              />
            </div>
            <div className="w-1/2 px-2">
              <Image
                className="rounded w-3/4"
                src="/img/about-4.jpg"
                alt="About Image 4"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
