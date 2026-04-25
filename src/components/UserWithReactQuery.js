import { useQuery } from "@tanstack/react-query";
import Error from './Error';
import Shimmer from "./Shimmer";
import axios from "axios";

const UserWithReactQuery  = ()=>{

    const fetchData = async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/3");
      return data;
    }

    const {data, isLoading, isError, error} = useQuery({
        queryKey:['user'],
        queryFn: fetchData,
        // refetchInterval: 1000, // 10 seconds
    })

    
    if(isLoading){
        return <h2> Loading with Query Stack</h2>
    }

    if(isError){
        return <Error />
    }

    return (
        <div>
            <div className="border-solid">
            <h2> User - functional component with Tanstack Query(React Query)</h2>
            <h2>Name: {data.name} </h2>
            <h3>Place: {data.address.city}</h3>
            </div>
        </div>
    )
}

export default UserWithReactQuery;