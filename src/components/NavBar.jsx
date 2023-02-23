import { useRef, useState } from "react";
import {
  AiFillEye as EyeIcon,
  AiFillQuestionCircle as QuestionIcon,
  AiFillSetting as SettingsIcon,
} from "react-icons/ai";
import { BsGithub as GitHubIcon } from "react-icons/bs";
import { FaFileCsv as CsvFileIcon } from "react-icons/fa";

export default function NavBar() {
  const [selectedCsv, setSelectedCsv] = useState(null);
  const filePickerRef = useRef(null);

  function getCsv(e) {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedCsv(readerEvent.target.result);
    };

    postCsv();
  }

  function postCsv() {
    var data = new FormData()
    data.append("file", selectedCsv)

    fetch(`http://localhost:8080/news/csv`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: data,
      form: "file=@file",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error in postCsv()\n", error);
      });
  }

  return (
    <nav
      className="
      nav group fixed flex flex-col justify-between items-center
      left-0 z-50
      h-screen w-16 hover:w-60
      bg-black/30 backdrop-blur-sm text-white
      hover:delay-500
      transition-all duration-300 py-6 px-2
      "
    >
      <div
        className="flex flex-col justify-center items-center 
        w-full space-y-4"
      >
        <button onClick={() => filePickerRef.current.click()}>
          <CsvFileIcon className="nav-icon" size={100} />
          <p className="nav-p">Add CSV file</p>
        </button>
        <input
          ref={filePickerRef}
          type="file"
          hidden
          accept=".csv"
          onChange={getCsv}
        />

        <button>
          <EyeIcon className="nav-icon" size={100} />
          <p className="nav-p">See news</p>
        </button>
        <button>
          <SettingsIcon className="nav-icon" size={100} />
          <p className="nav-p">Settings</p>
        </button>
        <button>
          <QuestionIcon className="nav-icon" size={100} />
          <p className="nav-p">About</p>
        </button>
      </div>

      <button>
        <GitHubIcon className="nav-icon" size={100} />
        <p className="nav-p">Source code</p>
      </button>
    </nav>
  );
}
