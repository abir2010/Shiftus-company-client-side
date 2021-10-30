import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../Hooks/useAuth";
import RegService from "../RegService/RegService";

const MyBookings = () => {
  const [regServices, setRegServices] = useState([]);
  const {user} = useAuth();
  const history = useHistory();
  useEffect(() => {
    fetch(`http://localhost:5000/regService/${user.email}`)
      .then((res) => res.json())
      .then((data) => setRegServices(data));
  }, []);
  const handleRemoveBTN = (id) => {
    const found = window.confirm("Are you sure, you want to delete ?");
    if (found) {
      fetch(`http://localhost:5000/myBookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Remove success !");
            // const found = bookings.filter(booking=>booking._id!=id)
            const filtered = regServices.filter(service=>service._id!=id);
            setRegServices(filtered)
          }
        });
    }
  };
  return (
    <div className="flex justify-center lg:my-24">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100">
        <h2 className="text-xl bg-indigo-200 font-semibold">Your booked services</h2>
        <ul className="flex flex-col divide-y divide-coolGray-700">
          {
            regServices.map(service=><RegService
                func={handleRemoveBTN}
                key={service._id}
                service={service}
            ></RegService>)
          }
        </ul>
        <div className="flex justify-center space-x-4">
          <button
            onClick={()=>history.push("/home")}
            type="button"
            className="px-6 py-2 font-bold border rounded-md dark:border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only"> to home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
