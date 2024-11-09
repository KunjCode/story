function msg1(){
    // Declaration
    const f1 = document.getElementById('f1');
    const Coins = document.getElementById("Coins");

    
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
                document.getElementById('tip1').innerHTML = "If you want I help you then you have to give me gold Coins..."
                document.getElementById('tip').innerHTML = "What can I do...?"
                document.getElementById('Boy1').style.display = "none";
                document.getElementById('Boy2').style.display = "absolute";


                //Selection between accept or reject
                f1.style.display = "flex";
                f1.style.justifyContent = "center";
                f1.style.width = "240px";
                f1.style.height = "35px";
                f1.innerHTML = "Accept";
                f1.style.textAlign = "center";
                f1.style.fontWeight = "bold";
                f1.style.padding = "7px 2px 7px 2px";
                f1.style.borderRadius = "6px";
                f1.style.filter = "drop-shadow(0px 10px 8px rgba(175, 79, 0, 0.562))";
                f1.style.top = "50%";
                f1.style.left = "33%";
                f1.style.content = " ";
                f1.style.position = "absolute";
                f1.style.backgroundColor= "rgb(255, 190, 152)";
                
                
                f2.style.display = "flex"
                f2.style.justifyContent = "center";
                f2.style.width = "240px";
                f2.style.height = "35px";
                f2.innerHTML = "Reject";
                f2.style.textAlign = "center";
                f2.style.fontWeight = "bold";
                f2.style.padding = "7px 2px 7px 2px";
                f2.style.borderRadius = "6px";
                f2.style.filter = "drop-shadow(0px 10px 8px rgba(175, 79, 0, 0.562))";
                f2.style.top = "60%";
                f2.style.left = "33%";
                f2.style.content = " ";
                f2.style.position = "absolute";
                f2.style.backgroundColor= "rgb(255, 190, 152)";

                
                f1.addEventListener("click", () => {
                    
                    Coins.style.display = "flex";
                    Coins.style.width = "25px";
                    Coins.style.bottom = "0";
                    

                    
                });
                
            });
            
       
        });
        
    });
    
}

