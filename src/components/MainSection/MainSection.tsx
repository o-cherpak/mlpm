import {FileSection} from "./FileSection/FileSection.tsx";

export function MainSection() {
  return (
    <main
      className="flex gap-4 flex-col items-center justify-center text-center px-6 md:px-20 py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl">
        <h1
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          Machine Learning Professionals Manage
        </h1>

        <p className="pt-6 text-lg md:text-xl text-gray-700">
          A modern tool that allows users to upload, inspect, and compare experiment logs with ease and clarity.
        </p>
      </div>

      <FileSection/>
    </main>
  );
}
