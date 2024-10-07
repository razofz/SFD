const app = document.getElementById("app");

function Header({ title }) {
  console.log(title);
  return <h1>{title}</h1>;
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  return (
    <div>
      <Header title="React accordingly" />
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
