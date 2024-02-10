import { useState } from "react";
import { puppyList } from "./data";
import "./additional.css"
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {featPupId && (
        <div id="targetPuppy">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email} </li>
          </ul>
        </div>
      )}
      {puppies.map(({ id, name }) => {
        return (
          <p className="puppies"
            onClick={() => {
              setFeatPupId(id);
            }}
            key={id}
          >
            {name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
