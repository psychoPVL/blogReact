function NavBar() {
    return (
        <nav className="navBar">
            <h1>React Blog</h1>
            <div className="links">
                <a href="/home">Home</a>
                <a href="/new/post">New post</a>
            </div>
        </nav>
    );
}

export default NavBar;
