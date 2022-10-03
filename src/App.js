import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((info) => {
        setData(info)
      });
  }, []);

  return (
    <div>
      <h1>Personajes de Rick and morty:</h1>
      <ul>
        {data.results.map((characters) =>(
          <li>
            {characters.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
