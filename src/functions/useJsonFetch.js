import { useState, useEffect } from "react";

export default function useJsonFetch(url, opts = {}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url, {
      ...opts,
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          setError('Error! Empty Data Set.');
        } else if (/error/i.test(data.status)) {
          setError(data.status);
        } else {
          setData(data.status);
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}