import "./BlogThumbnail.scss";
import ArrowRightUp from "../../assets/images/arrow-right-up.svg";
import { Link } from "react-router-dom";

const BlogThumbnail = ({ article, width }) => {
    return (
        <Link
            to={`/blog/${article.id}`}
            className="article"
            style={{ minWidth: width }}
        >
            <div className="article__img">
                <img src={article.thumbnailImg} alt="" />
            </div>
            <h6>{article.categories.join(" | ")}</h6>
            <div className="article__header">
                <h5>{article.title}</h5>
                <img src={ArrowRightUp} alt="" />
            </div>
            <p className="article__excerpt">{article.excerpt}</p>
        </Link>
    );
};

export default BlogThumbnail;
