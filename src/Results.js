import React, { Component } from 'react';
import './Style/App.scss';
import './Main.scss';
import './Results.scss';

class Results extends Component {
    constructor() {
        super();
        this.state = {
            animals: []
        };
    }

    componentDidMount() {
        var url = "https://test1-api.rescuegroups.org/v5/public/animals/search/available/dogs?include=breeds,locations,pictures,species&fields[animals]=name,sex&fields[orgs]=name,email,url,facebookUrl,adoptionUrl&fields[breeds]=name&fields[fosters]=name,email&fields[locations]=name&fields[pictures]=large,small&fields[species]=singular&fields[videourls]=url,urlThumbnail&options=meta&limit=10";
        const API_KEY = process.env.REACT_APP_API_KEY;

        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => this.setState({ animals: response.data }))
    }

    render() {
        console.log(this.state);
        return (
            <div className="results-container">
                <div className="pet" id="pet-heading">
                    <div className="animal-name" >
                        <h4>Name</h4>
                    </div>
                    <div className="animal-breed">
                        <h4>Breed</h4>
                    </div>
                    <div className="animal-location">
                        <h4>Location</h4>
                    </div>
                    <div className="animal-updated">
                        <h4>Up.</h4>
                    </div>
                </div>
                {this.state.animals.map(animal => (
                    <div className="pet" key={animal.id}>
                        <div className="animal-property animal-name" >
                            {animal.attributes.name.toString()}
                        </div>
                        <div className="animal-property animal-breed">
                            {animal.meta.breedString.toString()}
                        </div>
                        <div className="animal-property animal-location">
                            {animal.relationships.locations.data.toString()}
                        </div>
                        <div className="animal-property animal-updated">
                            {animal.meta.updatedDate.substring(0, 4)}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Results;