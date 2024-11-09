function msg2(){
    // document.getElementById('mainmsg').innerHTML = "mnfdbvfjkasbfkjs";
    document.getElementById('mainmsg').style.textAlign = "center";
    document.getElementById('mainmsg').style.minHeight = "12vh";
    document.getElementById('mainmsg').style.width = "85vw";
    document.getElementById('mainmsg').style.padding = "10px";


    document.getElementById('storyBox').parentElement.style.display = "flex";
    document.getElementById('storyBox').parentElement.style.justifyContent = "center";


    
    document.getElementById('m2').parentElement.style.width = "95vw";
    document.getElementById('m2').parentElement.style.height = "80vh";
    document.getElementById('m2').parentElement.style.margin = "auto";
    document.getElementById('m1').parentElement.style.padding = "10px";
    document.getElementById('m2').parentElement.style.transition = "width 2s, height 2s, transform 1s";
    document.getElementById('m2').parentElement.parentElement.style.justifyContent = "center";
    document.getElementById('m2').parentElement.parentElement.style.display = "block";
    document.getElementById('m2').parentElement.style.alignSelf = "center";
    document.getElementById('m2').style.display = 'none';
    document.getElementById('m1').style.display = 'none';
    document.getElementById('m1').parentElement.style.display = 'none';

    

    document.getElementById('v1').style.backgroundColor = "red";

    document.getElementById('v1').style.width = "30vw";
    document.getElementById('v1').style.hight = "30vw";
    document.getElementById('v1').style.margin = "30px";
    document.getElementById('v1').style.border = "2px solid white";
    document.getElementById('v1').style.transition = "all 1s ease-in-out";
    
    document.getElementById('v2').style.backgroundColor = "green";
    
    document.getElementById('v2').style.width = "30vw";
    document.getElementById('v2').style.hight = "30vw";
    document.getElementById('v2').style.margin = "30px";
    document.getElementById('v2').style.border = "2px solid white";

    document.getElementById('v2').style.transition = "all 1s ease-in-out";



    document.getElementById('storyBox').style.position = "absolute";
    document.getElementById('storyBox').style.display = "flex";
    document.getElementById('storyBox').style.gap = "15px";
    document.getElementById('mainmsg').style.position = "absolute";
    document.getElementById('storyBox').style.justifyContent = "center";
    document.getElementById('mainmsg').style.margin = "15px";
    document.getElementById('storyBox').style.margin = "0 25px 0 25px";

    document.getElementById('mainmsg').style.display = "none";
    document.getElementById('tip').innerText = "Click Me";
    
    document.getElementById('Boy').addEventListener("click", () => {
        document.getElementById('mainmsg').style.display = "flex";
        document.getElementById('mainmsg').innerText = "hello";
    });
}