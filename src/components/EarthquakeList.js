import React, { Component } from 'react';
import moment from 'moment';
import earthquakes from '../data/earthquakes';


export default class EarthquakeList extends Component {

  render(){
    let quakes = earthquakes.features.map((tremor) => {
      return (

          <div className="col-sm-6" key={tremor.properties.code}>
            <div className="card" >
              <div className="card-block">
                <h4 className="card-title">{tremor.properties.place}</h4>
                <h6 className="card-subtitle mb-2 text-muted">Magnitude: {tremor.properties.mag}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Time: {moment(tremor.properties.time).format('llll')}</h6>
                <p className="card-text">Coordinates: {tremor.geometry.coordinates}</p>

                <a href={tremor.properties.url} className="card-link">USGS Event Link</a>

              </div>
            </div>
          </div>

            )
    })
    return (
      <div className="quake-list">

        <div className="row">
          {quakes}
        </div>

      </div>
    )
  }
}
