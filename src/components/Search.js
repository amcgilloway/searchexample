import React, {useState} from 'react';

const Search = ({filterJourneys}) => {

    const [searchTerms, setSearchTerms] = useState({
        startLocation: '',
        transport: ''
    })
    const handleChange = (e) => {
        const copySearch = {...searchTerms}
        copySearch[e.target.name] = e.target.value
        setSearchTerms(copySearch)
        filterJourneys(copySearch)
    }

    return (
        <div>
        <h4>Filter By:</h4>
        <label htmlFor="startLocation">Start Location: </label>
            <input type="text" id="startLocation" name="startLocation" value={searchTerms.startLocation} onChange={handleChange} />
            <label htmlFor="transport">Transport: </label>
            <input type="text" id="transport" name="transport" value={searchTerms.transport} onChange={handleChange} />
            </div>
    )
  
}

export default Search