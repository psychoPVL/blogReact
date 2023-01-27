import { useEffect, useState } from 'react';

function useFetch(url, updateFlag) {
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then((value) => {
                    if (value.ok === false) {
                        throw Error('invalid data from the server  (⌣̀_⌣́)');
                    }
                    return value.json();
                })
                .then((value) => {
                    setPostData(value);
                    setLoading(false);
                    setErrorMessage(null);
                })
                .catch((value) => {
                    if (value.name === 'AbortError') {
                    } else {
                        setErrorMessage(value.message);
                        setLoading(false);
                    }
                });
        }, 1000);

        return () => {
            abortCont.abort();
        };
    }, [updateFlag]);

    return { postData, loading, errorMessage };
}

export default useFetch;
