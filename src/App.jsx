import React from 'react'
import './App.css'
import Todo from './Todo'

function App() {
  
  // {name, id, descripción, completado: false, eliminado: false}
  // crear una función dinámica con párametro, key "completado" intercalado, últimos 2 obj tengan el key "eliminado" en true
  // otra functión con 3 parámetros (id, key, value)

  let array = []





























  const dinamicArray = (repeticiones) => {
    for (let i = 1; i <= repeticiones; i++) {
       array.push({
        name: `test ${i}`,
        id: i,   //crypto.randomUUID(),
        descripcion: `descripcion ${i}`,
        completado: false,
        eliminado: false
      })
    }
    return array
  }

  const intercalar = (arr) => {
    return arr.map((obj, index) => {
      obj.completado = index % 2 !== 0
      return obj
      // if (index % 2 !== 0) {
      //   return {
      //     ...obj,
      //     completado: true
      //   }
      // } else {
      //   return obj
      // }
    })
  }

  const cambiarEliminado = (arr, comparacion) => {
    comparacion = comparacion || 8
    return arr.map((obj, index) => {
      const resultado = index >= comparacion
      obj.eliminado = resultado
      return obj
      // if (index === arr.length - 5) {
      //   return {
      //     ...obj,
      //     eliminado: true
      //   }
      // } else {
      //   return obj
      // }
    })
  }

const arrayPrueba = [1,2,3,4,5,6,7,8,9,10,11,12,13]

function pruebaFactor(arr, x) {
  return arr.map((num, index) => {
    return index === arr.length - x
  })
}

// console.log(pruebaFactor(arrayPrueba, 6))

// const numero = array.length - 5
// console.log(numero)

// function magicBooleanArray (array, x = 2) {
//  return array.map((num, index) => {
//   return index >= array.length - x
 
// })
// }
// const resultado = magicBooleanArray(array, 9)

// console.log(resultado)


  const cambiarKeyValue = (arr, id, key, value) => {
    return arr.map((obj) => {
      if (obj.id === id) {
        obj[key] = value
      }
      return obj
    })
  }   

  const dynamic = dinamicArray(10)
  // console.log(dynamic)

  const intercalado = intercalar(dynamic)
  // console.log(intercalado)

  const eliminado = cambiarEliminado(intercalado, 5)
  // console.log(eliminado)
  
  const cambiar = cambiarKeyValue(eliminado, 2 , 'name', 'PRUEBA')
  // console.log(cambiar)


  return (
    <>
      <Todo/>
    </>
  )
}

export default App
