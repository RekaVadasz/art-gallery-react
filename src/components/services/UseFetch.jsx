import { useState, useEffect, useRef } from 'react';

export default function UseFetch(url) {
    const cache = useRef({});
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                setStatus('fetching');
                if (cache.current[url]) { //if response is already saved in cache, then use that data
                    const data = cache.current[url]; 
                    setData(data);
                    setStatus('fetched');
                } else {
                    const response = await fetch(url);
                    const data = await response.json();
                    cache.current[url] = data; //save response in cache;
                    setData(data);
                    setStatus('fetched');
                }
            } catch (error){
                console.log("error", error)
            }
        };

        fetchData();
    }, [url])
  
    return {status, data}
};
