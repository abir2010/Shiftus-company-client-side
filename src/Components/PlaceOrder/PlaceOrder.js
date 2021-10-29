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
          if(alert){
            history.push("/home");
          }
        }
      });
    
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={handleReg}
        className="my-11 mx-96 border border-gray-300 rounded-md text-center"
        style={{
          backgroundImage: `url(
            ${service?.img})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="text-2xl bg-indigo-200 py-2 font-bold mt-12 mb-8">
          Fill-up & submit the form to Book this Service
        </p>
        <input
          type="text"
          className="border-b p-2 mb-4 border-gray-400 w-72 font-bold"
          value={user.displayName}
        />{" "}
        <br />
        <input
          type="text"
          className="border-b p-2 mb-4 border-gray-400 w-72 font-bold"
          value={user.email}
        />{" "}
        <br />
        <input
          ref={dateRef}
          type="text"
          className="border-b p-2 mb-4 border-gray-400 w-72 font-bold"
          placeholder="Date"
          required
        />{" "}
        <br />
        <input
          ref={phoneRef}
          type="text"
          className="border-b p-2 mb-4 border-gray-400 w-72 font-bold"
          placeholder="Phone"
          required
        />{" "}
        <br />
        <input
          ref={cityRef}
          type="text"
          className="border-b p-2 mb-4 border-gray-400 w-72 font-bold"
          placeholder="Delivery city"
          required
        />{" "}
        <br />
        <input
          type="text"
          className="border-b p-2 border-gray-400 w-72 font-bold"
          value={service?.title}
        />
        <div className="flex justify-center">
          <input
            type="submit"
            className="border font-bold bg-indigo-400 border-indigo-500 px-24 py-2 mt-8 mb-12 text-center flex  items-center hover:bg-green-400"
            value="Registration"
          />
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;