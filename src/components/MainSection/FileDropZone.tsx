import {useState, type DragEvent} from "react";

export function FileDropzone() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file && file.name.endsWith(".csv")) {
      setFileName(file.name);
    }
  };


  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center  hover:cursor-pointer"
    >
      <p className="text-gray-600 text-lg pb-10">
        Drag & Drop your file here or click to start
      </p>

      <input
        type="file"
        className="hidden"
        id="fileInput"
        accept=".csv"
        onChange={(e) =>
          setFileName(e.target.files?.[0].name || null)
        }
      />

      <label
        htmlFor="fileInput"
        className="mt-4 py-4 px-8 bg-blue-600 text-white rounded-full cursor-pointer hover:bg-blue-700 transition"
      >
        Choose File
      </label>

      {fileName && (
        <p className="mt-4 text-blue-600 font-medium">
          Selected: {fileName}
        </p>
      )}
    </div>
  );
}
