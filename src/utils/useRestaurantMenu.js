import axios from "axios";
import { useEffect, useState } from "react";
import {RES_MENU} from '../utils/constant';

const useRestaurantMenu = (resId)=>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const data = await axios.get(RES_MENU + resId);
        setResInfo(data);
    }

    return resInfo;
}

export default useRestaurantMenu;
    