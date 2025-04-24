import { Helmet } from "react-helmet-async";

import BlogImage from "../../../../../../BlogComponents/BlogImage/BlogImage";
import BlogParagraph from "../../../../../../BlogComponents/BlogParagraph/BlogParagraph";
import Blogs from "../../../../../Blogs";

import aboutToKick from "./aboutToKick.PNG";
import dribbling from "./dribbling.PNG";
import running from "./running.PNG";

function SumaUnPuntoEnCasa() {
  return (
    <>
      <Helmet>
        <title>Suma Un Punto En Casa</title>
        <meta
          name="description"
          content="Dallas Trinity FC termina en una suma"
        />
        <link
          rel="canonical"
          href="/soccer/womens/USL/DallasTrinity/suma-un-punto-en-casa"
        />
      </Helmet>

      <Blogs
        blogAuthor={"Felipe de Jesus Alcala"}
        blogDate={"Apr 19, 2025"}
        blogPhotographer={"Dallas Trinity FC"}
        blogTitle={"Suma Un Punto En Casa"}
      >
        <BlogImage
          blogImage={dribbling}
          blogImageAlt={"Trinity player dribbling."}
        />
        <BlogParagraph
          blogParagraph={
            "El Cotton Bowl Sábado, El 19 de abril de 2025, Dallas Trinity FC consiguió en empate, 1–1 en casa contra Fort Lauderdale United FC, y con 37 puntos y permanece segundo en la USL en la tabla general."
          }
        />
        <BlogParagraph
          blogParagraph={
            "El primer gol al minuto 3′: Allie Thornton adelantó a Dallas con su gol que parecía que todo iba ser una victoria."
          }
        />
        <BlogImage
          blogImage={aboutToKick}
          blogImageAlt={"Trinity player about to shoot the ball."}
        />
        <BlogParagraph
          blogParagraph={
            "Al minuto 35′: Fort Lauderdale igualó antes del descanso. En la segunda mitad, la defensa de Dallas resistió para asegurar un punto, pese a dominar en disparos (18–14) y tiros a puerta (4)."
          }
        />
        <BlogImage
          blogImage={running}
          blogImageAlt={"Trinity player running."}
        />
        <BlogParagraph
          blogParagraph={
            "Próximo partido, El sábado 26 de abril, Dallas Trinity FC recibirá a Lexington SC en el Estadio Cotton Bowl."
          }
        />
      </Blogs>
    </>
  );
}

export default SumaUnPuntoEnCasa;
