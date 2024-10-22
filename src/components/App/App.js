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
          path="/soccer/mens/mls/fc-dallas/fc-dallas-manda-a-kansas-city-fuera-de-play-offs"
        >
          <FcDallasMandaAKansasCityFueraDePlayOffs />
        </Route>
        <Route exact path="/soccer/mens/mls/fc-dallas">
          <FcDallas />
        </Route>
        <Route
          exact
          path="/soccer/mens/mlsnextpro/northtexassc/north-texas-sc-avanza-a-semifinales"
        >
          <NorthTexasScAvanzaASemifinales />
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
