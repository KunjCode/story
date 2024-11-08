function msg1(){
    
    document.getElementById('mainmsg').style.textAlign = "center";
    document.getElementById('mainmsg').style.minHeight = "12vh";
    document.getElementById('mainmsg').style.width = "85vw";
    document.getElementById('mainmsg').style.padding = "10px";

    document.getElementById('storyBox').parentElement.style.display = "flex";
    document.getElementById('storyBox').parentElement.style.justifyContent = "center";

    
    document.getElementById('storyBox').style.position = "absolute";
    document.getElementById('storyBox').style.display = "flex";
    document.getElementById('storyBox').style.gap = "15px";
    document.getElementById('mainmsg').style.position = "absolute";
    document.getElementById('storyBox').style.justifyContent = "center";
    document.getElementById('mainmsg').style.margin = "15px";
    document.getElementById('storyBox').style.margin = "0 25px 0 25px";

    document.getElementById('m1').parentElement.style.width = "95vw";
    document.getElementById('m1').parentElement.style.height = "80vh";
    document.getElementById('m1').parentElement.style.margin = "auto";
    document.getElementById('m1').parentElement.style.padding = "10px";
    document.getElementById('m1').parentElement.style.transition = "width 2s, height 2s, transform 1s";
    document.getElementById('m1').parentElement.parentElement.style.justifyContent = "center";
    document.getElementById('m1').parentElement.style.alignSelf = "center";
    document.getElementById('m1').style.display = 'none';
    document.getElementById('m2').style.display = 'none';
    document.getElementById('m2').parentElement.style.display = 'none';
    

    
    // document.getElementById('s1').style.backgroundColor = "red"; 
    
    // document.getElementById('s1').style.width = "30vw"; 
    // document.getElementById('s1').style.hight = "30vw";
    // document.getElementById('s1').style.margin = "30px";
    // document.getElementById('s1').style.border = "2px solid white";
    // document.getElementById('s1').style.transition = "all 1s ease-in-out";
    
    // document.getElementById('s2').style.backgroundColor = "green";
    
    // document.getElementById('s2').style.width = "30vw";
    // document.getElementById('s2').style.hight = "30vw";
    // document.getElementById('s2').style.margin = "30px";
    // document.getElementById('s2').style.border = "2px solid white";
    // document.getElementById('s2').style.transition = "all 1s ease-in-out";
    
    
    
    
    document.getElementById('Guide').style.display = "none";
    
    
    document.getElementById('mainmsg').style.display = "none";
    document.getElementById('tip').innerText = "Click Me";
    
    
    document.getElementById('Boy').addEventListener("click", () => {
        document.getElementById('mainmsg').style.display = "flex";
        document.getElementById('mainmsg').innerText = "wow";

        document.getElementById('Guide').parentElement.style.display = "flex";
        // document.getElementById('Guide').parentElement.style.width = "100%";
        // document.getElementById('Guide').parentElement.style.hight = "10vh";
        
        document.getElementById('Guide').style.width = "300px";
        document.getElementById('Guide').style.display = "flex";
        // document.getElementById('Guide').style.left = "40%";
        document.getElementById('Guide').style.left = "80%";
        document.getElementById('Guide').style.bottom = "10%";
        document.getElementById('Guide').style.position = "absolute";

        document.getElementById('Boy').addEventListener("click", () =>{
            var elem = document.getElementById('Guide');
            var poe = 80;
            var anim = setInterval(animate, 2000);

            function animate(){
                for(poe = 80; poe == 54; poe--){
                    elem.style.top = poe + "%";
                    elem.style.left = poe + "%";
                }
                // if(poe == 52){
                //     clearInterval(anim);
                // }else{
                //     poe--;
                //     
                // }
            }

        });

                
        // document.getElementById('Boy').addEventListener("click", () => {



        // });
        
    });
    
}

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