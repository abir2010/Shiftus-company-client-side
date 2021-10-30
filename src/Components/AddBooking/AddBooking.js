import React, { useRef } from "react";
import { useHistory } from "react-router";

const AddBooking = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const imgRef = useRef();
  const history = useHistory();
  const handleAddService = (e) => {
    const newService = {
        title: titleRef.current.value,
        des: descriptionRef.current.value,
        img: imgRef.current.value,
    }
    console.log(newService);
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("You just booked this service !\n Thank you !");
          if (alert) {
            history.push("/home");
          }
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={handleAddService}
        className="lg:m-4 border border-gray-300 rounded-md text-center"
      >
        <p className="lg:text-2xl bg-indigo-200 py-2 font-bold mt-12 mb-8">
          Fill-up & submit the form to Add a new Service
        </p>
        <input
          ref={titleRef}
          type="text"
          className="border-b p-2 mb-4 border-gray-400 lg:w-72 font-bold"
          placeholder="Service title"
          required
        />{" "}
        <br />
        <textarea
          ref={descriptionRef}
          type="text"
          className="border-b p-2 mb-4 border-gray-400 lg:w-72 font-bold"
          placeholder="description"
          required
        />{" "}
        <br />
        <input
          ref={imgRef}
          type="text"
          className="border-b p-2 mb-4 border-gray-400 lg:w-72 font-bold"
          placeholder="image-url"
          required
        />
        <div className="flex justify-center">
          <input
            type="submit"
            className="border font-bold bg-indigo-400 border-indigo-500 px-24 py-2 mt-8 mb-12 text-center flex  items-center hover:bg-green-400"
            value="Add"
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
  );
};

export default AddBooking;
