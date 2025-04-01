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
  { id: 1, name: "Rod Christopher Barit", photo: "/rod_barit.jpg", school: "Kings College London", course: "Finance Analytics MSc", year: 2024, batch: "2023-2024", industry: "Finance, Data, Technology" },
  { id: 2, name: "Francis Joshua Arrabaca", photo: "/joshua_arrabaca.jpg", school: "University of St Andrews", course: "Data-Intensive Analysis MSc", year: 2024, batch: "2023-2024", industry: "Technology, Data" },
  { id: 3, name: "Nathan Elezer Bayasen", photo: "/nathan_bayasen.jpg", school: "SOAS, University of London", course: "International Finance and Development MSc", year: 2024, batch: "2023-2024", industry: "Finance, Government" },
  { id: 4, name: "Charles Fredrickson De Belen", photo: "/charles_debelen.jpg", school: "London School of Economics and Political Science", course: "Master of Public Policy", year: 2024, batch: "2023-2024", industry: "Law, Government" },
  { id: 5, name: "Zara Marie Dy", photo: "/zara_dy.jpg", school: "Queen Mary University of London", course: "International Business Law LLM", year: 2024, batch: "2023-2024", industry: "Law, Shipping" },
  { id: 6, name: "Rashida Edding", photo: "/rashida_edding.jpg", school: "SOAS, University of London", course: "Law and Gender LLM", year: 2024, batch: "2023-2024", industry: "Law, Human Rights" },
  { id: 7, name: "Anjelou Marie Estrella", photo: "/anjelou_estrella.jpg", school: "University of Sussex", course: "Entrepreneurship and Innovation MSc", year: 2024, batch: "2023-2024", industry: "Entrepreneurship" },
  { id: 8, name: "Napoleon Gonzales III", photo: "/napoleon_gonzales.jpg", school: "University of Westminster", course: "International Law LLM", year: 2024, batch: "2023-2024", industry: "Law, Immigration" },
  { id: 9, name: "June Arvin Gudoy", photo: "/jun_gudoy.jpg", school: "University of Oxford", course: "Public Policy", year: 2024, batch: "2023-2024", industry: "Governance" },
  { id: 10, name: "Christian Gultia", photo: "/christian_gultia.jpg", school: "University of York", course: "MA in Applied Human Rights", year: 2024, batch: "2023-2024", industry: "Human Rights" },
  { id: 11, name: "Rocel Ann Junio", photo: "/rocel_junio.jpg", school: "Liverpool School of Tropical Medicine", course: "MPH Master of Public Health (Outbreak Control and Health Protection)", year: 2024, batch: "2023-2024", industry: "Health" },
  { id: 12, name: "Jemimah Landicho", photo: "/jemimah_landicho.jpg", school: "University College London", course: "Climate, Innovation and Sustainability Policy MPA", year: 2024, batch: "2023-2024", industry: "Climate, Innovation, and Sustainability" },
  { id: 13, name: "Mary Aubbrey Leigh Lim", photo: "/aubbrey_lim.jpg", school: "University of Cambridge", course: "Master of Laws LLM", year: 2024, batch: "2023-2024", industry: "Law, Commercial" },
  { id: 14, name: "Jaz Malonda", photo: "/jaz_malonda.jpg", school: "University of Sussex", course: "Media Practice for Development and Social Change MA", year: 2024, batch: "2023-2024", industry: "Development" },
  { id: 15, name: "Ferth Vandensteen Manaysay", photo: "/ferth_manaysay.jpg", school: "London School of Economics and Political Science", course: "Environmental Policy and Regulation MSc", year: 2024, batch: "2023-2024", industry: "Climate" },
  { id: 16, name: "Raymond John Naguit", photo: "/raymond_naguit.jpg", school: "London School of Hygiene and Tropical Medicine and London School of Economics", course: "Health Policy, Planning and Financing MSc", year: 2024, batch: "2023-2024", industry: "Health Policy, Planning, and Financing" },
  { id: 17, name: "Christian Edward Nuevo", photo: "/christian_nuevo.jpg", school: "Imperial College London", course: "MSc in Public Health", year: 2024, batch: "2023-2024", industry: "Health" },
  { id: 18, name: "Henrielle Louise Omolida", photo: "/henrielle_omolida.jpg", school: "King's College London", course: "Digital Asset and Media Management MA", year: 2024, batch: "2023-2024", industry: "Arts and Creative Industry" },
  { id: 19, name: "Errianne Rojo", photo: "/errianne_rojo.jpg", school: "University of Westminster", course: "Business of Film MSc", year: 2024, batch: "2023-2024", industry: "Arts and Creative Industry" },
  { id: 20, name: "John Carlo Timbol", photo: "/john_timbol.jpg", school: "University of Leeds", course: "Master of Public Health (International)", year: 2024, batch: "2023-2024", industry: "Health" },
  { id: 21, name: "Chelsea Ugay", photo: "/chelsea_ugay.jpg", school: "Queen's University Belfast", course: "MSc Advanced Food Safety", year: 2024, batch: "2023-2024", industry: "Health, Food Safety" },
  { id: 22, name: "Jenin Rosanne Velaquez", photo: "/jenine_velasquez.jpg", school: "University of Edinburgh", course: "Human Rights LLM", year: 2024, batch: "2023-2024", industry: "Advanced Human Rights" },
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
