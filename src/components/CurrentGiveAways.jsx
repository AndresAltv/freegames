
import axios from "axios";
import { useEffect, useState } from "react"
import './css/current.css';
import { GiveAwayItems } from "./GiveAwayItems";

export const CurrentGiveAways = () => {

    const [games, setGames] = useState([]);

    const apiKey = import.meta.env.VITE_REACT_APP_KEY;

    useEffect(() => {
        (async () => {
            try {
                let req = await fetch("https://gamerpower.p.rapidapi.com/api/giveaways?type=game", {
                    headers: {
                        'X-RapidAPI-Key': apiKey,
                        'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
                    }
                });
                let resp = await req.json();
                setGames(resp);
            } catch (error) {
                console.log(error);
                return;
            }
        })();
    }, []);

    return (
        <div className="current-giveaways">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Current Giveaways</h2>
                    </div>
                    <div className="row">
                        {
                            games.length > 0 &&
                            games.map((game) => (
                                <GiveAwayItems
                                    key={game.id}
                                    {...game}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}