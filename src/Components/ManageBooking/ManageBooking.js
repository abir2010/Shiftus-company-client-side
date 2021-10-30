import React from "react";
import deleteIcon from "../../images/icons/icons8-cross-mark-button-48.png";

const ManageBooking = (props) => {
  const { booking, handleDeleteBooking, handleStatusUpdate } = props;
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{booking?.name}</div>
            <div className="text-sm text-gray-500">{booking?.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{booking?.serviceName}</div>
        <div className="text-sm text-gray-500">{booking?.deliveryTo}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={
            booking?.status == "pending"
              ? `
                  px-2
                  inline-flex
                  text-xs
                  leading-5
                  font-semibold
                  rounded-full
                  bg-red-100
                  text-red-600
                  `
              : `
                  px-2
                  inline-flex
                  text-xs
                  leading-5
                  font-semibold
                  rounded-full
                  bg-green-100
                  text-green-600
                  `
          }
        >
          {booking?.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {booking?.date}
      </td>
      <td
        className="
                  px-6
                  py-4
                  whitespace-nowrap
                  text-right text-sm
                  font-medium
                  lg:flex
                "
      >
        <button
          onClick={() => handleStatusUpdate(booking?._id)}
          className="text-indigo-600 font-bold hover:text-indigo-900"
        >
          Approve
        </button>
        <button
          onClick={() => handleDeleteBooking(booking?._id)}
          href="/"
          className="text-indigo-600 ml-2 hover:text-indigo-900"
        >
          <img width="30px" src={deleteIcon} alt="" />
        </button>
      </td>
    </tr>
  );
};

export default ManageBooking;
