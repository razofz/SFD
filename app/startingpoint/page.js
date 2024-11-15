import Header from "@/app/header";

import "@/app/global.css";
import { lusitana } from "@/app/fonts";
import Link from "next/link";

const dataFormats = [
  { format: "mtx", label: "mtx" },
  { format: "h5", label: "h5" },
  { format: "anndata", label: "AnnData" },
  { format: "excel", label: "Excel" },
  { format: "compressed", label: "gz/zip" },
  { format: "other", label: "fastq/other" },
];

export default function SelectDataFormatPage() {
  return (
    <div className="flex flex-col">
      <Header title="SFD" />
      <main className="flex flex-col min-h-screen justify-center items-center">
        {/* <h1 className="flex my-5"> */}
        <h1 className={`${lusitana.className} flex my-5`}>
          What file format is your data in?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-1/2 my-5 place-content-center">
          {dataFormats.map((dataFormat, index) => (
            <Link
              key={index}
              className="grid"
              href={`/upload?dataformat=${dataFormat.format}`}
            >
              <button className="bg-gray-700 rounded-lg shadow-lg border-2 hover:bg-gray-800 py-1.5 px-4">
                {dataFormat.label}
              </button>
            </Link>
          ))}
        </div>
        <Link
          className="grid"
          href="/upload?dataformat=automagic"
        >
          <button className="bg-gray-700 rounded-lg shadow-lg border-2 hover:bg-gray-800 py-1.5 px-4 mt-8">
            Deal with it for me 🤷‍♂️
          </button>
        </Link>
      </main>
    </div>
  );
}
