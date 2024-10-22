import { Helmet } from "react-helmet-async";

import BlogAbout from "../../../../../Blog/BlogComponents/BlogAbout/BlogAbout";
import LatestNews from "../../../../../Main/LatestNews/LatestNews";
import GameReview from "../../../../../Main/GameReview/GameReview";

import { fcDallasBlogs } from "../../../../../../utils/blog/blogs/Soccer/Mens/Mls/FcDallas/fcDallasBlogs";

function FcDallas() {
  console.log(fcDallasBlogs);

  return (
    <>
      <Helmet>
        <title>FC Dallas | Tribuna Total</title>
        <meta
          name="description"
          content="Explore the Avanti Enterprises blog for expert tips on kitchen and bathroom cabinet remodeling in Dallas-Fort Worth. Get design ideas, trends, and home improvement advice."
        />
        <link rel="canonical" href="/soccer/mens/mls/fc-dallas" />
      </Helmet>

      <LatestNews blogs={fcDallasBlogs} />
      <div className="fc-dallas__blogs-container">
        <div className="fc-dallas__blogs">
          {fcDallasBlogs.map((blog) => {
            return <GameReview key={blog.id} blog={blog} />;
          })}
        </div>
        <BlogAbout />
      </div>
    </>
  );
}

export default FcDallas;
