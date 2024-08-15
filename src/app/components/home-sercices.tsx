import Link from "next/link";
import {
  ApartmentOutlined,
  CoffeeOutlined,
  HeartOutlined,
  ShopOutlined,
  CalendarOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";

export default function HomeServices() {
  const services = [
    {
      id: 1,
      title: "Rooms & Apartment",
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      icon: <ApartmentOutlined className="text-primary-text text-4xl" />,
      delay: "0.1s",
      link: "/rooms-apartment",
    },
    {
      id: 2,
      title: "Food & Restaurant",
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      icon: <CoffeeOutlined className="text-primary-text text-4xl" />,
      delay: "0.2s",
      link: "/food-restaurant",
    },
    {
      id: 3,
      title: "Spa & Fitness",
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      icon: <HeartOutlined className="text-primary-text text-4xl" />,
      delay: "0.3s",
      link: "/spa-fitness",
    },
    {
      id: 4,
      title: "Sports & Gaming",
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      icon: <ShopOutlined className="text-primary-text text-4xl" />,
      delay: "0.4s",
      link: "/sports-gaming",
    },
    {
      id: 5,
      title: "Event & Party",
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      icon: <CalendarOutlined className="text-primary-text text-4xl" />,
      delay: "0.5s",
      link: "/event-party",
    },
    {
      id: 6,
      title: "GYM & Yoga",
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      icon: <ExperimentOutlined className="text-primary-text text-4xl" />,
      delay: "0.6s",
      link: "/gym-yoga",
    },
  ];

  return (
    <div className="container mx-auto py-20">
      <div className="text-center mb-10">
        <h6 className="text-primary-text uppercase mb-2">Our Services</h6>
        <h1 className="mb-5">
          Explore Our{" "}
          <span className="text-primary-text uppercase">Services</span>
        </h1>
      </div>
      <div className="flex flex-wrap -mx-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="lg:w-1/3 md:w-1/2 px-4 mb-8"
            style={{ animationDelay: service.delay }}
          >
            <Link href={service.link}>
              <div className="service-item rounded bg-white shadow-lg p-6 hover:bg-primary-text transition">
                <div className="service-icon bg-transparent border rounded-full p-2 mb-4 flex justify-center items-center">
                  <div className="w-16 h-16 border rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h5 className="text-xl font-semibold mb-3">{service.title}</h5>
                <p className="text-body mb-0">{service.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
