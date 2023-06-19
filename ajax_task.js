
var btn = document.getElementById('enterbutton');
btn.addEventListener('click', function movieD(){
    const xhr = new XMLHttpRequest();
    let Search = document.querySelector('.search').value;
    const url = "https://www.omdbapi.com/?t="+ Search +"&apikey=b07e71d4";
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            var jsonData = JSON.parse(data);
            console.log(jsonData);
            movieDetails(jsonData);
        }
    };
    xhr.open('GET', url,true);
    xhr.send();
});

var movieDetails = (jsonData) =>{
    var toTitle = jsonData.Title;
    var toReleasedD = jsonData.Released;
    var totype = jsonData.Genre;
    try {
        var toRate = jsonData.Ratings[0].Value;
    }
    catch {
        var toRate = "Not Defined";
    }
    var toLang = jsonData.Language;
    var toDire = jsonData.Director;
    var toWriter = jsonData.Writer;
    var toAct = jsonData.Actors;
    DOM(jsonData,toTitle,toReleasedD,totype,toLang,toRate,toDire,toWriter,toAct);
};

var DOM = (jsonData,toTitle,toReleasedD,totype,toLang,toRate,toDire,toWriter,toAct)=> {
    document.getElementById("mTitle").innerHTML="Movie Name - "+toTitle+" ("+jsonData.Year+")";
    document.getElementById("mType").innerHTML="Movie Type - "+totype;
    document.getElementById("mRate").innerHTML="Movie Rateing - "+toRate;
    document.getElementById("mRelsdD").innerHTML="Released Date - "+toReleasedD;
    document.getElementById("mLang").innerHTML="Language - "+toLang;
    document.getElementById("mDire").innerHTML="Director - "+toDire;
    document.getElementById("mWriter").innerHTML="Writer - "+toWriter;
    document.getElementById("mAct").innerHTML="Actors - "+toAct;
              
};
