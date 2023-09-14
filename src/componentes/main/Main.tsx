import { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeType{
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string

}
export default function Main() {
    //let textodigitado = 'Barbie'
    const [texto,setTexto]=useState("Barbie")
    const filmes =[
        
    <main className="content-main">
        {filmes
                     .filter((filme) => {
                     const textoSemEspacos = texto.replace(/\s/g, ''); // Remove espaços em branco do texto
                     const tituloSemEspacos = filme.titulo.replace(/\s/g, ''); // Remove espaços em branco do título do filme
                     const sinopseSemEspacos = filme.sinopse.replace(/\s/g, ''); // Remove espaços em branco da sinopse do filme
                     const tudo = tituloSemEspacos.toLowerCase().includes(textoSemEspacos.toLowerCase());
                     const tudo2 = sinopseSemEspacos.toLowerCase().includes(textoSemEspacos.toLowerCase());
                     const tudo3 = tudo || tudo2; // Use '||' (ou) para permitir que qualquer uma das condições seja verdadeira
                     return tudo3;
                     })
                     .map((filme) => (
                     <Filme key={filme.id} titulo={filme.titulo} sinopse={filme.sinopse} imagem={filme.imagem} />
                     ))}
</main>
        
        /*{
            id:1,
            titulo:'Barbie',
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },
        {
            id:2,
            titulo:'Barbie',
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },
        {
            id:3,
            titulo:'Barbie',
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        }*/
    ]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>Busque um filme</p>
                <input type="text" className='botao_pesquisa' placeholder='Pesquise um Filme' onChange={TrataTexto}/>
                {
                    (texto)?<p>Resultados para:{texto}</p>:""
                }
                
            </div>
            <main className="content-main">
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                    Barbieland por ser uma boneca de aparência 
                    menos do que perfeita, Barbie parte para o 
                    mundo humano em busca da verdadeira felicidade.'
                    imagem='/KEN.png'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />

            </main>
        </>
    )
}