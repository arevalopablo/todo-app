import React, { useState } from 'react'

const useForm = () => {
    const [tarea, setTarea] = useState({
        nombre: "",
        completo: false,
        eliminado: false,
      });

      const handleChange = (e) => {
        const { value } = e.target;
        setTarea({
          ...tarea,
          nombre: value,
        });
      };
    
  return {
    tarea,
    setTarea,
    handleChange
  }
}

export default useForm