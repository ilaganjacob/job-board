import React, { useState } from "react";
import { Search, Briefcase, MapPin, Calendar, Clock } from "lucide-react";

const jobs = [
  {
    title: "Software Engineer",
    company: "TechCorp",
    location: "Toronto, ON",
    date: "2024-12-10",
    type: "Full-time",
    description:
      "Looking for a passionate software engineer intern to join our growing team...",
    salary: "$40-50k/year",
    skills: ["React", "Node.js", "TypeScript"],
  },
  {
    title: "Product Manager",
    company: "Innovate Inc.",
    location: "Toronto, ON",
    date: "2024-12-08",
    type: "Part-time",
    description:
      "Seeking a detail-oriented product manager intern to help shape our roadmap...",
    salary: "$35-45k/year",
    skills: ["Agile", "User Research", "Data Analysis"],
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || job.type.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 ">
      <header className="bg-blue-600 text-white p-6 shadow-lg flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Toronto Internship Job Board</h1>
        <p className="mt-2 text-blue-100">
          Find your next tech internship opportunity
        </p>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("full-time")}
              className={`px-4 py-2 rounded-lg ${
                filter === "full-time"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              Full-time
            </button>
            <button
              onClick={() => setFilter("part-time")}
              className={`px-4 py-2 rounded-lg ${
                filter === "part-time"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              Part-time
            </button>
          </div>
        </div>

        {/* Cards for the jobs */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h2>
                  <p className="text-gray-600 mt-1">{job.company}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    job.type === "Full-time"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {job.type}
                </span>
              </div>

              <p className="mt-4 text-gray-600 line-clamp-2">
                {job.description}
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-500">
                  <MapPin size={16} className="mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-500">
                  <Calendar size={16} className="mr-2" />
                  {new Date(job.date).toLocaleDateString()}
                </div>
                <div className="flex items-center text-gray-500">
                  <Briefcase size={16} className="mr-2" />
                  {job.salary}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-blue-600 text-white p-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Toronto Internship Job Board</p>
          <div className="mt-2">
            Creator: Jacob Ilagan{" "}
            <a
              href="https://linkedin.com/in/jacob-ilagan"
              className="underline hover:text-blue-200"
            >
              LinkedIn
            </a>{" "}
            <a
              href="https://github.com/ilaganjacob"
              className="underline hover:text-blue-200"
            >
              Github
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
