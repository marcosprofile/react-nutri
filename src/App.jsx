import React, { useEffect, useState } from "react";
import './style.css'

// API url: https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        })
    }

    loadApi();
  }, [])

  return (
    <div className="container" style={{fontFamily: 'Open sans'}}>
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">
              {item.subtitulo}
            </p>

            <div className="categorias">
              Categoria:
              <span className="categoria">{item.categoria}</span>
            </div>

            <button className="botao">Acessar</button>        
          </article>
        )
      })}
    </div>
  );
}

export default App;
