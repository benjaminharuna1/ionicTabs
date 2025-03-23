import React, { useState } from "react";
import {IonButton,IonContent,IonHeader,IonInput,IonItem,IonLabel,IonPage,IonTitle,IonToolbar,IonToast,} from "@ionic/react";
import "../theme/style.css";

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
      <IonHeader className="ion-header">
        <IonToolbar>
          <IonTitle>Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="form-container">
          <h2>Create an Account</h2>

          <IonItem className="input-box">
            <IonLabel position="floating">Full Name</IonLabel>
            <IonInput value={fullName} onIonChange={(e) => setFullName(e.detail.value!)} />
          </IonItem>

          <IonItem className="input-box">
            <IonLabel position="floating">Email Address</IonLabel>
            <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
          </IonItem>

          <IonButton expand="full" onClick={handleSubmit} className="submit-button">
            Submit
          </IonButton>

          <IonToast isOpen={showToast} message={error} duration={2000} onDidDismiss={() => setShowToast(false)} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Form;
