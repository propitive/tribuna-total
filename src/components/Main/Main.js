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
          content="Nuestra misión es darte una cobertura completa, análisis experto y las últimas noticias de los deportes que te gustan, mientras celebramos el espíritu de competencia que nos une a todos."
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
