import React, { useRef } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useServices from "../../Hooks/useServices";

const PlaceOrder = () => {
  const history = useHistory();
  const { _id } = useParams();
  const { user } = useAuth();
  const dateRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();
  const { services } = useServices();
  const service = services.find((data) => data._id == _id);
  const handleReg = (e) => {
    const regService = {
      name: user?.displayName,
      email: user?.email,
      date: dateRef.current.value,
      phone: phoneRef.current.value,
      deliveryTo: cityRef.current.value,
      serviceName: service?.title,
      serviceImg: service?.img,
      status: "pending",
    };
    // console.log(regService);
    fetch("http://localhost:5000/regService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(regService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("You just booked this service !\n Thank you !");
          if (alert) {
            history.push("/myBookings");
          }
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <div className="lg:m-4 lg:mx-72 border border-gray-300 rounded-md text-center">
        <p className="text-xl lg:text-2xl bg-indigo-200 py-2 font-bold mt-12">
          {service?.title}
        </p>
        <p className="text-md bg-indigo-200 py-2 font-bold mb-12">
          {service?.des}
        </p>
        <form
          onSubmit={handleReg}
          className="lg:m-4 border border-gray-300 rounded-md text-center"
          style={{
            backgroundImage: `url(
            ${service?.img})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="lg:text-2xl bg-indigo-200 py-2 font-bold mt-12 mb-8">
            Fill-up & submit the form to Book this Service
          </p>
          <input
            type="text"
            className="border-b p-2 mb-4 border-gray-400 lg:w-72 font-bold"
            value={user.displayName}
          />{" "}
          <br />
          <input
            type="text"
            className="border-b p-2 mb-4 border-gray-400 lg:w-72 font-bold"
            value={user.email}
          />{" "}
          <br />
          <input
            ref={dateRef}
            type="text"
            className="border-b p-2 mb-4 border-gray-400 lg:w-72 font-bold"
            placeholder="Date"
            required
          />{" "}
          <br />
          <input
            ref={phoneRef}
            type="text"
            className="border-b p-2 mb-4 border-gray-400 lg:w-72 font-bold"
            placeholder="Phone"
            required
          />{" "}
          <br />
          <input
            ref={cityRef}
            type="text"
            className="border-b p-2 mb-4 border-gray-400 lg:w-72 font-bold"
            placeholder="Delivery city"
            required
          />{" "}
          <br />
          <input
            type="text"
            className="border-b p-2 border-gray-400 lg:w-72 font-bold"
            value={service?.title}
          />
          <div className="flex justify-center">
            <input
              type="submit"
              className="border font-bold bg-indigo-400 border-indigo-500 px-24 py-2 mt-8 mb-12 text-center flex  items-center hover:bg-green-400"
              value="Registration"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => history.push("/home")}
              type="button"
              className="px-6 py-2 bg-white font-bold border rounded-md dark:border-violet-400"
            >
              Go back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
