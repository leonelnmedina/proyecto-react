const home = ({ nombre, sumar, contador }) => {
  return (
    <div>
      <h1>Hola {nombre}</h1>

      {/* Si necesita argumentos la funcion , se ejecuta asi */}
      {/* <button onClick={()=> sumar(15)}>Sumar</button> */}
      <h2>{contador}</h2>

      <button onClick={sumar}>Sumar</button>
      {/* Si no necesita argumentos la funcion , se ejecuta asi */}
    </div>
  );
};

export default home;
