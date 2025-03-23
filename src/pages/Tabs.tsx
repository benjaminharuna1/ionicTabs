import React from "react";
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from "@ionic/react";
import { home, documentText } from "ionicons/icons";
import { Route, Redirect } from "react-router-dom";
import Home from "./home";
import Form from "./Form";

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home" component={Home} />
        <Route exact path="/form" component={Form} />
        <Redirect exact from="/" to="/home" />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="form" href="/form">
          <IonIcon icon={documentText} />
          <IonLabel>Form</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;