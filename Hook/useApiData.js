import { useState } from "react";
import axios from 'axios'
import {API_KEY} from '@env'
const useApiData = () => {
    const [Data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const [Error, setError] = useState(null)
    const FetchData = async (query) => {
        setisLoading(true)
        setError(null)
        await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=yes&alerts=yes`).then((res)=>{
            setData(res.data)
            setisLoading(false)
        }).catch((err)=>{
            setError(err)
            setisLoading(false)
        })
    }
    return { Data, isLoading, Error, FetchData }
}

export default useApiData;