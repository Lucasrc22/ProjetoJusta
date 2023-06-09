import {IonPage,IonContent,IonList,} from "@ionic/react";

import {
  sendOutline,
  phonePortraitOutline,
  receiptOutline,
  cashOutline,
  calendarOutline,
} from "ionicons/icons";

import ToolBar from "../components/ToolBar";
import Action from "../components/Action";
import SaldoVendas from "../components/SaldoVendas";


const TelaPrincipal: React.FC = () => {
  return (
    <IonPage>
      <ToolBar />
      <IonContent>
        <SaldoVendas />
        <IonList className="ion-list">
          <Action
          route={"/Relatorio"}
          icon={calendarOutline}
          name={"Relatório de Vendas"}
          />
          <Action
            route={"/TransfBanc"}
            icon={cashOutline}
            name={"Transferência Bancária"}
          />
          <Action
            route={"/AreaPix"}
            icon={sendOutline}
            name={"Área Pix"}
          />
          <Action
            route={"/OpcoesBoleto"}
            icon={receiptOutline}
            name={"Pagar e Receber com Boleto"}
          />
          <Action
            route={"/Recarga"}
            icon={phonePortraitOutline}
            name={"Recarga de Celular"}
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TelaPrincipal;
