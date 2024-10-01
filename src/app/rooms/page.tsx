import Image from "next/image";
import Link from "next/link";
import { Room } from "@/models/room.model";
import { getRooms } from "./api/room.api";
import { downloadUrlParser } from "@/lib/utils";

const RoomsPage = async ({ query }: { query: string }) => {
  const rooms = await getRooms({
    skip: 0,
    orderBy: [{ field: "createdAt", direction: "asc" }],
  });
  // console.log("rooms", rooms);
  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid mb-5 p-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/carousel-1.jpg')" }}
      >
        <div className="container-fluid py-5 bg-black bg-opacity-50">
          <div className="container text-center pb-5">
            <h1 className="text-4xl text-white mb-3 animate-slideInDown">
              Rooms
            </h1>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Booking Start */}
      <div className="container-fluid pb-5 animate-fadeIn">
        <div className="container">
          <div className="bg-white shadow p-9">
            <div className="flex flex-wrap gap-2">
              <div className="flex-1 flex flex-wrap gap-2">
                <div className="w-full md:w-1/4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Check in"
                  />
                </div>
                <div className="w-full md:w-1/4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Check out"
                  />
                </div>
                <div className="w-full md:w-1/4">
                  <select className="form-select">
                    <option selected>Adult</option>
                    <option value="1">Adult 1</option>
                    <option value="2">Adult 2</option>
                    <option value="3">Adult 3</option>
                  </select>
                </div>
                <div className="w-full md:w-1/4">
                  <select className="form-select">
                    <option selected>Child</option>
                    <option value="1">Child 1</option>
                    <option value="2">Child 2</option>
                    <option value="3">Child 3</option>
                  </select>
                </div>
              </div>
              <div className="w-full md:w-1/6">
                <button className="btn btn-primary w-full">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}

      {/* Room Start */}
      <div className="container mx-auto py-10">
        <div className="text-center mb-10">
          <h6 className="text-primary text-sm font-bold uppercase">
            Our Rooms
          </h6>
          <h1 className="text-4xl font-bold mb-5">
            Explore Our <span className="text-primary">Rooms</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms?.data?.map((room: Room) => (
            <div
              key={room?.id}
              className="room-item bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={""}
                  alt={downloadUrlParser({
                    originalname: room?.roomImage?.originalname,
                    path: room?.roomImage?.path,
                    filename: room?.roomImage?.filename,
                    mimetype: room?.roomImage?.mimetype,
                  })}
                  height={300}
                  width={300}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute bottom-0 left-4 bg-primary text-white py-1 px-3 rounded">
                  ${room?.price?.toString()}/Night
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-xl font-semibold">{room?.name}</h5>
                  <div className="flex space-x-1 text-primary">
                    {/* {Array(room.rating)
                      .fill(0)
                      .map((_, index) => (
                        <StarFilled key={index} />
                      ))} */}
                  </div>
                </div>
                {/* <div className="flex mb-3 space-x-3 text-gray-500">
                  <span className="flex items-center space-x-1">
                    <RestOutlined className="text-primary" />
                    <span>{room?.bed} Bed</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <RestOutlined className="text-primary" />
                    <span>{room?.bath} Bath</span>
                  </span>
                  {room?.wifi && (
                    <span className="flex items-center space-x-1">
                      <WifiOutlined className="text-primary" />
                      <span>Wifi</span>
                    </span>
                  )}
                </div> */}
                <p className="text-gray-600 mb-5">{room.description}</p>
                <div className="flex justify-between">
                  <Link
                    href="#"
                    passHref
                    className="text-sm font-semibold text-white bg-primary-text py-2 px-4 rounded"
                  >
                    View Detail
                  </Link>

                  <Link
                    href="#"
                    passHref
                    className="text-sm font-semibold text-white bg-black py-2 px-4 rounded"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Room End */}
      <div className="my-28"></div>
    </>
  );
};
export default RoomsPage;
