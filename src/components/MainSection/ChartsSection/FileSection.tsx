import {FileDropzone} from "./FileDropZone.tsx";
import {useState} from "react";
import {UploadedFileInfo} from "./UploadedFileInfo.tsx";
import {ExperimentVisualizer} from "./ExperimentVisualizer.tsx";

export function FileSection() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <section className={"flex flex-col w-full items-center justify-center"}>
      <div className={"flex w-full lg:w-2/3 flex-col md:flex-row justify-center gap-4 md:gap-20"}>
        <FileDropzone setFileParam={setFile}/>

        {file && <UploadedFileInfo file={file}/>}
      </div>

      {file && <ExperimentVisualizer file={file}/>}
    </section>
  )
}