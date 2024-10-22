import { Helmet } from "react-helmet-async";

import BlogAbout from "../Blog/BlogComponents/BlogAbout/BlogAbout";
import LatestNews from "./LatestNews/LatestNews";
import { generalBlogs } from "../../utils/blog/blog";
import GameReview from "./GameReview/GameReview";

function Main() {
  return (
    <>
      <Helmet>
        <title>Tribuna Total</title>
        <meta
          name="description"
          content="Explore the Avanti Enterprises blog for expert tips on kitchen and bathroom cabinet remodeling in Dallas-Fort Worth. Get design ideas, trends, and home improvement advice."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <LatestNews blogs={generalBlogs} />
      <div className="main__blogs-container">
        <div className="main__blogs">
          {generalBlogs.map((blog) => {
            return <GameReview key={blog.id} blog={blog} />;
          })}
        </div>
        <BlogAbout />
      </div>
    </>
  );
}

export default Main;
