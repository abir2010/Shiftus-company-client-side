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
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100">
        <h2 className="text-xl bg-indigo-200 font-semibold">Your booked services</h2>
        <ul className="flex flex-col divide-y divide-coolGray-700">
          {
            regServices.map(service=><RegService
                key={service._id}
                service={service}
            ></RegService>)
          }
        </ul>
        <div className="flex justify-center space-x-4">
          <button
            onClick={()=>history.push("/home")}
            type="button"
            className="px-6 py-2 border rounded-md dark:border-violet-400"
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
