import { Helmet } from "react-helmet-async";

import BlogImage from "../../../../../../BlogComponents/BlogImage/BlogImage";
import BlogParagraph from "../../../../../../BlogComponents/BlogParagraph/BlogParagraph";
import Blogs from "../../../../../Blogs";

import aboutToKick from "./2header.PNG";
import dribbling from "./2dribbling.PNG";
import running from "./2prepping.PNG";

function DallasTrinityFcSeImponeEnCasaConUnaClaraVictoria() {
  return (
    <>
      <Helmet>
        <title>
          Dallas Trinity Fc se impone en casa con una clara victoria
        </title>
        <meta
          name="description"
          content="Dallas Trinity Fc se impone en casa con una clara victoria"
        />
        <link
          rel="canonical"
          href="/soccer/womens/USL/DallasTrinity/dallas-trinity-fc-se-impone-en-casa-con-una-clara-victoria"
        />
      </Helmet>

      <Blogs
        blogAuthor={"Felipe de Jesus Alcala"}
        blogDate={"Apr 26, 2025"}
        blogPhotographer={"Dallas Trinity FC"}
        blogTitle={"Dallas Trinity Fc se impone en casa con una clara victoria"}
      >
        <BlogImage
          blogImage={dribbling}
          blogImageAlt={"Trinity player dribbling."}
        />
        <BlogParagraph
          blogParagraph={
            "El Dallas Trinity FC (11-6-7, 40 puntos) dominó al Lexington SC (4-15-5, 17 puntos) en el Cotton Bowl el sábado por la noche, con una victoria por 3-1. Dallas se mantiene en el segundo puesto de la clasificación de la USL Super League."
          }
        />
        <BlogParagraph
          blogParagraph={"El partido tuvo una asistencia de 4753 espectadores."}
        />
        <BlogImage
          blogImage={aboutToKick}
          blogImageAlt={"Trinity player about to shoot the ball."}
        />
        <BlogParagraph
          blogParagraph={
            "Dallas se adelantó rápidamente gracias a un gol de la delantera Tamara Bolt (con la asistencia de la mediocampista Deborah Abiodun) en el minuto 5. La defensa de Dallas se mantuvo firme hasta el 69, cuando el Lexington empató. El DTFC respondió rápidamente un minuto después con un gol de la delantera Sealey Strawn en el 70."
          }
        />
        <BlogImage
          blogImage={running}
          blogImageAlt={"Trinity player running."}
        />
        <BlogParagraph
          blogParagraph={
            "Dallas selló la victoria con otro gol de la delantera Allie Thornton, anotando su undécimo de la temporada en el tiempo añadido para asegurar la victoria sobre el Lexington y los tres puntos en casa."
          }
        />
        <BlogParagraph
          blogParagraph={
            "El proximo juego sería Sábado 3 Mayo de visita contra Tampa Buy Sun FC."
          }
        />
      </Blogs>
    </>
  );
}

export default DallasTrinityFcSeImponeEnCasaConUnaClaraVictoria;
