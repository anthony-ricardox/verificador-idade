function verifica(){    
    var ano = document.getElementById('ano1')
    var agora = new Date()
    var anoatual = agora.getFullYear()
    var res = document.getElementById('res')
    var sexo = document.getElementsByName('radsex')
    var genero = ''
    var idade = Number(anoatual - ano.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(ano.value.length == 0 || ano.value > anoatual || ano.value.length < 4){   
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else if(sexo[0].checked){  
       genero = 'Homem'
       if(idade >= 0 && idade <=10 ){    
          //criança
          img.setAttribute('src', 'imagens/c-m.png')
       }else if(idade <= 21){    
        //joveem
         img.setAttribute('src', 'imagens/jovem-m.png')
        }else if( idade <= 50){
            //adulto
             img.setAttribute('src', 'imagens/adulto-m.png')
        }else{  
            //idoso
             img.setAttribute('src', 'imagens/idoso.png')
        }


    }else if(sexo[1].checked){   
        genero = 'Mulher'
         if(idade >= 0 && idade <=10 ){    
          //criança
          img.setAttribute('src', 'imagens/c-f.png')
       }else if(idade <= 21){    
        //joveem
         img.setAttribute('src', 'imagens/jovem-f.png')
        }else if( idade <= 50){
            //adulto
             img.setAttribute('src', 'imagens/adulto-f.png')
        }else{  
            //idoso
             img.setAttribute('src', 'imagens/idosa.png')
        }
    }
   
   res.innerHTML = `Detectamos ${genero} de ${idade} anos`
   res.appendChild(img)
    
}