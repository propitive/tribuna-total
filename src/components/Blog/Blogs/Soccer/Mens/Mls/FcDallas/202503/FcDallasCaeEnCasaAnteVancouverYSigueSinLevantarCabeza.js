import { Helmet } from "react-helmet-async";

import BlogImage from "../../../../../../BlogComponents/BlogImage/BlogImage";
import BlogParagraph from "../../../../../../BlogComponents/BlogParagraph/BlogParagraph";
import BlogParagraphWList from "../../../../../../BlogComponents/BlogParagraphWList/BlogParagraphWList";
import Blogs from "../../../../../Blogs";

import vancouver1 from "./vancouver1.jpg";
import vancouver2 from "./vancouver2.jpg";
import vancouver3 from "./vancouver3.jpg";

function FcDallasCaeEnCasaAnteVancouverYSigueSinLevantarCabeza() {
  return (
    <>
      <Helmet>
        <title>
          Fc Dallas cae en casa ante Vancouver y sigue sin levantar cabeza
        </title>
        <meta
          name="description"
          content="Fc Dallas cae en casa ante Vancouver y sigue sin levantar cabeza."
        />
        <link
          rel="canonical"
          href="/soccer/mens/mls/fc-dallas/fc-dallas-cae-en-casa-ante-vancouver-y-sigue-sin-levantar-cabeza"
        />
      </Helmet>

      <Blogs
        blogAuthor={"Felipe de Jesus Alcala"}
        blogDate={"Mar 15, 2025"}
        blogPhotographer={"FC Dallas"}
        blogTitle={
          "Fc Dallas cae en casa ante Vancouver y sigue sin levantar cabeza"
        }
      >
        <BlogImage
          blogImage={vancouver1}
          blogImageAlt={"P. Musa taking a shot at goal."}
        />
        <BlogParagraph
          blogParagraph={
            "FC Dallas sufrió una nueva derrota en casa al caer 0-1 frente a Vancouver con un gol de Tristan Blackmon (Vancouver Whitecaps FC) en la jornada 4 de la temporada, en un partido disputado en el Estadio Toyota ante 11,004 aficionados."
          }
        />
        <BlogImage
          blogImage={vancouver2}
          blogImageAlt={"P. Musa taking a shot at goal."}
        />
        <BlogParagraph
          blogParagraph={
            "Desde el inicio, Vancouver mostró mayor control del juego, reflejado en un 60% de posesión del juego que dejó a FC Dallas con pocas oportunidades claras de ataque. A pesar de algunos intentos aislados el equipo local no logró romper la defensa rival ni capitalizar las jugadas."
          }
        />
        <BlogImage
          blogImage={vancouver3}
          blogImageAlt={"Player celebrating after scoring."}
        />
        <BlogParagraph
          blogParagraph={
            "Con esta derrota, FC Dallas suma otra caída en casa, dejando dudas sobre el funcionamiento del equipo en las primeras fechas de la temporada. El cuerpo técnico y los jugadores tendrán que ajustar rápidamente el rumbo si quieren evitar que la mala racha continúe afectando su posición en la tabla."
          }
        />
      </Blogs>
    </>
  );
}

export default FcDallasCaeEnCasaAnteVancouverYSigueSinLevantarCabeza;
