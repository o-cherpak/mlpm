import {FaFileCsv} from "react-icons/fa";

type UploadedFileInfoProps = {
  file: File;
};

export function UploadedFileInfo({file}: Readonly<UploadedFileInfoProps>) {
  return (
    <div className="bg-white w-full shadow-lg rounded-xl p-6 lg:w-86 border border-gray-200">
      <h3 className="text-center text-lg font-semibold text-black mb-4">File Information</h3>

      <div className={"flex gap-4 lg:w-96"}>
        <div className="space-y-2 w-full lg:w-1/2 text-gray-700">
          <p>
            <span className="font-medium">Name:</span> {file.name}
          </p>

          <p>
            <span className="font-medium">Size:</span> {(file.size / (1024 * 1024)).toFixed(2)} MB
          </p>

          <p>
            <span className="font-medium">Type:</span> {file.type}
          </p>
        </div>

        <div className={"flex items-center justify-center"}>
          <FaFileCsv size={"80px"}/>
        </div>
      </div>

    </div>
  );
}
