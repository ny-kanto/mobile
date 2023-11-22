import { IonButton, IonContent, IonDatetime, IonLabel, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router";

const DateSelector: React.FC = () => {
  const history = useHistory();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
  };

  const handleValidation = () => {

    // Redirection vers TeamList avec la date sélectionnée dans l'URL
    history.push(`/TeamList/${selectedDate.toISOString().split("T")[0]}`);
  };

  return (
    <IonPage>
      <IonContent>
        <IonLabel>Sélectionnez une date : </IonLabel>
        <IonDatetime
          value={selectedDate.toISOString().split("T")[0]}
          onIonChange={handleDateChange}
        />
        <IonButton onClick={handleValidation}>Valider</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default DateSelector;
