import {type ChangeEvent, type DragEvent, useState} from "react";

type FileDropzoneProps = {
  setFileParam: (file: File) => void;
}

export function FileDropzone({setFileParam}: Readonly<FileDropzoneProps>) {
  const [file, setFile] = useState<File>();

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setFile(e.dataTransfer.files[0]);
    setFileParam(e.dataTransfer.files[0]);
  };

  const handeChooseFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      e.preventDefault();

      setFileParam(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="border-2 border-dashed border-gray-300 shadow-lg rounded-2xl p-8 text-center  hover:cursor-pointer"
    >
      <p className={`text-lg pb-10 ${file ? "text-green-600" : "text-gray-600 "}`}>
        {file ? "Your file is successful uploaded" : "Drag & Drop your file here or click to start"}
      </p>

      <input
        type="file"
        className="hidden"
        id="fileInput"
        accept=".csv"
        onChange={handeChooseFile}
      />

      <label
        htmlFor="fileInput"
        className={`mt-4 py-4 px-8 bg-blue-600 ${file && "bg-blue-800"} text-white rounded-full cursor-pointer hover:bg-blue-700 transition`}
      >
        {file ? "Re-choose File" : "Choose File"}
      </label>

    </div>
  );
}
