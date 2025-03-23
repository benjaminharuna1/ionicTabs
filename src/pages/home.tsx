import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "../theme/style.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-header">
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="home-container">
        <h2 className="home-title">Welcome to My Ionic App</h2>
        <p className="home-text">Assignment Day 2b</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
