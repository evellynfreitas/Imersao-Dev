var imagensSeries = [
    "https://meups.com.br/wp-content/uploads/2022/11/Serie-de-The-Last-of-Us-3.jpg",
    "https://conteudo.imguol.com.br/c/entretenimento/bc/2022/06/22/poster-oficial-de-house-of-the-dragon-1655915054477_v2_3x4.jpg",
    "https://poltronanerd.com.br/wp-content/uploads/2017/05/poster.got_.7.jpg",
    "https://conteudo.imguol.com.br/c/entretenimento/58/2022/05/12/novo-poster-da-quarta-temporada-de-stranger-things-1652368177430_v2_3x4.jpg",
    "https://i.pinimg.com/originals/f2/65/13/f26513878c2b10829ffbcc34c614ceb7.jpg",
    "https://pbs.twimg.com/media/E1mwpYGX0AkBx20.jpg:large",
    "https://i.pinimg.com/originals/5b/c9/8b/5bc98b55e11373ebbb611db3618a5449.jpg",
    "https://pbs.twimg.com/media/Fed-2DGVEAAiqKH?format=jpg&name=small"];
    carregarSeries();
    
    var imagensFilmes = [
      "https://veja.abril.com.br/wp-content/uploads/2016/06/harry-potter-cartaz-pedra-filosofal-01-original1.jpeg?quality=70&strip=info&w=395",
    "https://www.cafecomfilme.com.br/media/k2/items/cache/71601b6fd7fc74a9f4eea8e6c1b43d35_XL.jpg?t=20171127_143013", "https://br.web.img2.acsta.net/medias/nmedia/18/92/91/47/20224867.jpg", "https://br.web.img3.acsta.net/medias/nmedia/18/90/59/44/20103781.jpg","https://www.themoviedb.org/t/p/w500/cvpsmNWc8nyePJMbyMc9X5lLN6L.jpg", "https://m.media-amazon.com/images/I/81mbLAxqn9L.jpg","https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b6893fad74db29f663c5b61a5e8c69b15fec69a54f712a49c5835e42a53e3d1d._RI_V_TTW_.jpg"];
    carregarFilmes();
    
    function carregarSeries(){
      document.getElementById("listaDeSeries").innerHTML = "";
      for(var i=0; i<imagensSeries.length; i++)
        document.getElementById("listaDeSeries").innerHTML += `<li> <img src=${imagensSeries[i]} > </li>`;
    }
    
    function carregarFilmes(){
      document.getElementById("listaDeFilmes").innerHTML = "";
      for(var i=0; i<imagensFilmes.length; i++)
        document.getElementById("listaDeFilmes").innerHTML += `<li> <img src=${imagensFilmes[i]} > </li>`;
    
    }
    
    function adicionarMidia(){
      if(!document.getElementById("serie").checked && !document.getElementById("filme").checked)
        alert("Escolha o tipo de mídia que deseja inserir no seu catálogo!");
      
      else{
        var linkImagem = document.getElementById("linkImagem").value;
        
        if(document.getElementById("serie").checked){
          imagensSeries.push(linkImagem);
          carregarSeries();
        }
        else if(document.getElementById("filme").checked){
          imagensFilmes.push(linkImagem);
          carregarFilmes();
        }
      
      }
    }
    