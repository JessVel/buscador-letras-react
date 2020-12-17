import React, { useState } from "react";

const Form = ({ setSearchApi }) => {
  const [search, setSearch] = useState({
    artista: "",
    cancion: "",
  });

  const [error, setError] = useState(false);
  const { artista, cancion } = search;

  const handleSearch = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (artista.trim() === "" || cancion.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setSearchApi(search);
  };

  return (
    <div className="bg-info">
      <div className="container">
        {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatiorios</p> : null}
        <div className="row w-100">
          <form className="col card text-white bg-transparent mb-5 pt-5 pb-2" onSubmit={handleSubmit}>
            <fieldset>
              <legend className="text-center">Buscador de letras de canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input type="text" className="form-control" name="artista" placeholder="Nombre de le artista" onChange={handleSearch} value={artista} />
                  </div>
                </div>
                <div className="col-md-6">
                  <label>Canción</label>
                  <input type="text" className="form-control" name="cancion" placeholder="Nombre de la Canción" onChange={handleSearch} value={cancion} />
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right mt-2">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
