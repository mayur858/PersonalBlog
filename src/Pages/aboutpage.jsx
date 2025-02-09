import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
        <p className="text-lg text-gray-600 mb-6">
          Hi! I'm a passionate software developer with experience in Flutter,
          C#, .NET, and Machine Learning. I specialize in creating dynamic and
          efficient applications with a focus on clean code and scalable
          solutions. I am always eager to learn new technologies and improve my
          skills in programming and development.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Skills & Expertise
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>Experience with Flutter SDK and Dart for mobile development</li>
          <li>Skilled in C# .NET for backend development</li>
          <li>Machine Learning Enthusiast with a passion for data science</li>
          <li>Proficient in web development with JavaScript and React</li>
          <li>Experience building APIs using Node.js and Express.js</li>
          <li>Skilled in PostgreSQL and MySQL for database management</li>
          <li>Understanding of mobile platforms (Android/iOS)</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Projects & Experience
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Over the years, I have worked on various projects, ranging from mobile
          applications to web development, backend services, and machine
          learning models. I have a solid foundation in full-stack development
          and am always working on expanding my knowledge of new tools and
          technologies.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Let's Connect
        </h2>
        <p className="text-lg text-gray-600">
          If you'd like to collaborate, learn more about my work, or discuss
          potential opportunities, feel free to reach out to me on LinkedIn or
          via email.
        </p>

        <div className="mt-6 flex space-x-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
