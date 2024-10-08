import ReactButton from "./react-button";
import Header from "./header";

import "./global.css";

function HeaderFoo({ title }) {
  return (
    <h1 className="text-3xl font-bold text-slate-200 bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-green-800">
      {title ? title : "Missing title!"}
    </h1>
  );
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div className="flex min-h-screen flex-col">
      <div>
        {/* <div className="flex h-20 items-center rounded-lg p-6 md:h-32 place-content-center m-0 bg-gradient-to-br from-green-900"> */}
          {/* <HeaderFoo title="sobj-creator-2000" /> */}
          <Header title="SFD" />
        {/* </div> */}
        <div className="flex py-5 px-40 content-center justify-center">
          <h2>Easy processing of RNA-seq data!</h2>
          {/* <p className="container mx-auto first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-line:uppercase first-line:tracking-widest">
            Lorem ipsum dolor sit amet consectetur adipiscing elit integer urna
            ut nunc rhoncus tortor augue aliquet duis curabitur efficitur
            egestas vehicula nostra semper. Lorem eros quis nibh nec conubia
            ultricies ante tristique rhoncus porta dolor tempus viverra quisque
            curae sociosqu class. Vivamus purus parturient cubilia enim senectus
            inceptos leo quam ut orci netus mollis non magnis nunc lacinia ante
            montes aenean nascetur erat dapibus velit primis.
          </p>
          <ul className="list-disc list-inside m-5 marker:text-emerald-900 text-slate-300">
            {names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <ReactButton /> */}
        </div>
      </div>
    </div>
  );
}
