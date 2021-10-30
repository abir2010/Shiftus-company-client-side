import React from "react";
import { useHistory } from "react-router";
import notfoundImg from "../../images/notfound_image/404 Error Page not Found with people connecting a plug-amico.png";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className="flex justify-center">
      <div>
        <img width="700px" src={notfoundImg} alt="" />
        <div className="flex justify-center">
          <button
            onClick={() => history.push("/home")}
            type="button"
            id="login-btn"
            className="text-lg font-bold block px-4 py-2 font-bold hover:bg-gray-200"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
