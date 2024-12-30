import { Helmet } from "react-helmet-async";

import BlogImage from "../../../../../../BlogComponents/BlogImage/BlogImage";
import BlogParagraph from "../../../../../../BlogComponents/BlogParagraph/BlogParagraph";
import Blogs from "../../../../../Blogs";

import businessMen from "./businessMen.jpg";
import speaker from "./speaker.jpg";
import speakerTwo from "./speaker2.jpg";

function MansfieldLaNuevaCasaDeNorthTexasSc() {
  return (
    <>
      <Helmet>
        <title>Mansfield La Nueva Casa de North Texas SC</title>
        <meta
          name="description"
          content="Mansfield La Nueva Casa de North Texas SC"
        />
        <link
          rel="canonical"
          href="/soccer/mens/mlsnextpro/northtexassc/mansfield-la-nueva-casa-de-north-texas-sc"
        />
      </Helmet>

      <Blogs
        blogAuthor={"Felipe de Jesus Alcala"}
        blogDate={"Dec 30, 2024"}
        blogPhotographer={"Texas Rangers"}
        blogTitle={"Mansfield La Nueva Casa de North Texas SC"}
      >
        <BlogImage
          blogImage={businessMen}
          blogImageAlt={"Business men starting construction for new stadium."}
        />
        <BlogParagraph
          blogParagraph={
            "North Texas SC, tendrá nuevo hogar en la ciudad de Mansfield, se espera que este año 2025 se termine el estadio que tendrá como nombre  “Mansfield Stadium”"
          }
        />
        <BlogParagraph
          blogParagraph={
            "MLS NEXT Pro crece ahora con sus propios Estadios de Fútbol (Soccer). Siendo que North Texas SC jugaba en el estadio “Choctaw Stadium” estadio de béisbol de los Rangers de Texas ahora tendrán su propio Estadio en la ciudad de Mansfield al sur de Dallas."
          }
        />
        <BlogImage
          blogImage={speaker}
          blogImageAlt={"Speaker talking about new project."}
        />
        <BlogParagraph
          blogParagraph={
            "El proyecto ya comenzó, se hizo la inauguración de la primera Piedra, que tendrá inicio este año que viene 2025 y se espera terminar el mismo año, dejando a Dallas con una oportunidad de que surjan jugadores formados en Dallas."
          }
        />
        <BlogParagraph
          blogParagraph={
            "Siendo North Texas SC, la base de inferiores o de base para participar jugadores de Academia debutar en el Segundo equipo profesional North Texas SC en su liga MLS NEXT Pro."
          }
        />
        <BlogImage
          blogImage={speakerTwo}
          blogImageAlt={"Speaker talking about new project."}
        />
        <BlogParagraph
          blogParagraph={
            "North Texas SC, sus jugadores estelares o de un buen rendimiento participarán como lo han hecho con FC Dallas. Un proyecto ambicioso por los fundadores y familia Hunts. Dando apoyo absoluto ahora al desarrollo del Fútbol, en los Estados Unidos de América."
          }
        />
      </Blogs>
    </>
  );
}

export default MansfieldLaNuevaCasaDeNorthTexasSc;
