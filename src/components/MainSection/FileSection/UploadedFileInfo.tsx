type UploadedFileInfoProps = {
  file: File;
};

export function UploadedFileInfo({ file }: Readonly<UploadedFileInfoProps>) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-64 border border-gray-200">
      <h3 className="text-center text-lg font-semibold text-black mb-4">File Information</h3>

      <div className="space-y-2 text-gray-700">
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
    </div>
  );
}
