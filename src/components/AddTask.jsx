import { useState } from 'react';

function AddTask({ onAddTaskSubmit }) {

    const [text, setText] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text" placeholder="Digite o titulo da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={text} onChange={(event) => setText(event.target.value)} />
            <input type="text" placeholder="Digite a descrição da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={description} onChange={(event) => setDescription(event.target.value)} />
            <button onClick={() => { 
                //verificar se o titulo foi preenchido.
                if (!text.trim() || !description.trim()) {
                    setText(""); setDescription("");
                    return alert("Por favor, preencha o titulo e a descrição da tarefa") ;
                }
                onAddTaskSubmit(text, description); setText(""); setDescription(""); }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer">Adicionar</button>
        </div>

    )
}

export default AddTask;