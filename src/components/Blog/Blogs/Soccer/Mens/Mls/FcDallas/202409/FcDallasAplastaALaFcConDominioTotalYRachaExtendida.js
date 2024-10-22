import { Helmet } from "react-helmet-async";

import BlogImage from "../../../../../../BlogComponents/BlogImage/BlogImage";
import BlogParagraph from "../../../../../../BlogComponents/BlogParagraph/BlogParagraph";
import Blogs from "../../../../../Blogs";

import crowd from "./crowd.jpg";
import ferreira from "./ferreira.jpg";

function FcDallasAplastaALaFcConDominioTotalYRachaExtendida() {
  return (
    <>
      <Helmet>
        <title>
          FC Dallas Aplasta a LAFC con Dominio Total y Racha Extendida | Avanti
          Enterprises
        </title>
        <meta
          name="description"
          content="FC Dallas vence 2-1 a Sporting KC en el cierre de la MLS en Toyota Stadium. Goles de Petar Musa y un autogol de Fernández sellaron la victoria ante 19,096 fans."
        />
        <link
          rel="canonical"
          href="/soccer/mens/mls/fc-dallas/fc-dallas-aplasta-a-la-fc-con-dominio-total-y-racha-extendida"
        />
      </Helmet>

      <Blogs
        blogAuthor={"Jose Maldonado VI"}
        blogDate={"Sep 21, 2024"}
        blogPhotographer={"Dallas Morning News"}
        blogTitle={
          "FC Dallas Aplasta a LAFC con Dominio Total y Racha Extendida"
        }
      >
        <BlogParagraph
          blogParagraph={
            "Petar Musa anotó su décimo quinto gol en la liga, liderando a su equipo y abriendo el marcador para Dallas en el minuto 28."
          }
        />
        <BlogParagraph
          blogParagraph={
            "Patrickson Delgado sumó su cuarto gol en liga al minuto 60. Paul Arriola controló un balón y se lo pasó a Logan Farrington en la parte superior del área, quien lo dejó servido para Delgado, que disparó con precisión para poner el 2-0. Farrington ahora encabeza al equipo en asistencias con ocho."
          }
        />
        <BlogParagraph
          blogParagraph={
            "Solo dos minutos después, Farrington aumentó la ventaja al 3-0 tras recibir un pase de Ferreira y mandar el balón al fondo de la red. Este fue su cuarto gol en la MLS y sexto en todas las competiciones."
          }
        />
        <BlogImage
          blogImage={ferreira}
          blogImageAlt={"Ferreira pursing the ball; pressuring the defender."}
        />
        <BlogParagraph
          blogParagraph={
            "LAFC logró descontar en el minuto 86 cuando un disparo de Eduard Atuesta fue desviado por Delgado, superando al portero Maarten Paes."
          }
        />
        <BlogImage
          blogImage={crowd}
          blogImageAlt={
            "A lively crowd enjoying their team's dominating performance."
          }
        />
        <BlogParagraph
          blogParagraph={
            "Con este resultado, LAFC amplía su racha sin victorias a cinco partidos, habiendo ganado solo uno de sus últimos seis encuentros en territorio de Dallas."
          }
        />
      </Blogs>
    </>
  );
}

export default FcDallasAplastaALaFcConDominioTotalYRachaExtendida;
