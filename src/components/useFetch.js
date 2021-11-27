import axios from "axios";
import { useState, useEffect } from "react";

function useFetch() {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);

    async function callAsync() {
        try {
            const response = await axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=a1a6bd295f99062830aa64111bebad81&q=6');
            const res = response.data.RESULT;
            setData([...res]);
        }
        catch (error) {
            console.error(error);
            setError("요청실패");
        }
    }
    useEffect(() => callAsync(),[]);

    return {data, error};
}

export default useFetch;