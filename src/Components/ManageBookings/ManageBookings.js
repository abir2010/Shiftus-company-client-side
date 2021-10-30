import React, { useEffect, useState } from "react";
import ManageBooking from "../ManageBooking/ManageBooking";

const ManageBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  useEffect(() => {
    fetch("https://boiling-waters-95474.herokuapp.com/regServices")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);
  const handleDeleteBooking = (id) => {
    const found = window.confirm("Are you sure, you want to delete ?");
    if (found) {
      fetch(`https://boiling-waters-95474.herokuapp.com/regServices/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Remove success !");
            const filtered = allBookings.filter((service) => service._id != id);
            setAllBookings(filtered);
          }
        });
    }
  };
  let uiStatus = "pending";
  const handleStatusUpdate = (id) => {
    fetch(`https://boiling-waters-95474.herokuapp.com/regServices/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          const filtered = allBookings.find(service=>service._id==id);
          filtered.status = "Approved";
          const clone = [].concat(allBookings);
          setAllBookings(clone);
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col text-left font-bold my-12 mx-4 lg:py-12">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div
              className="
          shadow
          overflow-hidden
          border-b border-gray-200
          sm:rounded-lg
        "
            >
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="
                  px-6
                  py-3
                  text-left text-sm
                  font-bold
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="
                  px-6
                  py-3
                  text-left text-sm
                  font-bold
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                    >
                      Details
                    </th>
                    <th
                      scope="col"
                      className="
                  px-6
                  py-3
                  text-left text-sm
                  font-bold
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="
                  px-6
                  py-3
                  text-left text-sm
                  font-bold
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                    >
                      Delivery date
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allBookings.map((booking) => (
                    <ManageBooking
                      key={booking._id}
                      booking={booking}
                      status={uiStatus}
                      handleDeleteBooking={handleDeleteBooking}
                      handleStatusUpdate={handleStatusUpdate}
                    ></ManageBooking>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBookings;
