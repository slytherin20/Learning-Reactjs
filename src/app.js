//React embraces the fact that rendering logic is inherently coupled with other UI logic:
// how events are handled, how the state changes over time, and how the data is prepared for display.

import React from 'react';
import { render } from 'react-dom'
//import  Pet from './pet';
import SearchParams from "./searchParam";


const App = () => {
 // return React.createElement(
   // "div",
   // {},
  //  React.createElement("h1", {}, "Adopt Me!!"),
   // [
    //  React.createElement(Pet, {
   //     name: "Luna",
   //     animal: "Dog",
   //     breed: "Havanese",
   //   }),
   //   React.createElement(Pet, {
   //     name: "Boink",
   //     animal: "Cat",
   //     breed: "Siberian",
   //   }),
   //   React.createElement(Pet, {
   //     name: "Pupu",
    //    animal: "Bird",
      //  breed: "Parrot",
 //     })
//    ]
//  );
  return(
    <div>
      <h1>AdoptMe!!</h1>
      {/*<Pet name="Luna" animal="Dog" breed="Havanese"/>
      <Pet name="Pupu" animal="Bird" breed="parrot"/>
      <Pet name="Boink" animal="Cat" breed="Mixed"/> */}
      <SearchParams />
    </div>
  );
};
//React.createElement(App) === <App/>
render(<App/>, document.getElementById("root"));
