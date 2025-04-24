import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalEmailList from "../Modal/ModalEmailList/ModalEmailList";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import FcDallas from "../Pages/Soccer/Mens/Mls/FcDallas/FcDallas";

import ClasicoTejanoFcDallasVsHoustonDynamoFc from "../Blog/Blogs/Soccer/Mens/Mls/FcDallas/202404/ClasicoTejanoFcDallasVsHoustonDynamoFc";
import FcDallasMandaAKansasCityFueraDePlayOffs from "../Blog/Blogs/Soccer/Mens/Mls/FcDallas/202410/FcDallasMandaAKansasCityFueraDePlayOffs";
import NorthTexasScAvanzaASemifinales from "../Blog/Blogs/Soccer/Mens/MlsNextPro/NTxSC/202410/NorthTexasScAvananzaASemifinales";
import FcDallasAplastaALaFcConDominioTotalYRachaExtendida from "../Blog/Blogs/Soccer/Mens/Mls/FcDallas/202409/FcDallasAplastaALaFcConDominioTotalYRachaExtendida";
import NocheDeCampeonatoEnElEstadioToyotaNorthTexasScEEnSuPaseALaFinal from "../Blog/Blogs/Soccer/Mens/MlsNextPro/NTxSC/202411/NocheDeCampeonatoEnElEstadioToyotaNorthTexasScEEnSuPaseALaFinal ";
import DallasTrinityFcConsigueUnaVicotriaImportanteEnCasaYSePerfilanParaLaLiguilla from "../Blog/Blogs/Soccer/Womens/USL/DallasTrinity/202412/DallasTrinityFcConsigueUnaVicotriaImportanteEnCasaYSePerfilanParaLaLiguilla";
import MansfieldLaNuevaCasaDeNorthTexasSc from "../Blog/Blogs/Soccer/Mens/MlsNextPro/NTxSC/202412/MansfieldLaNuevaCasaDeNorthTexasSc";
import FcDallasIniciaLaTemporadaConDerrotaEnCasaAnteChicagoFire from "../Blog/Blogs/Soccer/Mens/Mls/FcDallas/202503/FcDallasIniciaLaTemporadaConDerrotaEnCasaAnteChicagoFire";
import FcDallasCaeEnCasaAnteVancouverYSigueSinLevantarCabeza from "../Blog/Blogs/Soccer/Mens/Mls/FcDallas/202503/FcDallasCaeEnCasaAnteVancouverYSigueSinLevantarCabeza";
import SumaUnPuntoEnCasa from "../Blog/Blogs/Soccer/Womens/USL/DallasTrinity/202504/SumaUnPuntoEnCasa";

function App() {
  const [modals, setModals] = useState({
    emailList: false,
  });

  const toggleModal = (modalType, isOpen) => {
    setModals((prevState) => ({ ...prevState, [modalType]: isOpen }));
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route
          exact
          path="/soccer/mens/mls/fc-dallas/clasico-tejano-fc-dallas-vs-houston-dynamo-fc"
        >
          <ClasicoTejanoFcDallasVsHoustonDynamoFc />
        </Route>
        <Route
          exact
          path="/soccer/mens/mls/fc-dallas/fc-dallas-aplasta-a-la-fc-con-dominio-total-y-racha-extendida"
        >
          <FcDallasAplastaALaFcConDominioTotalYRachaExtendida />
        </Route>
        <Route
          exact
          path="/soccer/mens/mls/fc-dallas/fc-dallas-cae-en-casa-ante-vancouver-y-sigue-sin-levantar-cabeza"
        >
          <FcDallasCaeEnCasaAnteVancouverYSigueSinLevantarCabeza />
        </Route>
        <Route
          exact
          path="/soccer/mens/mls/fc-dallas/fc-dallas-inicia-la-temporada-con-derrota-en-casa-ante-chicago-fire"
        >
          <FcDallasIniciaLaTemporadaConDerrotaEnCasaAnteChicagoFire />
        </Route>
        <Route
          exact
          path="/soccer/mens/mls/fc-dallas/fc-dallas-manda-a-kansas-city-fuera-de-play-offs"
        >
          <FcDallasMandaAKansasCityFueraDePlayOffs />
        </Route>
        <Route exact path="/soccer/mens/mls/fc-dallas">
          <FcDallas />
        </Route>
        <Route
          exact
          path="/soccer/mens/mlsnextpro/northtexassc/mansfield-la-nueva-casa-de-north-texas-sc"
        >
          <MansfieldLaNuevaCasaDeNorthTexasSc />
        </Route>
        <Route
          exact
          path="/soccer/mens/mlsnextpro/northtexassc/north-texas-sc-avanza-a-semifinales"
        >
          <NorthTexasScAvanzaASemifinales />
        </Route>
        <Route
          exact
          path="/soccer/mens/mlsnextpro/northtexassc/noche-de-campeonato-en-el-estadio-toyota-north-texas-sc-en-su-pase-a-la-final"
        >
          <NocheDeCampeonatoEnElEstadioToyotaNorthTexasScEEnSuPaseALaFinal />
        </Route>
        <Route
          exact
          path="/soccer/womens/USL/DallasTrinity/dallas-trinity-fc-consigue-una-vicotria-importante-en-casa-y-se-perfilan-para-la-liguilla"
        >
          <DallasTrinityFcConsigueUnaVicotriaImportanteEnCasaYSePerfilanParaLaLiguilla />
        </Route>
        <Route
          exact
          path="/soccer/womens/USL/DallasTrinity/suma-un-punto-en-casa"
        >
          <SumaUnPuntoEnCasa />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer handleEmailListModalOpen={() => toggleModal("emailList", true)} />

      {modals.emailList && (
        <ModalEmailList
          handleCloseModal={() => toggleModal("emailList", false)}
          isOpen={modals.emailList}
        />
      )}
    </>
  );
}

export default App;
