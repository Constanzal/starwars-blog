import React from 'react'
import { useState, useEffect } from "react";

const Info = () => {

    const [people, setPeople] = useState({});

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/1", {
            method: "GET",
            headers: { 
                "Content-Type": "application/json" 
            }
        }).then(response => response.json())
            .then(data => setPeople(data.result.properties))        
    }, [])
   
    return (<div>
        <div className="container"> <br></br><br></br>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{people.name}</h1><br></br>
                            <p className="card-text"><strong>Birth Year:</strong> {people.birth_year} </p>
                            <p className="card-text"><strong>Gender:</strong> {people.gender} </p>
                            <p className="card-text"><strong>Hair color:</strong> {people.hair_color}</p>
                            <p className="card-text"><strong>Eye color:</strong> {people.eye_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
};

export default Info;