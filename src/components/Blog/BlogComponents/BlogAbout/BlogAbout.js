import facebook from "../../../../images/icons/facebook.png";
import instagram from "../../../../images/icons/instagram.png";

function BlogAbout() {
  return (
    <section className="blog-about">
      <div className="blog-about__container">
        <p className="blog-about__text">
          En <em>Tribuna Total</em>, vivimos y disfrutamos el deporte. Como un
          blog hecho por latinos, compartimos la pasión, la cultura y la energía
          de nuestra gente en cada historia. Nuestra misión es darte una
          cobertura completa, análisis experto y las últimas noticias de los
          deportes que te gustan, mientras celebramos el espíritu de competencia
          que nos une a todos.
        </p>
      </div>
      <div className="blog-about__container">
        <div className="blog-about__logo-container">
          <img className="blog-about__logo" src={facebook} />
          <p className="blog-about__logo-text facebook">
            <a
              className="blog-about__logo-text facebook"
              href="https://www.facebook.com/profile.php?id=61559787204610"
              target="_blank"
            >
              Facebook
            </a>
          </p>
        </div>
        <div className="blog-about__logo-container">
          <img className="blog-about__logo" src={instagram} />
          <p className="blog-about__logo-text instagram">
            <a
              className="blog-about__logo-text instagram"
              href="https://www.instagram.com/tribuna_total/"
              target="_blank"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlogAbout;
