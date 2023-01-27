import { Link } from 'react-router-dom';
import DeleteBtn from './DeleteBtn';

function BlogList({ postData, setUpdateFlag, updateFlag }) {
    const render = postData.map((data) => {
        return (
            <div key={data.id} className="post-preview">
                <Link to={`/blogs/${data.id}`}>
                    <h2>{data.title}</h2>
                    <p>{data.author}</p>
                </Link>
                <button onClick={() => DeleteBtn(data.id, setUpdateFlag(!updateFlag))} className="btn-delete">
                    Delete
                </button>
            </div>
        );
    });

    return <div className="blog">{render}</div>;
}

export default BlogList;
