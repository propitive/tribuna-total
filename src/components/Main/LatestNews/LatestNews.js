import { Link } from "react-router-dom";

import newsIcon from "../../../images/icons/newspaper.png";

function LatestNews({ blogs }) {
  return (
    <section className="l-blogs">
      <div className="l-blogs__header-container">
        <img src={newsIcon} className="l-blogs__header-image" />
        <h2 className="l-blogs__header">LATEST NEWS</h2>
      </div>
      <div className="l-blogs__blog-container">
        <div className="l-blogs__primary-blog">
          <Link
            to={blogs[0].link}
            style={{
              textDecoration: "none",
            }}
          >
            <img className="l-blogs__primary-blog-image" src={blogs[0].image} />
            <div className="l-blogs__overlay"></div>
            <div className="l-blogs__primary-blog-info-container">
              <h3 className="l-blogs__primary-blog-keyword">
                {blogs[0].keyword}
              </h3>
              <h2 className="l-blogs__primary-blog-title">{blogs[0].title}</h2>
              <div className="l-blogs__primary-blog-author-container">
                <h3 className="l-blogs__primary-blog-author">
                  {blogs[0].author}
                </h3>
                <div className="l-blogs__primary-blog-divider"></div>
                <p className="l-blogs__primary-blog-time">
                  {blogs[0].timeOfPost}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="l-blogs__secondary-blog-container">
          <div className="l-blogs__secondary-blog-one">
            <Link
              to={blogs[1].link}
              style={{
                textDecoration: "none",
              }}
            >
              <img
                className="l-blogs__secondary-blog-image-one"
                src={blogs[1].image}
              />
              {console.log("Image URL being set: ", blogs[1].image)}
              <div className="l-blogs__overlay"></div>
              <div className="l-blogs__secondary-blog-info-container-one">
                <h3 className="l-blogs__secondary-blog-keyword-one">
                  {blogs[1].keyword}
                </h3>
                <h2 className="l-blogs__secondary-blog-title-one">
                  {blogs[1].title}
                </h2>
                <div className="l-blogs__secondary-blog-author-container-one">
                  <h3 className="l-blogs__secondary-blog-author-one">
                    {blogs[1].author}
                  </h3>
                  {console.log("Author being set: ", blogs[1].author)}

                  <div className="l-blogs__secondary-blog-divider-one"></div>
                  <p className="l-blogs__secondary-blog-time-one">
                    {blogs[1].timeOfPost}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="l-blogs__secondary-blog-two">
            <Link
              to={blogs[2].link}
              style={{
                textDecoration: "none",
              }}
            >
              <img
                className="l-blogs__secondary-blog-image-two"
                src={blogs[2].image}
              />
              <div className="l-blogs__overlay"></div>
              <div className="l-blogs__secondary-blog-info-container-two">
                <h3 className="l-blogs__secondary-blog-keyword-two">
                  {blogs[2].keyword}
                </h3>
                <h2 className="l-blogs__secondary-blog-title-two">
                  {blogs[2].title}
                </h2>
                <div className="l-blogs__secondary-blog-author-container-two">
                  <h3 className="l-blogs__secondary-blog-author-two">
                    {blogs[2].author}
                  </h3>
                  <div className="l-blogs__secondary-blog-divider-two"></div>
                  <p className="l-blogs__secondary-blog-time-two">
                    {blogs[2].timeOfPost}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
