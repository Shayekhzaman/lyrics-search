let arrayArtist=[];
let arrayTitle=[];
// search Button
document.getElementById("searchButton").addEventListener("click",function (){    

    const songList=document.getElementById("songList");
    songList.style.display="block";

   const songName= document.getElementById("textBox").value;

//    song List From api
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

    
        
        // song title and album by
        document.getElementsByTagName("h3")[i].innerHTML=title;
        document.getElementsByClassName("singerName")[i].innerHTML=artist;

        // image Link
        const imageLink=element.album.cover;
        document
            .getElementsByClassName("image")[i]
            .setAttribute('src', `${imageLink}`);

            // from getLyrics Button
            getLyricsBtn= function(n){
                const songList=document.getElementById("songList");
                songList.style.display="none";

                const songLyrics=document.getElementById("songLyrics");
                songLyrics.style.display="block";

                const artist=arrayArtist[n];
                const title=arrayTitle[n];

                // song Lyrics
                fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
                .then(res => res.json())
                .then(data => {
                    document.getElementById("singleLyricsTitle").innerText=`${title} ${"--Song by:"} ${artist}`;
                    if(data.error){
                        alert("Sorry,Here is no Lyrics! Try another one")
                    }
                    else{
                        document.getElementById("lyrics").innerText=data.lyrics;
                        console.log(data);
                    }
                    
                    
                })
                
              
            }
       
    }
   

   })
  
})

removePage=  function (){
    const songLyrics=document.getElementById("songLyrics");
    songLyrics.style.display="none";

    const songList=document.getElementById("songList");
    songList.style.display="block";
    // console.log("click");
}
