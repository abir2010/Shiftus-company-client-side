import React from "react";
import { useHistory } from "react-router";
import "./SingleService.css";

const SingleService = (props) => {
  const { _id, title, des, img } = props.service;
  const history = useHistory();
  const handleBookNowBTN = () => {
    history.push(`/placeOrder/${_id}`);
  };
  return (
    <article className="flex flex-col card dark:bg-coolGray-900">
      <a href="/" aria-label="Te nulla oportere reprimique his dolorum">
        <img
          alt=""
          className="object-cover w-full h-52 dark:bg-coolGray-500"
          src={img}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <div className="bg-indigo-200 text-lg font-bold tracking-wider uppercase dark:text-violet-400">
          {title}
        </div>
        <h3 className="flex-1 py-2 text-md font-bold leading-snug">{des}</h3>
        <div className="pt-3 space-x-2 text-xs dark:text-coolGray-400">
          <button
            onClick={handleBookNowBTN}
            className="px-8 py-1 text-lg bg-indigo-400 font-semibold rounded"
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleService;
