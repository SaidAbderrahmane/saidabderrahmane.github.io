import React from 'react';

const Resume = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Your Name</h1>
        <p className="text-lg text-gray-600">your.email@example.com | (123) 456-7890</p>
        <p className="text-lg text-gray-600">Your Address, City, State, ZIP</p>
      </header>

  

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">Experience</h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-800">Job Title</h3>
          <p className="text-lg text-gray-600">Company Name | Date Range</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Responsibility or achievement</li>
            <li>Responsibility or achievement</li>
            <li>Responsibility or achievement</li>
          </ul>
        </div>
        {/* Add more job experiences as needed */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">Education</h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-800">Degree</h3>
          <p className="text-lg text-gray-600">School Name | Graduation Year</p>
          <p className="text-lg text-gray-600">Relevant coursework or achievements</p>
        </div>
        {/* Add more education entries as needed */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">Skills</h2>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          {/* Add more skills as needed */}
        </ul>
      </section>
    </div>
  );
};

export default Resume;
