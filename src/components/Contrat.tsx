// PlayerList.tsx
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { contrat, players } from "../data/data";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Contrat: React.FC = () => {
  const history = useHistory();
  const { teamId, date } = useParams<{ teamId: string; date: string }>();
  const targetDate = new Date(date);

  // Filtrer les contrats pour ceux de l'équipe spécifiée et à la date spécifiée
  const joueursDansEquipe = contrat
    .filter(
      (c) =>
        c.id_equipe === parseInt(teamId, 10) &&
        targetDate >= new Date(c.date_debut) &&
        targetDate <= new Date(c.date_fin)
    )
    .map((c) => c.id_joueur);

  const joueursTrouves = players.filter((player) =>
    joueursDansEquipe.includes(player.id)
  );

  // Rendu du composant
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Liste des joueurs de l'équipe {teamId} le {date}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {joueursTrouves.map((player) => (
            <IonItem key={player.id}>
              <IonLabel>{player.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Contrat;
