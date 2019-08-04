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
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
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


// function Pokemons() {
//   return (
//     <Router>
//       <div>
//         <Header />

//         <Route exact path="/" component={Home} />

//       </div>
//     </Router>
//   );
// }
// function Home() {
//   return <h2>Home</h2>;
// }
// // function Home() {
// //   fetch('localhost:3001/')
// //     .then(response => response.json())
// //     .then(data => console.log(data))
// // }



// function Header() {
//   return (
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/topics">Topics</Link>
//       </li>
//     </ul>
//   );
// }

// export default Pokemons;
