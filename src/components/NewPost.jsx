import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

function NewPost() {
    const { postData, loading, errorMessage } = useFetch('http://localhost:8000/posts');

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Wet Pussy');
    const [pending, setPanding] = useState(false);
    const navigate = useNavigate();

    function clickForm(e) {
        e.preventDefault();

        const blog = { title, body, author };
        setPanding(true);

        setTimeout(() => {
            fetch('http://localhost:8000/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blog),
            }).then(() => {
                setPanding(false);
                setTitle('');
                setBody('');
                setAuthor('Wet Pussy');
                navigate('/home');
            });
        }, 1000);
    }

    return (
        <div>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {loading && <h2 className="loading">Loading...</h2>}
            {postData && (
                <form onSubmit={clickForm} className="create">
                    <label className="style-post">Post title</label>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label className="style-post">Post content</label>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} />

                    <label className="style-post">Author</label>
                    <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                        <option value="Piter Pan">Piter Pan</option>
                        <option value="Harry Potter">Harry Potter</option>
                        <option value="Wet Pussy">Wet Pussy</option>
                    </select>

                    {pending && <button disabled>Loading post...</button>}
                    {!pending && <button>Create post</button>}
                </form>
            )}
        </div>
    );
}

export default NewPost;
