"use client";

import { useState } from "react";
import Link from "next/link";

type Alumnus = {
  id: number;
  name: string;
  photo: string;
  school: string;
  course: string;
  year: number;
  batch: string;
  industry: string;
};

const alumniData: Alumnus[] = [
  { id: 1, name: "John Doe", photo: "/john.jpg", school: "Oxford", course: "Public Policy", year: 2020, batch: "2019-2020", industry: "Government" },
  { id: 2, name: "Jane Smith", photo: "/jane.jpg", school: "Cambridge", course: "Data Science", year: 2018, batch: "2017-2018", industry: "Technology" },
  { id: 3, name: "Alice Brown", photo: "/alice.jpg", school: "Oxford", course: "Law", year: 2019, batch: "2018-2019", industry: "Law" },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredAlumni = alumniData.filter((alumnus) =>
    Object.values(alumnus).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Chevening Philippines Alumni</h1>

      {/* Search Bar */}
      <div className="my-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/2"
        />
      </div>

      {/* Alumni List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAlumni.length > 0 ? (
          filteredAlumni.map((alumnus) => (
            <Link key={alumnus.id} href={`/alumni/${alumnus.id}`} className="border p-4 rounded-lg shadow-lg">
              <img src={alumnus.photo} alt={alumnus.name} className="w-full h-40 object-cover rounded" />
              <h2 className="text-xl font-bold mt-2">{alumnus.name}</h2>
              <p className="text-gray-600">{alumnus.school} - {alumnus.course}</p>
              <p className="text-gray-500">{alumnus.batch} | {alumnus.industry}</p>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No matching results found.</p>
        )}
      </div>
    </div>
  );
}
