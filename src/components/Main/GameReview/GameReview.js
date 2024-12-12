import { Link } from "react-router-dom";

function GameReview({ blog }) {
  // Function to determine class based on team name
  const getClassName = (teamName) => {
    switch (teamName) {
      case "Fc Dallas":
        return "fcdallas";
      case "North Texas SC":
        return "northTexasSc";
      case "Dallas Trinity FC":
        return "dallasTrinityFc";
      case "USNMT":
        return "usnmt";
      case "Austin FC":
        return "austinfc";
      default:
        return null; // Fallback class
    }
  };

  return (
    <section className="g-review">
      {/* <div
        className={
          blog.teamName === "Fc Dallas"
            ? "g-review__header-container fcdallas"
            : "g-review__header-container"
        }
      > */}
      <div
        className={"g-review__header-container " + getClassName(blog.teamName)}
      >
        <img src={blog.teamLogo} className="g-review__header-image" />
        <div className="g-review__team-name-container">
          <h3 className="g-review__team-name">{blog.teamName}</h3>
          <p className="g-review__team-record">{blog.headerSubtitle}</p>
        </div>
      </div>
      <div className="g-review__blog-container">
        <div className="g-review__primary-blog">
          <Link
            to={blog.link}
            style={{
              textDecoration: "none",
            }}
          >
            <img className="g-review__primary-blog-image" src={blog.image} />
            <div className="g-review__overlay"></div>
            <div className="g-review__primary-blog-info-container">
              <h3 className="g-review__primary-blog-keyword">{blog.keyword}</h3>
              <h2 className="g-review__primary-blog-title">{blog.title}</h2>
              <div className="g-review__primary-blog-author-container">
                <h3 className="g-review__primary-blog-author">{blog.author}</h3>
                <div className="g-review__primary-blog-divider"></div>
                <p className="g-review__primary-blog-time">{blog.timeOfPost}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GameReview;
