type ExperimentsButtonProps = {
  allExperiments: string[];
  selectedExperiments: string[]
  onClick: (expId: string) => void;
}

export function ExperimentsButton({allExperiments, onClick, selectedExperiments}: Readonly<ExperimentsButtonProps>) {
  return (
    <div className="flex flex-col lg:flex-row gap-2 py-10 items-center">
      <span className={"text-2xl font-medium"}>Choose experiments:</span>

      <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 items-center">

        {allExperiments.map((expId) => (
          <button
            key={expId}
            onClick={() => onClick(expId)}
            className={`px-4 py-2 rounded-lg border hover:cursor-pointer transition-colors duration-200 ${
              selectedExperiments.includes(expId)
                ? "bg-blue-700 text-white"
                : "bg-gray-100 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {expId}
          </button>
        ))}
      </div>
    </div>
  )
}