import React from "react";
import Button from "./shared/Button";

const TareaContainer = (props) => {
  const {
    text,
    tareas,
    array,
    cambiarCondicion,
    papelera,
    eliminarDefinitivo,
    firstLetter,
    btnTxt,
  } = props;

  return (
    <div className="div">
      <h2>{text}</h2>
      <div className="pendientes-ctn">
        {tareas.map((data, index) => (
          <div key={index} className="pendientes-tareas-ctn">
            <h3 key={index}>{firstLetter(data.nombre)}</h3>
            <div>
              <Button
                className={"custom-btn realizada-btn"}
                btnTxt={btnTxt}
                margin={"0 20px"}
                onClick={() =>
                  cambiarCondicion(data.id, array[0][0], array[0][1])
                }
              />
              {!papelera && (
                <Button
                  className={"custom-btn eliminar-btn"}
                  btnTxt={"Eliminar"}
                  onClick={() =>
                    cambiarCondicion(data.id, array[1][0], array[1][1])
                  }
                />
              )}
              {papelera && (
                <Button
                  className={"custom-btn eliminar-btn"}
                  btnTxt={"Eliminar"}
                  onClick={() => eliminarDefinitivo(data.id)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TareaContainer;
