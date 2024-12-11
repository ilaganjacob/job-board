// pages/index.js

import React from 'react';

const jobs = [
  { title: 'Software Engineer', company: 'TechCorp', location: 'San Francisco, CA', date: '2024-12-10', type: 'Full-time' },
  { title: 'Product Manager', company: 'Innovate Inc.', location: 'New York, NY', date: '2024-12-08', type: 'Part-time' },
  // Add more jobs here
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl">Job Board</h1>
      </header>

      <main className="p-4">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left">Job Title</th>
              <th className="px-6 py-3 text-left">Company</th>
              <th className="px-6 py-3 text-left">Location</th>
              <th className="px-6 py-3 text-left">Date Posted</th>
              <th className="px-6 py-3 text-left">Type</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3">{job.title}</td>
                <td className="px-6 py-3">{job.company}</td>
                <td className="px-6 py-3">{job.location}</td>
                <td className="px-6 py-3">{job.date}</td>
                <td className="px-6 py-3">{job.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className="bg-blue-500 text-white p-4 text-center">
        <p>&copy; 2024 Job Board</p>
      </footer>
    </div>
  );
}