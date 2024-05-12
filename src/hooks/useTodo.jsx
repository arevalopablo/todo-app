import { useState } from "react";
import useForm from "./useForm";
import { firstLetter } from "../helper";

const useTodo = () => {
  const { tarea, setTarea, handleChange } = useForm();
  const [tareas, setTareas] = useState([]);

  const cambiarCondicion = (id, key, value) => {
    setTareas(
      tareas.map((tarea) => {
        if (id === tarea.id) {
          tarea[key] = value;
        }
        return tarea;
      })
    );
  };

  const eliminarDefinitivo = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const guardarTarea = () => {
    const nuevoObj = {
      ...tarea,
      id: tareas.length + 1,
    };
    if (!!tarea.nombre.trim()) {
      setTareas([...tareas, nuevoObj]);
      setTarea({
        nombre: "",
        completo: false,
        eliminado: false,
      });
    }
  };

  const arrayFlama = [
    {
      text: "Tareas pendientes",
      tareas: tareas.filter((tarea) => !tarea.completo && !tarea.eliminado),
      array: [
        ["completo", true],
        ["eliminado", true],
      ],
      cambiarCondicion: cambiarCondicion,
      firstLetter: firstLetter,
      btnTxt: "Realizada",
    },
    {
      text: "Tareas realizadas",
      tareas: tareas.filter((tarea) => tarea.completo && !tarea.eliminado),
      array: [
        ["completo", false],
        ["eliminado", true],
      ],
      cambiarCondicion: cambiarCondicion,
      firstLetter: firstLetter,
      btnTxt: "No realizada",
    },
    {
      text: "Papelera",
      tareas: tareas.filter((tarea) => tarea.eliminado),
      array: [["eliminado", false]],
      cambiarCondicion: cambiarCondicion,
      firstLetter: firstLetter,
      btnTxt: "Recuperar",
      papelera: true,
      eliminarDefinitivo: eliminarDefinitivo,
    },
  ];

  return {
    tarea,
    arrayFlama,
    handleChange,
    guardarTarea,
  };
};

export default useTodo;
