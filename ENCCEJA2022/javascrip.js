var pontos =0
var erro =0

function grip(){

   

let resposta=document.getElementById("resposta").innerHTML="ACERTOU"
let Checkbox=document.getElementById("b2");


   
        if(Checkbox.checked==true){

            console.log('o cliente marcou')


        }else{
            console.log('o cliente não marcou marcou')
        }
    

        if(resposta=="ACERTOU"){

            document.getElementById("resposta").classList.add('certo')

            pontos+=1

            erro+=0

        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')

       
        
        
console.log(Checkbox)


        }


}

function outros(){
   
    let resposta=document.getElementById("resposta").innerHTML="ERROU"

    if(resposta=="ERROU")
    document.getElementById("resposta").classList.add('errado')

            pontos+=0

            erro+=1

    var perdas = pontos
        

    alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERRO')

    document.querySelector('.placar').innerHTML=pontos

    
}



function remove(){

    document.getElementById("resposta").classList.remove('errado')
    document.getElementById("resposta").classList.remove('certo')


}









function arena(){

    

let resposta=document.getElementById("resposta1").innerHTML="ACERTOU"
let Checkbox=document.getElementById("c4");


   
        if(Checkbox.checked==true){

            console.log('o cliente marcou')


        }else{
            console.log('o cliente não marcou marcou')
        }
    

        if(resposta=="ACERTOU"){

            document.getElementById("resposta1").classList.add('certo')

            pontos+=1

            erro+=0

        

            alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
        console.log(pontos);
        document.querySelector('.placar').innerHTML=pontos

console.log(Checkbox)


        }
       
}

function outross(){
  
    let resposta=document.getElementById("resposta1").innerHTML="ERROU"

    if(resposta=="ERROU")
    document.getElementById("resposta1").classList.add('errado')

            pontos+=0

            erro+=1

        

            alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')

    console.log(pontos);
    document.querySelector('.pontoss').innerHTML=pontos
}




function virus(){

    

    let resposta=document.getElementById("resposta2").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("d3");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta2").classList.add('certo')
    
                pontos+=1

                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
    
    console.log(Checkbox)
    
    
            }
        
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function outrosss(){
      
        let resposta=document.getElementById("resposta2").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta2").classList.add('errado')
    
            pontos+=0

            erro+=1
    
            
    
            alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);



function biologico(){

    

    let resposta=document.getElementById("resposta4").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("E2");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta4").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            
    
    console.log(Checkbox)
    
    
            }
            
         console.log(pontos);
    }
    
    function erross(){
      
        let resposta=document.getElementById("resposta4").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta4").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);






function estetico(){

    

    let resposta=document.getElementById("resposta5").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("F1");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta5").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erros(){
      
        let resposta=document.getElementById("resposta5").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta5").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);






function bob(){

    

    let resposta=document.getElementById("resposta6").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("G3");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta6").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function errosss(){
      
        let resposta=document.getElementById("resposta6").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta6").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);




function a7(){

    

    let resposta=document.getElementById("resposta7").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("G3");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta7").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function errossss(){
      
        let resposta=document.getElementById("resposta7").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta7").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);



function a8(){

    

    let resposta=document.getElementById("resposta8").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("G3");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta8").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro8(){
      
        let resposta=document.getElementById("resposta8").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta8").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);




function a9(){

    

    let resposta=document.getElementById("resposta9").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("i1");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta9").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro9(){
      
        let resposta=document.getElementById("resposta9").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta9").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);








function a10(){

    

    let resposta=document.getElementById("resposta10").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("j1");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta10").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro10(){
      
        let resposta=document.getElementById("resposta10").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta10").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);



function a11(){

    

    let resposta=document.getElementById("resposta11").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("n4");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta11").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro11(){
      
        let resposta=document.getElementById("resposta11").innerHTML="ERROU"
       
    
        if(resposta=="ERROU")
        document.getElementById("resposta11").classList.add('errado')
        
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);



function a12(){

    

    let resposta=document.getElementById("resposta12").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("o2");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta12").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro12(){
      
        let resposta=document.getElementById("resposta12").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta12").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);




function a13(){

    

    let resposta=document.getElementById("resposta13").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("p2");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta13").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro13(){
      
        let resposta=document.getElementById("resposta13").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta13").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);


function a14(){

    

    let resposta=document.getElementById("resposta14").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("q4");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta14").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro14(){
      
        let resposta=document.getElementById("resposta14").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta14").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);





function a15(){

    

    let resposta=document.getElementById("resposta15").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("x4");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta15").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro15(){
      
        let resposta=document.getElementById("resposta15").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta15").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);












function a16(){

    

    let resposta=document.getElementById("resposta16").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("v1");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta16").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro16(){
      
        let resposta=document.getElementById("resposta16").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta16").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);








function a17(){

    

    let resposta=document.getElementById("resposta17").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("w1");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta17").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro17(){
      
        let resposta=document.getElementById("resposta17").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta17").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);






function a18(){

    

    let resposta=document.getElementById("resposta18").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("r4");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta18").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro18(){
      
        let resposta=document.getElementById("resposta18").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta18").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);



function a19(){

    

    let resposta=document.getElementById("resposta19").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("rn2");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta19").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro19(){
      
        let resposta=document.getElementById("resposta19").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta19").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);




function a20(){

    

    let resposta=document.getElementById("resposta20").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("rx2");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta20").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro20(){
      
        let resposta=document.getElementById("resposta20").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta20").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);




function a21(){

    

    let resposta=document.getElementById("resposta21").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("bt4");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta21").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro21(){
      
        let resposta=document.getElementById("resposta21").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta21").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);








function a22(){

    

    let resposta=document.getElementById("resposta22").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("btr3");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta22").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro22(){
      
        let resposta=document.getElementById("resposta22").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta22").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);





function a23(){

    

    let resposta=document.getElementById("resposta23").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("bz3");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta23").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro23(){
      
        let resposta=document.getElementById("resposta23").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta23").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);



function a24(){

    

    let resposta=document.getElementById("resposta24").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("ww4");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta24").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro24(){
      
        let resposta=document.getElementById("resposta24").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta24").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);



function a25(){

    

    let resposta=document.getElementById("resposta25").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("ww2k");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta25").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro25(){
      
        let resposta=document.getElementById("resposta25").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta25").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);



function a26(){

    

    let resposta=document.getElementById("resposta26").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("ww3kk");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta26").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro26(){
      
        let resposta=document.getElementById("resposta26").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta26").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);



function a27(){

    

    let resposta=document.getElementById("resposta27").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("ww3kk");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta27").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro27(){
      
        let resposta=document.getElementById("resposta27").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta27").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);




function a28(){

    

    let resposta=document.getElementById("resposta28").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("kk");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta28").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro28(){
      
        let resposta=document.getElementById("resposta28").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta28").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);




function a29(){

    

    let resposta=document.getElementById("resposta29").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("xxx");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta29").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro29(){
      
        let resposta=document.getElementById("resposta29").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta29").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos
    }
    





console.log(pontos);





function a30(){

    

    let resposta=document.getElementById("resposta30").innerHTML="ACERTOU"
    let Checkbox=document.getElementById("xxx");
    
    
       
            if(Checkbox.checked==true){
    
                console.log('o cliente marcou')
    
    
            }else{
                console.log('o cliente não marcou marcou')
            }
        
    
            if(resposta=="ACERTOU"){
    
                document.getElementById("resposta30").classList.add('certo')
    
                pontos+=1
                erro+=0
    
            
    
                alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
            document.querySelector('.pontoss').innerHTML=pontos
            
    
    console.log(Checkbox)
    
    
            }
         
         console.log(pontos);
         document.querySelector('.pontoss').innerHTML=pontos
    }
    
    function erro30(){
      
        let resposta=document.getElementById("resposta30").innerHTML="ERROU"
    
        if(resposta=="ERROU")
        document.getElementById("resposta30").classList.add('errado')
    
        pontos+=0

        erro+=1
    
            
    
        alert('VOCÊ ESTÁ COM :'+ pontos+': ACERTO'+' E :'+erro+': ERROS')
    
        console.log(pontos);
        document.querySelector('.pontoss').innerHTML=pontos


        document.getElementById("resultado").innerHTML=' ACERTO  ' + pontos+' '+' x  '+erro+' ERROS'


        
    }
    





console.log(pontos);









