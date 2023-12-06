function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LlVHs7kdx/model.json', modelReady);
}

function modelReady(){
    classifier.classify( gotResults);
}

function gotResults(error,results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);   
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML= 'Escucho: '+ results[0].label;
        document.getElementById("result_confidence").innerHTML='Precisión: '+(results[0].confidence*100).toFixed(2)+ "%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+"," +random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+"," +random_number_g+","+random_number_r+")";

        img = document.getElementById('Perro')
        img1 = document.getElementById('Gato')
        img2 = document.getElementById('Rana')
        img3 = document.getElementById('Grillo')

        if (results[0].label == "Perro"){
            img.src= 'Perro.gif';
            img1.src= 'Gato.jpeg';
            img2.src= 'Rana.jpeg';
            img3.src= 'Grillo.jpeg';  
         } else if (results[0].label == "Gato"){
            img.src= 'Perro.jpg';
            img1.src= 'cute-gatito.gif';
            img2.src= 'Rana.jpeg';
            img3.src= 'Grillo.jpeg'; 
        }else if (results[0].label == "Rana"){
            img.src= 'Perro.jpg';
            img1.src= 'Gato.jpeg';
            img2.src= 'Sapo.gif';
            img3.src= 'Grillo.jpeg';   
            }else{
            img.src= 'Perro.jpg';
            img1.src= 'Gato.jpeg';
            img2.src= 'Rana.jpeg';
            img3.src= 'grillo.gif';  
            }
                
            }
            

        
    }
