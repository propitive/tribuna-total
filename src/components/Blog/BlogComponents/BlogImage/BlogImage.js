function BlogImage({
  blogImage,
  blogImageAlt,
  // blogImageParagraph,
  // blogImageTitle,
}) {
  return (
    <div className="blogs__image-container">
      <img className="blogs__image" src={blogImage} alt={blogImageAlt} />
      {/* <div className="blogs__image-text-container">
        <h3 className="blogs__image-title">{blogImageTitle}</h3>
        <p className="blogs__image-paragraph">{blogImageParagraph}</p>
      </div> */}
    </div>
  );
}

export default BlogImage;
