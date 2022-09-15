import { Routes as PageRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";

const Routes = ({ navHeight }) => {
    console.log(navHeight);
    return (
        <PageRoutes>
            <Route path="/" element={<Home navHeight={navHeight} />} />
            <Route path="/blog" element={<Blog />} />
            {/* <Route path="/about" elememt={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectIndex />} />
            <Route path="/blog/:id" element={<BlogIndex />} /> */}
        </PageRoutes>
    );
};

export default Routes;
