const convertButton =  document.querySelector(".convertButton")
const videoLink = document.querySelector(".TextBar")

 


convertButton.addEventListener("click", async  ()=>{
    let  videoID = videoLink.value.slice(32,45)
 
    if(videoID.length>11){
        videoID=videoID.slice(0,11)
    }
    
    Test(videoID)

})


 async function Test(videoID){
    console.log(videoID)
    const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoID}`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5b4e5f01admsh83ebe9b63a57ae0p1583f5jsnce9edbc68236',
            'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
    };
    
    const response = await fetch(url,options);
    const result = await response.json();
    setTimeout( ()=>{
        window.open(result.link)

    })
    console.log(result)
    

}
