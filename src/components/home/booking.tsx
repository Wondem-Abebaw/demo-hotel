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
              <select className="form-select">
                <option selected>Adult</option>
                <option value="1">Adult 1</option>
                <option value="2">Adult 2</option>
                <option value="3">Adult 3</option>
              </select>
            </div>
            <div>
              <select className="form-select">
                <option selected>Child</option>
                <option value="1">Child 1</option>
                <option value="2">Child 2</option>
                <option value="3">Child 3</option>
              </select>
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
