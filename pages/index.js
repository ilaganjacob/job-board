// pages/index.js
import React, { useState } from "react";
import { Search, MapPin, Calendar, Briefcase } from "lucide-react";
import jobsData from "../data/jobs.json";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  // Filter jobs based on search term and job type
  const filteredJobs = jobsData.jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      typeFilter === "all" ||
      job.type.toLowerCase().includes(typeFilter.toLowerCase());

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-6">
        <h1 className="text-3xl font-bold">Toronto Internship Job Board</h1>
        <p className="mt-2">Find your next tech internship opportunity</p>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setTypeFilter("all")}
              className={`px-4 py-2 rounded-lg ${
                typeFilter === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setTypeFilter("full-time")}
              className={`px-4 py-2 rounded-lg ${
                typeFilter === "full-time"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Full-time
            </button>
            <button
              onClick={() => setTypeFilter("part-time")}
              className={`px-4 py-2 rounded-lg ${
                typeFilter === "part-time"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Part-time
            </button>
          </div>
        </div>

        

        {/* Job Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h2>
                  <p className="text-gray-600">{job.company}</p>
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

              <p className="mt-4 text-gray-600 line-clamp-3">
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
                {job.skills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 rounded text-sm text-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-blue-500 text-white p-4 text-center mt-12">
        <p>&copy; 2024 Toronto Internship Job Board</p>
        <div>
          Creator: Jacob Ilagan{" "}
          <a href="https://linkedin.com/in/jacob-ilagan" className="underline">
            LinkedIn
          </a>{" "}
          <a href="https://github.com/ilaganjacob" className="underline">
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}
