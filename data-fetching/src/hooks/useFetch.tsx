import { useEffect,useState } from "react";
import axios from 'axios';



export function useFetch<T = unknown>(url: string) {

  const [data, setData] = useState<T | null>(null);

    useEffect(() => {
    axios.get(url).then(respone => setData(respone.data));
  }, []);
  return {
    data
  }
};
