// src/components/home/Booking.tsx
const Booking: React.FC = () => {
  return (
    <div className="container-fluid pb-5 booking">
      <div className="container">
        <div className="bg-white shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <input
                type="text"
                className="form-input"
                placeholder="Check in"
              />
            </div>
            <div>
              <input
                type="text"
                className="form-input"
                placeholder="Check out"
              />
            </div>
            <div>
              <input
                type="number"
                className="form-input"
                placeholder="Adults"
                // defaultValue={1}
                min={0}
              />
            </div>
            <div>
              <input
                type="number"
                className="form-input"
                placeholder="Children"
                // defaultValue={1}
                min={0}
              />
            </div>
            <div>
              <button className="bg-blue-500 text-white w-full py-2  rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
