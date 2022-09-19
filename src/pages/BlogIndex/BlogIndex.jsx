import { useParams } from "react-router-dom";
import { blog } from "../../portfolio";
import "./BlogIndex.scss";

const BlogIndex = () => {
    const { id } = useParams();
    console.log(id);
    const filteredPost = blog.filter(post => {
        return post.id == id;
    });

    console.log(filteredPost[0]);

    return (
        <main className="blog-index">
            <img src={filteredPost[0].thumbnailImg} alt="" />
            <div className="blog-index__content">
                <h1>{filteredPost[0].title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: filteredPost[0].content,
                    }}
                ></div>
            </div>
        </main>
    );
};

export default BlogIndex;
