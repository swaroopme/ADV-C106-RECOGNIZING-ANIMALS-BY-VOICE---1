function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio : true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mXjP2e-Ye/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_Number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()* 255) + 1;
        random_number_b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("result_label").innerHTML = ' I can hear -' + results [0].label ;
        document.getElementById("result_confidence").innerHTML = 'Accuaracy - ' + (results[0].confidence * 100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb(" + random_Number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_Number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');

        if(results[0].label == "barking") {
            img.src = 'http://gifimage.net/wp-content/uploads/2017/09/animated-dog-gif.gif';
            img1.src = 'http://www.wikihow.com/images/d/d7/Draw-a-Cute-Cartoon-Cat-Step-8-Version-2.jpg';
            img2.src = 'https://static.vecteezy.com/system/resources/previews/000/383/732/original/vector-illustration-drawing-style-of-lion.jpg';
        } else if(results[0].label == "meowing") {
            img.src = 'https://tse3.mm.bing.net/th?id=OIP.X0z9KAU2jj4KV1QInW2kAQHaKD&pid=Api&P=0';
            img1.src = 'https://clipground.com/images/animated-gif-cat-clipart-5.gif';
            img2.src = 'https://static.vecteezy.com/system/resources/previews/000/383/732/original/vector-illustration-drawing-style-of-lion.jpg';
        } else (results[0].label == "roaring") ;
            img.src = 'https://tse3.mm.bing.net/th?id=OIP.X0z9KAU2jj4KV1QInW2kAQHaKD&pid=Api&P=0';
            img1.src = 'http://www.wikihow.com/images/d/d7/Draw-a-Cute-Cartoon-Cat-Step-8-Version-2.jpg';
            img2.src = 'https://www.animaker.com/blog/wp-content/uploads/2018/05/Animaker-lion.gif';
        }
    }

