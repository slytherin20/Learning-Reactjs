import React,{ useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () =>{
  //const location = 'Seattle, WA';
  //if(true){
    const [location,setLocation] = useState("Seattle,WA");    //throws error
   const [animal,setAnimal] = useState("dog");
    const [breed,setBreed] = useState("");
    const [breeds,setBreeds] = useState([]);
  //}
  return (
    <div className="search-params">
      <h1>{location}</h1>
        <form>
          <label htmlFor="location">
            Location
            <input id="location" value={location} placeholder="location" onChange={e=>setLocation(e.target.value)}/>
          </label>
          <label htmlFor="animals">
            Animals
            <select
              id="animals"
              value={animal}
              onChange={e=>setAnimal(e.target.value)}
              onBlur={e=>setAnimal(e.target.value)}>
              <option>All</option>
              { ANIMALS.map(animal=> {
                return <option key={animal} value={animal}>{animal}</option>
              })}
            </select>
          </label>
          <label htmlFor="breed">
            <select
              id="breed"
              value={breed}
              onChange={e=>setBreed(e.target.value)}
              onBlur={e=>setBreed(e.target.value)} disabled={!breed.length}>
              <option>All</option>
              {breeds.map(breedString=>
              <option key={breedString} value={breedString}>{breedString}</option>
              )}
            </select>
          </label>
          <button>Submit</button>
        </form>
    </div>
  );
}

export default SearchParams;