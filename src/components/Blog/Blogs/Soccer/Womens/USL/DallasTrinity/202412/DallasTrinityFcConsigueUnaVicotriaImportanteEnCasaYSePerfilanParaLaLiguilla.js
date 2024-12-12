import { Helmet } from "react-helmet-async";

import BlogImage from "../../../../../../BlogComponents/BlogImage/BlogImage";
import BlogParagraph from "../../../../../../BlogComponents/BlogParagraph/BlogParagraph";
import Blogs from "../../../../../Blogs";

import trinityDribbling from "./trinityDribbling.PNG";
import trinityKicking from "./trinityKicking.PNG";
import trinityTackle from "./trinityTackle.PNG";

function DallasTrinityFcConsigueUnaVicotriaImportanteEnCasaYSePerfilanParaLaLiguilla() {
  return (
    <>
      <Helmet>
        <title>
          Dallas Trinity FC consigue una victoria importante en casa y se
          perfilan para la Liguilla
        </title>
        <meta
          name="description"
          content="Dallas Trinity FC consigue una victoria importante en casa y se perfilan para la Liguilla"
        />
        <link
          rel="canonical"
          href="/soccer/womens/USL/DallasTrinity/dallas-trinity-fc-consigue-una-vicotria-importante-en-casa-y-se-perfilan-para-la-liguilla"
        />
      </Helmet>

      <Blogs
        blogAuthor={"Felipe de Jesus Alcala"}
        blogDate={"Dec 8, 2024"}
        blogPhotographer={"David Saldivar"}
        blogTitle={
          "Dallas Trinity FC consigue una victoria importante en casa y se perfilan para la Liguilla"
        }
      >
        <BlogImage
          blogImage={trinityDribbling}
          blogImageAlt={"Trinity player dribbling."}
        />
        <BlogParagraph
          blogParagraph={
            "Dallas Texas. Domingo 8 de Diciembre del 2024, en el estadio mundialista del Mundial 1994, ahora sede el equipo profesional de mujeres Dallas Trinity FC."
          }
        />
        <BlogParagraph
          blogParagraph={
            "La liga de mujeres del fútbol profesional de Estados Unidos, USL Super League, se juego el encuentro de la jornada 13 para las de casa Dallas Trinity FC, y juego 12 para el equipo de visita, el equipo Tampa Bay Sun FC."
          }
        />
        <BlogImage
          blogImage={trinityTackle}
          blogImageAlt={"Trinity player being tackled."}
        />
        <BlogParagraph
          blogParagraph={
            "Tampa Bay Sun FC venía muy motivado en jugar y ganar el encuentro después de ganar en casa a Carolina Ascent FC, con favor de 2-1, así que el encuentro iba jugarse intenso y importante para conseguir eso puntos para ambas escuadras, ya que si el equipo de casa Dallas Trinity FC no iba dejar esos 3 puntos escapar en casa fácilmente y en el primer tiempo y segundo con mayor posición, pudieron concretas el primer gol al minuto 67’ con un autogol infortunado de ‘Carlee Giamnona’ En un tiro libre de Amber Brooks, el balón llevaba tanta fuerza y con la poca visión de tanto jugadores en el área chica del portero, entre rebote y desvío el gol cayó adelantándo a Dallas Trinity 1-0."
          }
        />
        <BlogParagraph
          blogParagraph={
            "La segunda anotación, en una descolgada donde ‘Samanta Meza’ roba el balón desde el primer tercio del campo, y con un buen ,manejo de balón  y una distribución de dos toques consecutivos el primero para la jugadora Cyera Hintzen camisa 13 el segundo pase llego para la jugadora numero 20 Allie Thornton para definir con elegancia al poste lejano, poniendo el balón en las redes, y dando el gol ganador de 2-0, para su equipo Dallas Trinity FC."
          }
        />
        <BlogImage
          blogImage={trinityKicking}
          blogImageAlt={"Trinity player going for a shot."}
        />
        <BlogParagraph
          blogParagraph={
            "Con esta victoria, Dallas Trinity FC con Liguilla, su siguiente encuentro es en casa de nuevamente en el Estadio ahora hogar de Trinity el Cotton Bowl, este sábado 14 de Diciembre 2024, a las 2:30pm. Su rival será Brooklyn FC."
          }
        />
      </Blogs>
    </>
  );
}

export default DallasTrinityFcConsigueUnaVicotriaImportanteEnCasaYSePerfilanParaLaLiguilla;
