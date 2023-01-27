import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import NewPost from './NewPost';
import NotFound from './NotFound';
import PostDetails from './PostDetails';

function App() {
    return (
        <div className="app">
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/new/post" element={<NewPost />} />
                    <Route path="/blogs/:id" element={<PostDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
