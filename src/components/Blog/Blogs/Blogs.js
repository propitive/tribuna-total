import BlogAbout from "../BlogComponents/BlogAbout/BlogAbout";
import BlogCta from "../../Blog/BlogComponents/BlogCta/BlogCta";

function Blogs({
  blogAuthor,
  // blogCtaParagraph,
  // blogCtaTitle,
  blogDate,
  blogPhotographer,
  // blogSubheaderOne,
  // blogSubheaderTwo,
  // blogImage,
  // blogImageAlt,
  // blogsImageParagraph,
  // blogImageTitle,
  // blogParagraphOne,
  // blogParagraphTwo,
  blogTitle,
  children,
  // handleOpenModal,
}) {
  const author = (authorOfBlog) => {
    switch (authorOfBlog) {
      case "Jose Maldonado VI":
        return "Jose Maldonado VI";
      // (
      //   <a
      //     className="blogs__date-author blogs__author-name"
      //     href="https://www.linkedin.com/in/jose-m-maldonado/"
      //     target="_blank"
      //   >
      //     Jose Maldonado VI
      //   </a>
      // );
      case 'Jose "Chema" Maldonado':
        return 'Jose "Chema" Maldonado';
      case "Paul Osorio":
        return "Paul Osorio";
      default:
        return "Felipe de Jesus Alcala";
    }
  };

  const photographer = (photographerOfBlog) => {
    switch (photographerOfBlog) {
      case "Jose Maldonado VI":
        return (
          <a
            className="blogs__date-author blogs__author-name"
            href="https://www.linkedin.com/in/jose-m-maldonado/"
            target="_blank"
          >
            Jose Maldonado VI
          </a>
        );
      case 'Jose "Chema" Maldonado':
        return 'Jose "Chema" Maldonado';
      case "Paul Osorio":
        return "Paul Osorio";
      case "Felipe de Jesus Alcala":
        return "Felipe de Jesus Alcala";
      default:
        return photographerOfBlog;
    }
  };

  return (
    <div className="blogs">
      <div className="blogs__container">
        <h1 className="blogs__title">{blogTitle}</h1>
        <p className="blogs__date-author">
          Texto: {author(blogAuthor)} | Fotos: {photographer(blogPhotographer)}
        </p>
        {/* <p className="blogs__date-author">
          Fotos: {photographer(blogPhotographer)}
        </p> */}
        {/* <p className="blogs__date-author">{blogDate}</p> */}
        {children}
        {/* <div className="blogs__image-container">
          <img className="blogs__image" src={blogImage} alt={blogImageAlt} />
          <div className="blogs__image-text-container">
            <h3 className="blogs__image-title">{blogImageTitle}</h3>
            <p className="blogs__image-paragraph">{blogsImageParagraph}</p>
          </div>
        </div> */}
        {/* <h2 className="blogs__subheader">{blogSubheaderOne}</h2>
        <p className="blogs__paragraph">{blogParagraphOne}</p>
        <h2 className="blogs__subheader">{blogSubheaderTwo}</h2>
        <p className="blogs__paragraph">{blogParagraphTwo}</p> */}
        {/* <BlogCta
          blogCtaParagraph={blogCtaParagraph}
          blogCtaTitle={blogCtaTitle}
          handleOpenModal={handleOpenModal}
        /> */}
      </div>
      <BlogAbout />
    </div>
  );
}

export default Blogs;
