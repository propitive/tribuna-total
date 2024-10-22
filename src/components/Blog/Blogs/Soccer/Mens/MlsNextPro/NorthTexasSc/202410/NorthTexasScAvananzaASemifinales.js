import { Helmet } from "react-helmet-async";

import BlogImage from "../../../../../../BlogComponents/BlogImage/BlogImage";
import BlogParagraph from "../../../../../../BlogComponents/BlogParagraph/BlogParagraph";
import Blogs from "../../../../../Blogs";

import shot from "../../../Mls/FcDallas/202410/shotKCPortrait.png";
import BlogParagraphWList from "../../../../../../BlogComponents/BlogParagraphWList/BlogParagraphWList";

function NorthTexasScAvanzaASemifinales() {
  return (
    <>
      <Helmet>
        <title>North Texas SC Avanza A Semifinales | Avanti Enterprises</title>
        <meta
          name="description"
          content="FC Dallas vence 2-1 a Sporting KC en el cierre de la MLS en Toyota Stadium. Goles de Petar Musa y un autogol de Fernández sellaron la victoria ante 19,096 fans."
        />
        <link
          rel="canonical"
          href="/soccer/mens/mlsnextpro/northtexassc/north-texas-sc-avanza-a-semifinales"
        />
      </Helmet>

      <Blogs
        blogAuthor={"Felipe de Jesus Alcala"}
        blogDate={"Oct 19, 2024"}
        blogPhotographer={"North Texas SC"}
        blogTitle={"North Texas SC Avanza A Semifinales"}
      >
        <BlogParagraph
          blogParagraph={
            "North Texas SC listo para avanzar a semifinales y dio su pase al vencer a Vancouver Whitecaps 2."
          }
        />
        <BlogParagraph
          blogParagraph={
            "Domingo 20 de Octubre, en la cuidad de Arlington, se llevo el encuentro de cuartos de final, en la liga MLS NEXT Pro."
          }
        />
        <BlogParagraph
          blogParagraph={
            "Con un 3-2 de North Texas SC en contra de Vancouver Whitecaps 2, En Centro de emocion, ya que de ir con ventaja de 2-0 de North Texas SC, en el primer tiempo, en el segundo tiempo de se emparejo el encuentro, con un 2-2."
          }
        />
        <BlogParagraphWList
          blogParagraph={
            <>
              Los goles, del encuentro. <br />
              <br />
              North Texas SC <br />
              8’ Herbet Endeley <br />
              29’ Diego García <br />
              85’ Tomas Pondeca <br />
            </>
          }
        />
        <BlogParagraphWList
          blogParagraph={
            <>
              Vancouver Whitecaps <br />
              65’ Eliot Goldthorp <br />
              74’ Eliot Goldthorp <br />
            </>
          }
        />

        <BlogImage
          blogImage={shot}
          blogImageAlt={"P. Musa taking a shot at goal."}
        />
      </Blogs>
    </>
  );
}

export default NorthTexasScAvanzaASemifinales;
