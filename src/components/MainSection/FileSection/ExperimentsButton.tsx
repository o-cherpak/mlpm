type ExperimentsButtonProps = {
  allExperiments: string[];
  selectedExperiments: string[]
  onClick: (expId: string) => void;
}

export function ExperimentsButton({allExperiments, onClick, selectedExperiments}: Readonly<ExperimentsButtonProps>) {
  return (
    <div className="flex flex-wrap wrap py-10 gap-3 items-center">
      <span className={"text-2xl font-medium"}>Choose experiments:</span>
      {allExperiments.map((expId) => (
        <button
          key={expId}
          onClick={() => onClick(expId)}
          className={`px-4 py-2 rounded-lg border hover:cursor-pointer ${
            selectedExperiments.includes(expId)
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-300"
          }`}
        >
          {expId}
        </button>
      ))}
    </div>
  )
}