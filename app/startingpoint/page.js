import Header from "@/app/header";

import "@/app/global.css";
import { lusitana } from "@/app/fonts";
import Link from "next/link";

const dataFormats = [
    { format: 'mtx', label: 'mtx' },
    { format: 'h5', label: 'h5' },
    { format: 'AnnData', label: 'AnnData' },
    { format: 'Excel', label: 'Excel' },
    { format: 'gz/zip', label: 'gz/zip' },
    { format: 'fastq/other', label: 'fastq/other' }
  ];

export default function SelectDataFormatPage() {
  return (
    <div className="flex flex-col">
      <Header title="SFD" />
      <main className="flex flex-col min-h-screen justify-center items-center">
        <h1 className={`${lusitana.className} flex my-5`}>
          What file format is your data in?
        </h1>
        <div className="grid grid-cols-3 gap-8 w-1/2 my-5 place-content-center">
          <Link className="grid" href="/upload?dataformat=mtx">
            <button className="bg-gray-700 rounded-lg shadow-lg border-2 hover:bg-gray-800 py-1.5 px-4">
              mtx
            </button>
          </Link>
          <button className="bg-gray-700 rounded-lg shadow-lg border-2 hover:bg-gray-800 py-1.5 px-4">
            h5
          </button>
          <button className="bg-gray-700 rounded-lg shadow-lg border-2 hover:bg-gray-800 py-1.5 px-4">
            AnnData
          </button>
          <button className="bg-gray-700 rounded-lg shadow-lg border-2 hover:bg-gray-800 py-1.5 px-4">
            Excel
          </button>
          <button className="bg-gray-700 rounded-lg shadow-lg border-2 hover:bg-gray-800 py-1.5 px-4">
            gz/zip
          </button>
          <button className="bg-gray-700 rounded-lg shadow-lg border-2 hover:bg-gray-800 py-1.5 px-4">
            fastq/other
          </button>
        </div>
        <button className="bg-gray-700 rounded-lg shadow-lg border-2 hover:bg-gray-800 py-1.5 px-4 mt-8">
          Deal with it for me 🤷‍♂️
        </button>
      </main>
    </div>
  );
}
