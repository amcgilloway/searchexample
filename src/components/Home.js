import React, {useState, useEffect} from 'react';
import JourneyList from './JourneyList'
import Search from './Search'

const Home = ({journeys}) => {

    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
      setFilteredList(journeys)
    }, [])

    const filterJourneys = (searchTerms) => {
        let filteredResults = journeys
        if (searchTerms.startLocation){
            filteredResults = journeys.filter((journey) => {
                return journey.startLocation.includes(searchTerms.startLocation)
              })
        }
        if (searchTerms.transport) {
            filteredResults = filteredResults.filter((journey) => {
                return journey.transport.includes(searchTerms.transport)
              })
        } if (!searchTerms.startLocation && !searchTerms.transport){
            filteredResults = journeys; 
        }
        
            

        setFilteredList(filteredResults)
    }
  
   return (
    <div>
        <Search filterJourneys={filterJourneys}/>
        <JourneyList journeys={filteredList} />
    </div>
   )
}

export default Home;