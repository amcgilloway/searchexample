import React, {useState} from 'react'
import Home from '../components/Home'

const MainContainer = () => {
const [journeys, setJourneys] = useState([
     {
      startLocation: 'linlithgow',
      endLocation: 'stirling',
      transport: 'train',
      distance: 30
    },
     {
      startLocation: 'paris',
      endLocation: 'frankfurt',
      transport: 'train',
      distance: 400
    },
     {
      startLocation: 'sydney',
      endLocation: 'new york',
      transport: 'aeroplane',
      distance: 10000
    },
     {
      startLocation: 'london',
      endLocation: 'rome',
      transport: 'car',
      distance: 1200
    },
     {
      startLocation: 'lancaster',
      endLocation: 'isle of man',
      transport: 'ferry',
      distance: 80
    }
  ])

 

  return (
    <div>
        <Home journeys= {journeys} />
    </div>
  )
}

export default MainContainer;