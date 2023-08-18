import fetchAllPlayers from '../API/index'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'


export default function AllPlayers() {

    const [players, setPlayers] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        async function fetchData(){

            const fetchedPlayers = await fetchAllPlayers();

            setPlayers(fetchedPlayers.data.players)

        }
        fetchData();
    },[])

    return (
        <div className = "main">
          {players.map((player) => {
            return (
              <li key={player.id}>
                <h4>{player.name}</h4>
                <p><img src={player.imageUrl}></img></p>
                <p>ID: {player.id}</p>
                <p>Breed: {player.breed}</p>
                <div className="navi">
                  <button onClick={() => navigate(`/players/${player.id}`)}>Details</button>
                </div>
              </li>
            );
          })}
        </div>
      );
    }
