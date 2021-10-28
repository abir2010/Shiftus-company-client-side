import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setLoad(false);
        setServices(data);
      });
  }, []);

  return {
      load,
      services
  }
};

export default useServices;