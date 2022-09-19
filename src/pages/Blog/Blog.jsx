import { useState } from "react";
import "./Blog.scss";
import { blog } from "../../portfolio";
import BlogThumbnail from "../../components/BlogThumbnail/BlogThumbnail";

const Blog = () => {
    const [categories, setCategories] = useState([
        {
            category: "All",
            active: true,
        },
        {
            category: "UI/UX",
            active: false,
        },
    ]);

    // let categoriesArr = [];

    const handleCategory = e => {
        console.log(e.target.innerText);
    };

    // let filteredCategories = blog.map(article => {
    //     article.categories.map(category => {
    //         if (categoriesArr.includes(category)) {
    //             return;
    //         }
    //         categoriesArr.push(category);
    //     });
    // });

    // console.log(categoriesArr);

    return (
        <main className="blog container">
            <div className="blog__options">
                <h1>My Blog</h1>
                <div className="blog__categories">
                    <h2>Categories</h2>
                    <ul>
                        {/* <li>All</li> */}
                        {categories.map(category => {
                            return (
                                <li
                                    onClick={e => {
                                        handleCategory(e);
                                    }}
                                >
                                    {category.category}
                                </li>
                            );
                        })}
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
