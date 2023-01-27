import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    const [updateFlag, setUpdateFlag] = useState(false);
    const { postData, loading, errorMessage } = useFetch('http://localhost:8000/posts', updateFlag);

    return (
        <main className="main">
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {loading && <h2 className="loading">Loading...</h2>}
            {postData && <BlogList updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} postData={postData} />}
        </main>
    );
}

export default Home;
