import { Helmet } from "react-helmet-async";

import BlogImage from "../../../../../../BlogComponents/BlogImage/BlogImage";
import BlogParagraph from "../../../../../../BlogComponents/BlogParagraph/BlogParagraph";
import Blogs from "../../../../../Blogs";

import philliCelebration from "./philliCelebration.jpeg";
import philliHustle from "./philliHustle.jpeg";
import philliPostGame from "./philliPostGame.jpeg";
import philliFans from "./philliFans.jpeg";

function NocheDeCampeonatoEnElEstadioToyotaNorthTexasScEEnSuPaseALaFinal() {
  return (
    <>
      <Helmet>
        <title>
          Noche de Campeonato en el Estadio Toyota North Texas SC en su pase a
          la final | Avanti Enterprises
        </title>
        <meta
          name="description"
          content="FC Dallas vence 2-0 a Houston Dynamo en el clásico tejano con goles de Petar Musa y Sebastien Ibeagha ante 20,000 fans en Frisco."
        />
        <link
          rel="canonical"
          href="/soccer/mens/mlsnextpro/northtexassc/noche-de-campeonato-en-el-estadio-toyota-north-texas-sc-en-su-pase-a-la-final"
        />
      </Helmet>

      <Blogs
        blogAuthor={"Felipe de Jesus Alcala"}
        blogDate={"Nov 9, 2024"}
        blogPhotographer={"Rene Gonzalez"}
        blogTitle={
          "Noche de Campeonato en el Estadio Toyota North Texas SC en su pase a la final."
        }
      >
        <BlogImage
          blogImage={philliFans}
          blogImageAlt={
            "North Texas SC fans passionately sharing their love for their team."
          }
        />
        <BlogParagraph
          blogParagraph={
            "Frisco Texas. Sábado 9 de noviembre del 2024, por Felipe Alcala. Se llevo acabo el juego final de la MLS NEXT PRO, entre el equipo North Texas SC, y el equipo Philadelphia Union II."
          }
        />
        <BlogParagraph
          blogParagraph={
            "La noche se volvió triste muy temprano para el equipo de casa North Texas SC que jugaban en el Estadio Toyota, apenas minuto 9 por parte de Philadelphia Union II, se fueron en ventaja 0-1, un disparo dentro del area rival y con una media vuelta de ‘Markus Anderson’ el anotador, Y para que fuera mas difícil el encuentro, el segunda anotación sin preámbulos y Philadelphia Union II anota un 0-2 a favor, ‘Edward Davis’, burlando desde afuera del area y con balón controlado a su pie entró al area metiendo un riflazo y su anotación, y haciendo ver que este juego iba ser fatal para los de casa."
          }
        />
        <BlogImage
          blogImage={philliCelebration}
          blogImageAlt={"Opposing team's player celebrating an early goal."}
        />
        <BlogParagraph
          blogParagraph={
            "Empezó el segundo tiempo, ‘Logan Farrigton’ anota volviendo la esperanza de que no todo estaba terminado, con un tiro libre, pegado al poste izquierdo, abajo donde el portero por su gran estatura no iba a llegar, ponía a North Texas SC 2-1."
          }
        />
        <BlogImage
          blogImage={philliHustle}
          blogImageAlt={
            "Player from North Texas Sc hustling and putting pressure on an opposing player."
          }
        />
        <BlogParagraph
          blogParagraph={
            "Una descolgada por la banda derecha de ‘Herbert Endeley’ y mandando un centro cruzado pasando la linea defensiva, el ‘Enes Sali’ aun estando en el aire con su pie derecho como patada karateka, empata 2-2 donde la adición se levanto para celebrar esta remontada al minuto 66’ y ilusionaba remontada total de ir por un tercer gol. Y se tercer gol, no espero llego al minuto 90’+1 en tiempo de recompensa, el encargado ‘Pedrinho’ de un taco elegante pisando el area chica del portero y haciendo que la pelota llegara a la red, North Texas SC anotaba su gol que lo llevaría a lograr conquistar el Campeonato."
          }
        />
        <BlogImage
          blogImage={philliPostGame}
          blogImageAlt={"Player from North Texas Sc celebrating a huge win."}
        />
        <BlogParagraph
          blogParagraph={
            "Segundo campeonato de North Texas SC, ahora con el entrenador Michel Garbini que se convertía en el quinto entrenador de la historia, y llevándose en la vitrina de colecciones el segundo campeonato 2024 del MLS NEXT Pro."
          }
        />
      </Blogs>
    </>
  );
}

export default NocheDeCampeonatoEnElEstadioToyotaNorthTexasScEEnSuPaseALaFinal;
