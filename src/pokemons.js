import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// export async function fetchObjectiveData(filters: Filters, callback: React.Dispatch<React.SetStateAction<OperationDTO[]>>) {
//   const queryString = getQueryString(filters);
//   const response: Response = await fetch('/api/operations' + queryString);
//   const operationsResults: OperationDTO[] = await response.json();
//   callback(operationsResults);
// }





function Pokemons() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />

      </div>
    </Router>
  );
}

function Home() {
  fetch('localhost:3001/')
    .then(response => response.json())
    .then(data => console.log(data))
}



function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default Pokemons;
