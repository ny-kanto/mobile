import React, { useEffect, useState } from "react";
import { IonList, IonItem, IonLabel, IonContent, IonPage } from "@ionic/react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { teams } from "../data/data";

const TeamList: React.FC = () => {
  const history = useHistory();
  const { date } = useParams<{ date: string }>();
  // const [teams, setTeams] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://www.balldontlie.io/api/v1/teams"
  //     );
  //     const teamsData = response.data.data.map((team: any) => ({
  //       id: team.id,
  //       name: team.full_name,
  //     }));
  //     setTeams(teamsData);
  //   } catch (error) {
  //     console.error("Erreur lors de la récupération des données", error);
  //   }
  // };

  const handleTeamClick = (teamId: number) => {
    history.push(`/contrat/${teamId}/date/${date}`);
  };

  return (
    <IonPage>
      <IonContent>
        <IonList>
          {teams.map((team) => (
            <IonItem key={team.id} onClick={() => handleTeamClick(team.id)}>
              <IonLabel>{team.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TeamList;
