function verificar() {
    var data= new Date()
    var ano =data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert("Verifique os dados e tente novamente")
    }
    else{
        var fsex=document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var gênero =''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if(fsex[0].checked){
            gênero ='Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','bebe.png')
            } else if( idade < 21){
                //jovem
                img.setAttribute('src','homemjovem.png')
            }else if(idade<50){
                //adulto
                img.setAttribute('scr','homem40.webp')
            }else{
                //idoso
                img.setAttribute('src','homem70.png')
            }
        }
        
        else if (fsex[1].checked){
            gênero='Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('scr','bebe.png')
            } else if( idade < 21){
                //jovem
                img.setAttribute('scr','mulherjovem.png')
            }else if(idade<50){
                //adulta
                img.setAttribute('scr','mulher50.png')
            }else{
                //idosa
                img.setAttribute('scr','mulher70.png')
            }
        
        }
        res.style.textAlign = 'center'
        res.innerHTML=`Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
   
}