import { Helmet } from "react-helmet-async";

import BlogImage from "../../../../../../BlogComponents/BlogImage/BlogImage";
import BlogParagraph from "../../../../../../BlogComponents/BlogParagraph/BlogParagraph";
import Blogs from "../../../../../Blogs";

import shot from "./shotKCPortrait.png";
import celebration from "./celebrationKCPortrait.png";

function FcDallasMandaAKansasCityFueraDePlayOffs() {
  return (
    <>
      <Helmet>
        <title>Fc Dallas manda a Kansas City fuera de play offs</title>
        <meta
          name="description"
          content="FC Dallas vence 2-1 a Sporting KC en el cierre de la MLS en Toyota Stadium. Goles de Petar Musa y un autogol de Fernández sellaron la victoria ante 19,096 fans."
        />
        <link
          rel="canonical"
          href="/soccer/mens/mls/fc-dallas/fc-dallas-manda-a-kansas-city-fuera-de-play-offs"
        />
      </Helmet>

      <Blogs
        blogAuthor={"Felipe de Jesus Alcala"}
        blogDate={"Oct 19, 2024"}
        blogPhotographer={"FC Dallas"}
        blogTitle={"Fc Dallas manda a Kansas City fuera de play offs"}
      >
        <BlogParagraph
          blogParagraph={
            "Sábado Octubre 19, en el estadio de Toyota, el encuentro entre FC Dallas, en el ultimo encuentro de la jornada MLS, se enfrentaba al equipo de Kansas City."
          }
        />
        <BlogParagraph
          blogParagraph={
            "El Estadio Toyota albergo 19,096 aficionados, y no fueron decepcionados ante el resultado de 2-1 a favor de los de casa, al minuto 16’ FC Dallas se hizo del primer gol, Petar Musa dentro del área con una recepción de media vuelta, anota de forma contundente para adelantar a los Tejanos."
          }
        />
        <BlogImage
          blogImage={celebration}
          blogImageAlt={"Player celebrating after scoring."}
        />
        <BlogParagraph
          blogParagraph={
            "El segundo Gol, en una jugada desafortunada, encontró de Sporting KC Joaquin Fernández anota en su propia portería de cabeza, dejando con una desventaja notoria de 2-0. Pero eso no iba ser lo único en el encuentro, FC Dallas no se iba ir con las manos vacías, ya para terminalizar el encuentro, Willan Agada anota el gol que no dejaba a cero en su equipo."
          }
        />
        <BlogImage
          blogImage={shot}
          blogImageAlt={"P. Musa taking a shot at goal."}
        />
        <BlogParagraph
          blogParagraph={`Siendo ya para ambas escuadras, su ultimo juego, ambos se quedaron fuera de los 
“Play Off” de la liga MLS.`}
        />
      </Blogs>
    </>
  );
}

export default FcDallasMandaAKansasCityFueraDePlayOffs;
