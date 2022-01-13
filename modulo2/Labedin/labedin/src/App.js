import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import  CardPequeno  from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fbfh3-3.fna.fbcdn.net/v/t1.6435-9/120159146_1558209774361803_6651081266739141266_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEX1oFYwPyyRlLOe3vMBn6S-VSczrbTm9_5VJzOttOb37yk5DUCuQ1NhF2jN8CvwTFwrWZrjLUjf3zMdM-LloVn&_nc_ohc=NZVAC4nJll0AX8_i6Mo&_nc_ht=scontent.fbfh3-3.fna&oh=00_AT_40hQgg_K7xWywhHC9nIypk2NySpnlKzHTpWpNWVk5Lw&oe=6203E5CF" 
          nome="Fernanda Freitas" 
          descricao="Olá, eu sou a Fernanda. Futura desenvolvedora, adoro assistir animes quando o código empaca."
        />
        
        <ImagemButton 
          imagem="https://www.pngarts.com/files/3/Next-Button-Free-PNG-Image.png" 
          texto="Ver mais"
        />
      </div>
      <div className ="page-section-container">
        <CardPequeno
        imagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrKV24CsDxDz_uAYU_Otu_vmMKpW3aWEwdw&usqp=CAU"
        info="Email:" 
        info2 = " fernandaf.medina@gmail.com"
        />        
      </div>
      <div className ="page-section-container">
        <CardPequeno
        imagem = "https://png.pngtree.com/element_our/md/20180516/md_5afc6f6f0d492.jpg"
        info="Endereço: " 
        info2 =" Avenida Brasil"
        />        
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" 
          nome="Amazon" 
          descricao="Desenvolvi códigos front para a sessão de livraria!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Animes Online" 
          descricao="Estilização do site" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
