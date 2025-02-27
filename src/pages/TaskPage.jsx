import { ChevronLeftIcon, } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function taskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const text = searchParams.get("text");
  const description = searchParams.get("description");
  function onBackClick() {
    navigate(-1);

  }


  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button onClick={onBackClick} className="absolute left-0 top-0 bottom-0 cursor-pointer">
            <ChevronLeftIcon />
          </button>
          <h1 className=" text-slate-100 font-bold text-center text-3xl">Detalhes da Tarefa</h1>
        </div>
        <div className="p-6 bg-slate-400 rounded-md shadow">
          <h2 className="text-xl text-white font-bold">{text}</h2>
          <p className="text-white">{description}</p>

        </div>

      </div>
    </div>

  );
}

export default taskPage;