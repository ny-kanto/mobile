import React from "react";
import { useParams } from "react-router-dom";
import { players } from "../data/data";

const PlayerList: React.FC = () => {
  const { teamId, date } = useParams<{ teamId: string, date: string }>();

  return (
    <div>
      <h2>Liste des joueurs de l'équipe {teamId} le {date}</h2>
      {players.map((player) => (
        <div key={player.id}>
          <p>{player.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
