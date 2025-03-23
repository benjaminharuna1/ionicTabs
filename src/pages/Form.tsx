import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonToast,
} from "@ionic/react";
import "../theme/style.css"; // External CSS

const Form: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!fullName || !email) {
      setError("All fields are required.");
      setShowToast(true);
      return;
    }
    setError("");
    alert(`Form submitted!\nName: ${fullName}\nEmail: ${email}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Full Name</IonLabel>
          <IonInput value={fullName} onIonChange={(e) => setFullName(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Email Address</IonLabel>
          <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
        </IonItem>

        <IonButton expand="full" onClick={handleSubmit} className="custom-button">
          Submit
        </IonButton>

        <IonToast isOpen={showToast} message={error} duration={2000} onDidDismiss={() => setShowToast(false)} />
      </IonContent>
    </IonPage>
  );
};

export default Form;
