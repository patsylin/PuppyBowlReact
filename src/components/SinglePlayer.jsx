import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchPlayers from "../API";

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function singleDetails() {
      try {
        const playersData = await FetchPlayers();
        console.log(playersData);

        const selectedPlayer = playersData.data.players.find(
          (player) => player.id == id
        );
        setPlayer(selectedPlayer);
      } catch (error) {
        console.error("Error fetching player details", error);
      }
    }
    singleDetails();
  }, []);

  async function handleDelete(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Player Details</h2>
      {player ? (
        <>
          <h3>{player.name}</h3>
          <p>
            <img src={player.imageUrl} />
          </p>
          <p>ID: {player.id}</p>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
        </>
      ) : null}

      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
