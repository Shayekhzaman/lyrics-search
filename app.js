let arrayArtist=[];
let arrayTitle=[];

document.getElementById("searchButton").addEventListener("click",function(){

    const songList=document.getElementById("songList");
    songList.style.display="block";

   const songName= document.getElementById("textBox").value;

   fetch(`https://api.lyrics.ovh/suggest/${songName}`)
   .then(res => res.json())
   .then(data => {

    let length=document.getElementsByTagName("h3").length;

    for (let i = 0; i < length; i++) {
        const element = data.data[i];
        const artist=element.artist.name;
        const title=element.title;

        arrayArtist.push(artist);
        arrayTitle.push(title);

        const imageLink=element.album.cover;
        
        document.getElementsByTagName("h3")[i].innerHTML=title;
        document.getElementsByClassName("singerName")[i].innerHTML=artist;


        document
            .getElementsByClassName("image")[i]
            .setAttribute('src', `${imageLink}`);
       
    }

    // lyrics display

    document.getElementById("one").addEventListener("click",function(){
        // console.log(value);
    //     console.log(arrayTitle[1]);
    // console.log(arrayArtist[1]);
    // console.log(arrayArtist[2]);
    // console.log(arrayArtist[3]);
    const artist=arrayArtist[0];
    const title=arrayTitle[0];
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("lyrics").innerText=data;
        const songLyrics=document.getElementById("songLyrics");
        songList.style.display="block";
        console.log(data);
    })

    })
    

    
   })

 
   console.log(songName);
  
})