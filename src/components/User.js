import { memo, useEffect, useState } from "react";
import axios from "axios";
import Error from './Error';
import Shimmer from "./Shimmer";

const User = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      setName(data.name);
      setCity(data.address.city);
    } catch (error) {
        setIsError(true);
        console.log(error.message);
    }finally{
        setIsLoading(false)
    }
  };


    if(isLoading){
        return <h2> Loading with useEffect</h2>
    }

    if(isError){
        return <Error />
    }

  return (
    <div className="border-solid">
      <h2> User - functional component with useEffect</h2>
      <h2>Name: {name} </h2>
      <h3>Place: {city}</h3>
    </div>
  );
};

export default memo(User);
