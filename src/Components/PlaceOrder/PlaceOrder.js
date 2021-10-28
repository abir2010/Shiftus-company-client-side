import React, { useRef } from "react";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useServices from "../../Hooks/useServices";

const PlaceOrder = () => {
  const { _id } = useParams();
  const { user } = useAuth();
  const dateRef = useRef();
  const desRef = useRef();
  const { services } = useServices();
  const service = services.find((data) => data._id == _id);
  const handleReg = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={handleReg}
        className="my-11 mx-96 border border-gray-300 rounded-md text-center"
      >
        <p className="text-2xl bg-indigo-200 py-2 font-bold mt-12 mb-8">
          Fill-up & submit the form to Book this Service
        </p>
        <input
          type="text"
          className="border-b mb-4 border-gray-400 w-72 font-bold"
          value={user.displayName}
        />{" "}
        <br />
        <input
          type="text"
          className="border-b mb-4 border-gray-400 w-72 font-bold"
          value={user.email}
        />{" "}
        <br />
        <input
          ref={dateRef}
          type="text"
          className="border-b mb-4 border-gray-400 w-72 font-bold"
          placeholder="Date"
        />{" "}
        <br />
        <input
          ref={desRef}
          type="text"
          className="border-b mb-4 border-gray-400 w-72 font-bold"
          placeholder="Description"
        />{" "}
        <br />
        <input
          type="text"
          className="border-b border-gray-400 w-72 font-bold"
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
