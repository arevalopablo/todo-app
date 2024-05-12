import React from "react";
import Navbar from "./components/navbar/Navbar";
import Input from "./components/shared/Input";
import Button from "./components/shared/Button";
import TareaContainer from "./components/TareaContainer";
import useTodo from "./hooks/useTodo";

const Todo = () => {
  const {tarea, arrayFlama, guardarTarea, handleChange} = useTodo()
  
  return (
    <div className="container">
      <Navbar />
      <main>
        <div className="div">
          <h2>Ingrese sus tareas</h2>
          <div className="agregar-ctn">
            <Input
              labelTxt={"Tarea"}
              className={"input-ctn"}
              value={tarea.nombre}
              onChange={handleChange}
            />
            <Button
              btnTxt={"Agregar"}
              className={"button"}
              onClick={() => guardarTarea()}
            />
          </div>
        </div>

        {arrayFlama.map((obj, index) => (
          <TareaContainer key={index} {...obj}/>
        ))}
      </main>
    </div>
  );
};

export default Todo;
