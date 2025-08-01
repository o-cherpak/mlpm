import {FileDropzone} from "./FileDropZone.tsx";
import {useState} from "react";
import {UploadedFileInfo} from "./UploadedFileInfo.tsx";

export function FileSection() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <section className={"flex justify-center gap-20"}>
      <FileDropzone setFileParam={setFile}/>

      {file && <UploadedFileInfo file={file}/>}
    </section>
  )
}