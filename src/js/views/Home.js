import React from "react";
import { useState, useEffect, useContext } from "react";
import Card from "../components/Card";
import './Home.css';

const Home = () => {
    
    const [planets, setPlanets] = useState([]);
    const [peoples, setPeoples] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    
    useEffect(() => {
        fetch("https://swapi.dev/api/people/", {
            method: "GET",
            headers: { 
                "Content-Type": "application/json" 
            }
        }).then(response => response.json())
            .then(data => setPeoples(data.results))     
    }, [])

    
    useEffect(() => {
        fetch("https://swapi.dev/api/planets/", {
            method: "GET",
            headers: { 
                "Content-Type": "application/json" 
            }
        }).then(response => response.json())
            .then(data => setPlanets(data.results)) 
    }, [])

    
    useEffect(() => {
        fetch("https://swapi.dev/api/vehicles/", {
            method: "GET",
            headers: { 
                "Content-Type": "application/json" 
            }
        }).then(response => response.json())
            .then(data => setVehicles(data.results))   
    }, [])


    return(
        <div>
            <div className="row">
                <h1 className="m-3">Characters</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mb-4 bg-white">
                    {peoples.map((people, i) => <div className="col-md-3"><Card data={people} image="" /></div>)}
                </div>
            </div>
            <div className="row">
            <h1 className="m-3">Planets</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mb-4">
                    {planets.map((planet, i) => <div className="col-md-3"><Card data={planet} image="" /></div>)}
                </div>
            </div>
            <div className="row">
                <h1 className="m-3">Vehicles</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mb-4">
                    {vehicles.map((vehicle, i) => <div className="col-md-3"><Card data={vehicle} image="" /></div>)}
                </div>
            </div>
        </div>
    );
}
export default Home;