import {useState} from 'react'
export function useFetching(callback: () => void) {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
    const fetch = async () => {
      try {
        setLoading(true);
        await callback();
      } catch (e) {
        if (e instanceof Error) {
            // можно работать с error как Error
            setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };
    return [fetch, loading, error];
}
