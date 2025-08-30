import {useState} from 'react'

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true)=> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
}

const fetchData = async () => {
    try{
        setLoading(true);
        setError(null)

        const result = await fetchFunction();

    } catch (err){
        //@ts-ignore
        setError(err instanceof Erorr ? err : new Error('An error occurred'));
    } finally {
        setLoading(false);
    }
}