import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch("https://boiling-waters-95474.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setLoad(false);
        setServices(data);
      });
  }, []);

  return {
      load,
      services,
  }
};

export default useServices;