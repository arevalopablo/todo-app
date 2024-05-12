const firstLetter = (string) => {
    return [...string].map((letra, index) => {
      if (index === 0) {
        return letra.toUpperCase();
      } else {
        return letra;
      }
    });
  };

  export {firstLetter}