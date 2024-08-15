import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import {
  StarFilled,
  WifiOutlined,
  HomeOutlined,
  RestOutlined,
} from "@ant-design/icons";

export default function HomeRooms() {
  const rooms = [
    {
      id: 1,
      title: "Junior Suite",
      image: "/img/room-1.jpg",
      price: "$100/Night",
      features: [
        { icon: <HomeOutlined />, text: "3 Bed" },
        { icon: <RestOutlined />, text: "2 Bath" },
        { icon: <WifiOutlined />, text: "Wifi" },
      ],
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      delay: "0.1s",
    },
    {
      id: 2,
      title: "Executive Suite",
      image: "/img/room-2.jpg",
      price: "$100/Night",
      features: [
        { icon: <HomeOutlined />, text: "3 Bed" },
        { icon: <RestOutlined />, text: "2 Bath" },
        { icon: <WifiOutlined />, text: "Wifi" },
      ],
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      delay: "0.3s",
    },
    {
      id: 3,
      title: "Super Deluxe",
      image: "/img/room-3.jpg",
      price: "$100/Night",
      features: [
        { icon: <HomeOutlined />, text: "3 Bed" },
        { icon: <RestOutlined />, text: "2 Bath" },
        { icon: <WifiOutlined />, text: "Wifi" },
      ],
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      delay: "0.6s",
    },
  ];

  return (
    <div className="container mx-auto py-20">
      <div className="text-center mb-10">
        <h6 className="text-primary-text uppercase mb-2">Our Featured Rooms</h6>
        <h1 className="mb-5">
          Explore Our <span className="text-primary-text uppercase">Rooms</span>
        </h1>
      </div>
      <div className="flex flex-wrap -mx-4">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="lg:w-1/3 md:w-1/2 px-4 mb-8"
            style={{ animationDelay: room.delay }}
          >
            <div className="shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <Image
                  className="w-full h-64 object-cover"
                  src={room.image}
                  alt={room.title}
                  width={400}
                  height={300}
                />
                <small className="absolute left-0 top-100 transform -translate-y-1/2 bg-primary-text text-white rounded py-1 px-3 ml-4">
                  {room.price}
                </small>
              </div>
              <div className="p-4 mt-2">
                <div className="flex justify-between mb-3">
                  <h5 className="mb-0">{room.title}</h5>
                  <div className="pl-2 flex items-center">
                    <StarFilled className="text-primary-text" />
                    <StarFilled className="text-primary-text" />
                    <StarFilled className="text-primary-text" />
                    <StarFilled className="text-primary-text" />
                    <StarFilled className="text-primary-text" />
                  </div>
                </div>
                <div className="flex mb-3">
                  {room.features.map((feature, index) => (
                    <small
                      key={index}
                      className={`border-r-2 pr-3 ${
                        index < room.features.length - 1 ? "mr-3" : ""
                      } flex items-center`}
                    >
                      {feature.icon}
                      <span className="ml-2">{feature.text}</span>
                    </small>
                  ))}
                </div>
                <p className="text-body mb-3">{room.description}</p>
                <div className="flex justify-between">
                  <Link href="/room-details">
                    <Button type="primary" className="py-2 px-4">
                      View Detail
                    </Button>
                  </Link>
                  <Link href="/book-room">
                    <Button type="default" className="py-2 px-4">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
