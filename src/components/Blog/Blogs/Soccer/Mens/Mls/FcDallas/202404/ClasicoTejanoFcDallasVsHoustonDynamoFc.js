import { Helmet } from "react-helmet-async";

import BlogImage from "../../../../../../BlogComponents/BlogImage/BlogImage";
import BlogParagraph from "../../../../../../BlogComponents/BlogParagraph/BlogParagraph";
import Blogs from "../../../../../Blogs";

import flag from "./flag.jpg";
import celebration from "./celebration.jpg";

function ClasicoTejanoFcDallasVsHoustonDynamoFc() {
  return (
    <>
      <Helmet>
        <title>Clasico Tejano Fc Dallas vs Houston Dyanmo Fc</title>
        <meta
          name="description"
          content="FC Dallas vence 2-0 a Houston Dynamo en el clásico tejano con goles de Petar Musa y Sebastien Ibeagha ante 20,000 fans en Frisco."
        />
        <link
          rel="canonical"
          href="/soccer/mens/mls/fc-dallas/clasico-tejano-fc-dallas-vs-houston-dynamo-fc/"
        />
      </Helmet>

      <Blogs
        blogAuthor={"Felipe de Jesus Alcala"}
        blogDate={"April 28, 2024"}
        blogPhotographer={'Jose "Chema" Maldonado'}
        blogTitle={"Clasico Tejano Fc Dallas vs Houston Dyanmo Fc"}
      >
        <BlogParagraph
          blogParagraph={
            "En la ciudad de Frisco, Texas. Sabado 27, se llevó el encuentro entre dos equipos que se conocen bastante, y considerado ya un clásico Tejano, Houston Dynamo a pesar de estar  encima de FC Dallas en los primeros minutos, con un ritmo de juego veloz y de muchos toques. Todo parecí­a que no contaba en tener un mal día a ya que pierde a su defensa Griffin Dorsey al minuto 5 transcurriendo los mejores minutos del juego. Al inicio, Houston Dynamo sabía a que vení­a a disputar el juego, ganar y dominar. "
          }
        />
        <BlogImage
          blogImage={celebration}
          blogImageAlt={"Player celebrating after scoring."}
        />
        <BlogParagraph
          blogParagraph={
            "Pero como un regalo, la primera jugada de peligro de FC Dallas, en un pase filtrado para Marco Farfan que con toda su velocidad, recibe una patada de desesperación del defensa Griffin Dorsey. FC Dallas sin embargo, se mantuvieron ordenados, disciplinados y en ello su recompensa de seguir a su parado de juego. Sabemos que FC Dallas no cuenta con su cuadro completo, ya que se hizo un hospital de los lesionados. "
          }
        />
        <BlogParagraph
          blogParagraph={
            "El gol se hizo presente al minuto Petar Musa al 55’ de una jugada de primer toque para cruzar al lado cruzado del portero que no por pudo hacer mucho. Ya para dar fin al encuentro con un cabezazo de Sebastien Ibeagha en el minuto 80’ haciendo sentir al público que el juego ya estaba resuelto. Que por cierto; ovacionado por su público que abarrotó un lleno. "
          }
        />
        <BlogImage
          blogImage={flag}
          blogImageAlt={
            "Close-up picture of Texas' flag with players in the backdrop."
          }
        />
        <BlogParagraph
          blogParagraph={
            "20,000 aficionados celebraron esta victoria como el comienzo de mas victorias que estarían en camino, FC Dallas enfrentara con optimismo, en su siguiente fecha FC Dallas ira de visita en su excursion con Toronto F.C. que viene de ganar muy apretado, un juego de visita en Florida, contra Orlando City que saco una voltereta de 1-2 a favor de Toronto F.C "
          }
        />
      </Blogs>
    </>
  );
}

export default ClasicoTejanoFcDallasVsHoustonDynamoFc;
