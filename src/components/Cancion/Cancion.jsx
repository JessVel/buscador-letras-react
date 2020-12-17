import React from "react";

const cancion = ({ letra }) => {
  if (!letra) return null;

  return (
    <>
      <h2>Letra Canción</h2>
      <p className="letra">{letra}</p>
    </>
  );
};

export default cancion;
