import React, { useState, useEffect } from "react";
import Filme from "../filme/Filme";
import './Main.css'
import axios from 'axios'
type FilmesType = {
    id: number,
    titulo:string,
    sinopse:string,
    imagem:string
}

const URL_API = "http://localhost:3000/filmes"; 

export default function Main() {
  const [texto, setTexto] = useState("");
  const [filmes, setFilmes] = useState<FilmesType[]>([]);

  useEffect(() => {
    const buscaMovies = async () => {
      try {
        const resposta = await axios.get<FilmesType[]>(URL_API);
        setFilmes(resposta.data);
      } catch (error) {
        console.log('Erro ao buscar os dados:');
      }
    };

    buscaMovies();
  }, []);

    //A função recebe um atributo chamado e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
                
                <p>Buscar Filme</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'>pesquisa: {texto}</p>
                </div>
            </div>
            <main className="content-main">
                {filmes
                .filter((filme)=>filme.titulo.toLowerCase().includes(texto.toLowerCase()))
                .map((filme:FilmesType)=>
                    <Filme key={filme.id} 
                           titulo={filme.titulo} 
                           sinopse={filme.sinopse} 
                           imagem={filme.imagem}
                    />
                    )
                }
            </main>
        </>
    )
}