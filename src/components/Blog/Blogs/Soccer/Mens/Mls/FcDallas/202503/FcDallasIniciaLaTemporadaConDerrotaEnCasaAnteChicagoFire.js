import { Helmet } from "react-helmet-async";

import BlogImage from "../../../../../../BlogComponents/BlogImage/BlogImage";
import BlogParagraph from "../../../../../../BlogComponents/BlogParagraph/BlogParagraph";
import BlogParagraphWList from "../../../../../../BlogComponents/BlogParagraphWList/BlogParagraphWList";
import Blogs from "../../../../../Blogs";

import cfire1 from "./cFire1.jpeg";
import cfire2 from "./cFire2.jpeg";
import cfire3 from "./cFire3.jpeg";

function FcDallasIniciaLaTemporadaConDerrotaEnCasaAnteChicagoFire() {
  return (
    <>
      <Helmet>
        <title>
          Fc Dallas inicia la temporada con derrota en casa ante Chicago Fire
        </title>
        <meta
          name="description"
          content="Fc Dallas inicia la temporada con derrota en casa ante Chicago Fire."
        />
        <link
          rel="canonical"
          href="/soccer/mens/mls/fc-dallas/fc-dallas-inicia-la-temporada-con-derrota-en-casa-ante-chicago-fire"
        />
      </Helmet>

      <Blogs
        blogAuthor={"Felipe de Jesus Alcala"}
        blogDate={"Mar 12, 2025"}
        blogPhotographer={"FC Dallas"}
        blogTitle={
          "Fc Dallas inicia la temporada con derrota en casa ante Chicago Fire"
        }
      >
        <BlogParagraph
          blogParagraph={
            "El primer partido de la temporada de la Major League Soccer (MLS) se jugó este pasado sábado 8 de marzo a las 7:30 p.m. en el Toyota Stadium. Con la presencia de una cantidad limitada de aficionados (11,400), que representaron solo un 60% de la capacidad del estadio, debido tanto a las renovaciones en curso por las obras que el estadio esta realizando para agrandar sus tribunas y mas fanáticos puedan disfrutar de cada juego  como las bajas temperaturas y las lluvias que afectaron a la ciudad de Dallas, el ambiente estaba cargado de pasión y emoción."
          }
        />
        <BlogImage
          blogImage={cfire3}
          blogImageAlt={"P. Musa taking a shot at goal."}
        />
        <BlogParagraph
          blogParagraph={
            "A pesar de los obstáculos, los fanáticos estaban listos para apoyar al equipo en este nuevo capítulo de la temporada. FC Dallas, con un plantel renovado y con grandes expectativas, tenía la mirada puesta en una nueva victoria. Con el argentino Luciano Acosta como gran estrella, luciendo su camiseta numero 10, transferido por 15 millones de dólares desde FC Cincinnati a FC Dallas saltó al campo con altas expectativas."
          }
        />
        <BlogImage
          blogImage={cfire1}
          blogImageAlt={"Player celebrating after scoring."}
        />
        <BlogParagraph
          blogParagraph={
            "El partido arrancó con intensidad y los jugadores mostraron un gran compromiso para ofrecer espectáculo a los presentes. Sin embargo, el encuentro terminó con una amarga derrota para FC Dallas por 3-1."
          }
        />
        <BlogImage
          blogImage={cfire2}
          blogImageAlt={"P. Musa taking a shot at goal."}
        />
        <BlogParagraph
          blogParagraph={`El debut de Luciano Acosta, no pudo evitar la derrota para FC Dallas. A pesar de que Logan Farrington adelantó a los locales en el minuto 57, Chicago logró responder con goles cruciales de Andrew Gutman (82'), Leonardo Barroso (84') y Hugo Cuypers (90').`}
        />
        <BlogParagraphWList
          blogParagraph={
            <>
              Los goles. <br />
              <br />
              - El primer gol llegó en el minuto 57 gracias a un disparo preciso
              de Logan Farrington (23) (FC Dallas), quien marcó con la derecha
              después de una asistencia de Anderson Julio (9). <br />
              - Chicago Fire respondió rápidamente, en el minuto 82, Andrew
              Gutman (15) empató el marcador, asistido Hugo Cuypers (9) con un
              centro al área. <br />- Mientras que en el minuto 84, Leonardo
              Barroso (2) de Chicago Fire remato con la derecha desde el lado
              derecho del interior del área. <br />
              - Finalmente, en el minuto 90, Hugo Cuypers (9) selló la victoria
              para Chicago Fire al convertir un penalti ejecutado con la
              derecha, colocando el 3-1 definitivo. <br />
            </>
          }
        />
        <BlogParagraph
          blogParagraph={`Con este resultado, FC Dallas inicia la temporada con una amarga derrota pero esto recien empieza y FC Dallas buscará redimirse en casa cuando enfrente a Vancouver el próximo 15 de marzo a las 7.30 pm.`}
        />
        <BlogParagraph
          blogParagraph={`¡Una nueva temporada llena de desafíos ha comenzado, Veni y apoya al equipo en su camino hacia la victoria!`}
        />
      </Blogs>
    </>
  );
}

export default FcDallasIniciaLaTemporadaConDerrotaEnCasaAnteChicagoFire;
