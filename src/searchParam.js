import React,{ useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from "./useDropdown";

const SearchParams = () =>{

    const [location,setLocation] = useState("Seattle,WA");    //throws error
    const [breeds,setBreeds] = useState([]);
    const [animal,AnimalDropdown] = useDropdown("Animal","dog",ANIMALS);
    const [breed,BreedDropdown] = useDropdown("Breed","",breeds);
  return (
    <div className="search-params">
      <h1>{location}</h1>
        <form>
          <label htmlFor=nt"location">
            Location
            <input id="location" value={location} placeholder="location" onChange={e=>setLocation(e.target.value)}/>
          </label>
          <AnimalDropdown />
          <BreedDropdown/>
          <button>Submit</button>
        </form>
    </div>
  );
}

export default SearchParams;