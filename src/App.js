import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Cancion from "./components/Cancion/Cancion";
import Info from "./components/Info/Info";
import axios from "axios";

function App() {
  const [searchApi, setSearchApi] = useState({});
  const [letra, setLetra] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (Object.keys(searchApi).length === 0) return; //chequear si un objeto esta vacio

    //consulta a la api
    const consultApi = async () => {
      const { artista, cancion } = searchApi;

      const urlLetra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const urlInfo = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, info] = await Promise.all([axios(urlLetra), axios(urlInfo).catch(error => console.log(error))]);

      setLetra(letra.data.lyrics);
      setInfo(info.data.artists[0]);
    };
    consultApi();
  }, [searchApi]);

  return (
    <>
      <Form setSearchApi={setSearchApi} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
