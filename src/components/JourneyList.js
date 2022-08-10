import React from 'react'

const JourneyList = ({journeys}) => {
  

    const journeyNodes = journeys.map((journey, index) => {
        return (
          <div key={index}>
              <h2>{journey.startLocation} - {journey.endLocation}</h2>
              <p>{journey.distance} Miles</p>
              <p>By {journey.transport}</p>
          </div>
        )
      })
  
      return (
          <div>
              {journeyNodes}
              </div>
      )
}

export default JourneyList