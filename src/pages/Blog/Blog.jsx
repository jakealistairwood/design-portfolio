import "./Blog.scss";
import { blog } from "../../portfolio";
import BlogThumbnail from "../../components/BlogThumbnail/BlogThumbnail";

const Blog = () => {
    return (
        <main className="blog container">
            <div className="blog__options">
                <h1>My Blog</h1>
                <div className="blog__categories">
                    <h2>Categories</h2>
                    <ul>
                        <li>All</li>
                        <li>UI/UX</li>
                        <li>All</li>
                    </ul>
                </div>
            </div>
            <div className="blog__posts">
                {blog.map(post => {
                    return <BlogThumbnail article={post} width={"200px"} />;
                })}
            </div>
        </main>
    );
};

export default Blog;
