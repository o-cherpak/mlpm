import {type ChangeEvent, type DragEvent, useState} from "react";
import {FaCheck} from "react-icons/fa";

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
      setFileParam(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className={`border-2 w-full space-y-4 md:w-2/3 ${file ? "pb-8" : "pb-10 lg:pb-20"} border-dashed border-gray-300 shadow-lg rounded-2xl lg:p-8 p-6 text-center hover:cursor-pointer`}
    >
      <p
        className={`flex flex-col lg:flex-row ${file ? "h-20" : "h-24 lg:h-40"} items-center justify-center gap-2 text-lg ${file ? "text-green-600" : "text-gray-600 "}`}>
        {file ? "Your file is successful uploaded" : "Drag & Drop your file here or click to start"}
        {file && <FaCheck/>}
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
        className={`py-4 px-4 lg:px-8 bg-blue-600 ${file && "bg-blue-800"} 
        text-white rounded-full cursor-pointer hover:bg-blue-700 transition`}
      >
        {file ? "Re-choose File" : "Choose File"}
      </label>

    </div>
  );
}
