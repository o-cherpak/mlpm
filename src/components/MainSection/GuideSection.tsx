import {FiBarChart2, FiSearch, FiUpload} from "react-icons/fi";

export function GuideSection() {
  const steps = [
    {
      title: "Upload Your Experiment Logs",
      description:
        "Upload your experiment log files in the supported format. Ensure they contain metrics like accuracy, loss, etc.",
      icon: <FiUpload className="w-10 h-10 text-indigo-600"/>,
    },
    {
      title: "Select Experiments",
      description:
        "Choose one or multiple experiments to compare. There’s no limit—you can analyze all at once.",
      icon: <FiSearch className="w-10 h-10 text-indigo-600"/>,
    },
    {
      title: "Explore Interactive Charts",
      description:
        "Zoom in, pan, and hover over charts to view detailed values at each step of your experiment.",
      icon: <FiBarChart2 className="w-10 h-10 text-indigo-600"/>,
    },
  ];

  return (
    <section className="relative py-16 px-2 lg:px-16">
      <div className="absolute top-40 left-20 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>


      <div className="max-w-5xl mx-0 lg:mx-auto text-center mb-12">
        <h2
          className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600
          bg-clip-text text-transparent">
          How to Use This Dashboard
        </h2>

        <p className="text-gray-600 text-lg">
          Follow these simple steps to visualize and analyze your experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-8xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-2xl transition transform
            hover:translate-y-1.5"
          >

            <div className="text-center flex justify-center gap-4 mb-3">
              <span
                className="text-4xl font-bold bg-gradient-to-r
                from-blue-500 via-purple-600 to-purple-600 bg-clip-text text-transparent">
                {index + 1}
              </span>

              <div className="flex mb-4">{step.icon}</div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {step.title}
            </h3>

            <p className="text-gray-600 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
