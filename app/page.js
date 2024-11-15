import Header from "./header";

import "./global.css";
import { lusitana } from '@/app/fonts';
import Link from "next/link";

export default function HomePage() {

  return (
    <div className="flex flex-col">
      <Header title="SFD" />
      <main className="flex flex-col min-h-screen justify-center items-center">
        <h1 className={`${lusitana.className} flex my-5`}>Easy processing of RNA-seq data!</h1>
        <p className="flex my-5">Upload mtx, h5, AnnData files etc.</p>
        <p className="flex my-5">Instructions for converting from raw data</p>
        <div className="flex flex-row w-1/2 my-5 space-x-5 place-content-center">
          <div className="flex flex-col place-items-center">
            <span className="flex icon-[fluent-mdl2--timeline-matrix-view] text-green-500 text-5xl"></span>
            <p className="flex">Matrices</p>
          </div>
          <span className="icon-[maki--arrow] text-slate-400 text-5xl"></span>
          <div className="flex flex-col place-items-center">
            <span className="flex icon-[fluent-mdl2--processing-run] text-green-500 text-5xl"></span>
            <p className="flex">Filtering</p>
          </div>
          <span className="icon-[maki--arrow] text-slate-400 text-5xl"></span>
          <div className="flex flex-col place-items-center">
            <span className="icon-[fluent-mdl2--bar-chart-vertical-filter-solid] text-green-500 text-5xl"></span>
            <p className="flex">Processing</p>
          </div>
          <span className="icon-[maki--arrow] text-slate-400 text-5xl"></span>
          <div className="flex flex-col place-items-center">
            <span className="flex icon-[fluent--data-scatter-20-filled] text-green-500 text-5xl"></span>
            <p className="flex">Visualisation</p>
          </div>
        </div>
        <Link href="/startingpoint">
          <button className="bg-gray-700 rounded-lg shadow-lg border-2 hover:bg-gray-800 py-1.5 px-4 my-5">Start</button>
        </Link>
      </main>
    </div>
  );
}
