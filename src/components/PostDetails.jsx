import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DeleteBtn from './DeleteBtn';
import useFetch from './useFetch';

function PostDetails() {
    const { id } = useParams();
    const { postData, loading, errorMessage } = useFetch('http://localhost:8000/posts/' + id);
    const navigate = useNavigate();

    function afterDelete() {
        navigate('/home');
    }

    return (
        <div>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {loading && <h2 className="loading">Loading...</h2>}
            {postData && (
                <article>
                    <h2>{postData.title}</h2>
                    <p className="author">{postData.author}</p>
                    <div>{postData.body}</div>
                    <button style={{ marginTop: '30px' }} onClick={() => DeleteBtn(id, afterDelete)} className="btn-delete">
                        Delete
                    </button>
                </article>
            )}
        </div>
    );
}

export default PostDetails;
