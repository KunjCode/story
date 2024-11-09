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
    
    
    
    
    document.getElementById('Guide').style.display = "none";
    
    
    document.getElementById('mainmsg').style.display = "none";
    document.getElementById('tip').innerText = "Click Me";
    
    
    document.getElementById('Boy').addEventListener("click", () => {
        document.getElementById('mainmsg').style.display = "flex";
        document.getElementById('mainmsg').innerText = "wow";
        document.getElementById('tip1').style.display = "none";
        document.getElementById('Boy').style.display = "none";
        document.getElementById('Boy1').style.display = "absolute";
        
        document.getElementById('Guide').parentElement.style.display = "flex";

        
        document.getElementById('Guide').style.width = "300px";
        document.getElementById('Guide').style.display = "flex";
        
        document.getElementById('Guide').style.left = "80%";
        document.getElementById('Guide').style.bottom = "20%";
        document.getElementById('Guide').style.position = "absolute";
        
        document.getElementById('tip').innerHTML = "Hello";
        document.getElementById('Boy1').addEventListener("click", () => {
            
            document.getElementById('tip').innerHTML = "Who are you?";
            
            document.getElementById('Guide').style.left = "55%";
            document.getElementById('Guide').style.bottom = "0";
            document.getElementById('Guide').style.position = "absolute"; 
            
            document.getElementById('Guide').parentElement.style.display = "block"; 
            

            let id = null;
            const Guide = document.getElementById("Guide");   
            let posL = 80;
            let posB = 20;
            clearInterval(id);
            id = setInterval(frame, 50);
            function frame() {
                if (posL == 0 || posB == 0) {
                    clearInterval(id);
                } else {
                    posL--; 
                    posB--; 
                    Guide.style.bottom = posB + "%"; 
                    Guide.style.left = posL + "%"; 
                }
            }
            
            document.getElementById('tip1').innerHTML = "My name is bruham."
            document.getElementById('tip1').style.display = "block";
            document.getElementById('tip1').style.bottom = "48%";
            document.getElementById('tip1').style.left = "63%";
            
            
            Guide.addEventListener("click", () => {
                document.getElementById('tip1').innerHTML = "We have to go at this side."
                document.getElementById('tip').innerHTML = "Ohh ok"
                document.getElementById('Boy1').style.display = "none";
                document.getElementById('Boy2').style.display = "absolute";
            });
            
       
        });
        
    });
    
}

