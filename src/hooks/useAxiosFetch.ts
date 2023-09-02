import { useEffect, useState } from "react"
import axios from "axios";


// added a proxyURL CMS that allows bypassing of CORS Error
function useAxiosFetch (URL:string) {
  const proxyURL = `https://corsproxy.io/?`
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const [data, setData] = useState(null);


useEffect(() => {
  setLoading(true);
axios.get(`${proxyURL}${URL}`).then((response) => {
setData(response.data)
}).catch((error) => setError(error)).finally(() => setLoading(false));
}, [URL])
return {data, loading, error};
}

export default useAxiosFetch;