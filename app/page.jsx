import ReactButton from './react-button';

function Header({ title }) {
  return <h1>{title ? title : "Missing title!"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Header title="React accordingly" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <ReactButton />
    </div>
  );
}

// root.render(<HomePage />);