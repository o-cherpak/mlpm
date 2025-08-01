import {FileDropzone} from "./FileDropZone.tsx";
import {useState} from "react";
import {UploadedFileInfo} from "./UploadedFileInfo.tsx";
import {FileReader} from "./FileReader.tsx";

export function FileSection() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <section className={"flex flex-col "}>
      <div className={"flex justify-center gap-20"}>
        <FileDropzone setFileParam={setFile}/>

        {file && <UploadedFileInfo file={file}/>}
      </div>

      {file && <FileReader file={file}/>}


    </section>
  )
}