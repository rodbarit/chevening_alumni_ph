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
  { id: 1, name: "Rod Barit", photo: "/rod.jpg", school: "King's College London", course: "MSc Finance Analytics", year: 2024, batch: "2023-2024", industry: "Finance" },
  { id: 2, name: "Erri Rojo", photo: "/erri.jpg", school: "University of Westminster", course: "MS Business of Film", year: 2024, batch: "2023-2024", industry: "Film" },
  { id: 3, name: "Joshua Arrabaca", photo: "/josh.jpg", school: "University of St. Andrews", course: "Msc Data-Intensive Analysis", year: 2024, batch: "2023-2024", industry: "Technology" },
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
