import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "../theme/style.css"; // External CSS

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to Our Ionic App</h2>
        <p>Use the tabs below to navigate.</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
