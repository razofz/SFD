import { useState } from "react";

function Header({ title }) {
  return (<h1>{ title ? title : "Missing title!" }</h1>)
}

function HomePage() {
  const [reactions, setReactions] = useState(0);
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  function handleClick() {
    setReactions(reactions + 1);
  }

  return (
    <div>
      <Header title="React accordingly"/>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
        </ul>
        <button onClick={handleClick}>React({reactions})</button>
    </div>
  );
}

root.render(<HomePage />);