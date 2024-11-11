function msg1(){
    // Declaration
    const f1 = document.getElementById('f1');
    const Coins = document.getElementById("Coins");
    const Guide1 = document.getElementById('Guide1');

    document.getElementById('Boy1').style.display = "none";
    document.getElementById('Boy2').style.display = "none";
    document.getElementById('Boy3').style.display = "none";
    document.getElementById('Boy4').style.display = "none";

    
    
    
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
        document.getElementById('Boy1').style.display = "block";
        
        document.getElementById('Guide').parentElement.style.display = "flex";

        // document.getElementsByClassNamee('guide').style.left = "55%";
        // document.getElementsByClassNamee('guide').style.bottom = "0";
        // document.getElementsByClassNamee('guide').style.position = "absolute"; 
    
        // document.getElementsByClassNamee('guide').parentElement.style.display = "block"; 
        // document.getElementsByClassNamee('guide').style.display = "flex";
        // document.getElementsByClassNamee('guide').style.position = "absolute";
        // document..style.width = "300px";

        
        document.getElementById('Guide').style.width = "20vw";
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
            document.getElementById('tip1').style.bottom = "62%";
            document.getElementById('tip1').style.left = "63%";
            
            
            Guide.addEventListener("click", () => {
                document.getElementById('tip1').innerHTML = "If you want I help you then you have to give me gold Coins..."
                document.getElementById('tip').innerHTML = "What can I do...?"
                document.getElementById('Boy1').style.display = "none";
                document.getElementById('Boy2').style.display = "block";


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
                f1.style.right = "60%";
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
                f2.style.right = "60%";
                f2.style.content = " ";
                f2.style.position = "absolute";
                f2.style.backgroundColor= "rgb(255, 190, 152)";
                
                
                f1.addEventListener("click", () => {


                    
                    Coins.style.display = "flex";
                    Coins.style.position = "absolute";
                    Coins.style.width = "70px";
                    Coins.style.bottom = "20%";
                    Coins.style.left = "52%";
                    f2.style.display= "none";
                    
                    document.getElementById('tip').innerHTML = "Okay... Let's Go";
                    
                    document.getElementById('Boy2').addEventListener("click", () =>{
                        
                        document.getElementById('Boy2').style.display = "none";
                        document.getElementById('Boy3').style.display = "block";
                        document.getElementById('Boy4').style.display = "none";
                        
                        
            
                        Guide1.style.left = "60%";
                        Guide1.style.bottom = "0";
                        Guide1.style.position = "absolute"; 
                        Guide1.style.width = "20vw";
                        Guide1.style.display = "flex";                        
                        Guide1.parentElement.style.display = "block"; 

                        document.getElementById('Guide').style.display = "none";
                        Guide1.style.display = "block";          

                        
                        
                        let id = null; 
                        let posL = 52;
                        clearInterval(id);
                        id = setInterval(frame, 50);
                        function frame() {
                            if (posL == 61) {
                                clearInterval(id);
                                Coins.style.display = "none";
                                document.getElementById('tip1').innerHTML = "We have to go this side...";
                                f1.style.display = "none";

                                


                                goToTemple();
                            } else {
                                posL++; 
                                Coins.style.left = posL + "%"; 

                            }
                        }
                    });
                });
                
                f2.addEventListener("click", () => {
                    
                    document.getElementById('tip').innerHTML = "No, I will go Alone";
                    f1.style.display= "none";
                    
                    document.getElementById('Boy2').addEventListener("click", () =>{
                    
                        document.getElementById('Boy2').style.display = "none";
                        document.getElementById('Boy3').style.display = "block";
                        
                        f2.style.display = "none";
                        
                        let id = null;
                        const Guide = document.getElementById("Guide");   
                        let posL = 70;
                        let posB = 0;
                        clearInterval(id);
                        id = setInterval(frame, 50);
                        function frame() {
                            if (posL == 84 || posB == 20) {
                                clearInterval(id);
                                Guide.style.display = "none";
                            } else {
                                posL++; 
                                posB++; 
                                Guide.style.bottom = posB + "%"; 
                                Guide.style.left = posL + "%"; 
                                Guide.style.transition= "width -2s, height -2s, transform -2s";
                            }
                        }

                    });

                });
                
            });
            
       
        });
        
    });

    function goToTemple(){
        
        let id = null;  
        let posLG = 60;
        let posLB = 46;
        let posBG = 0;
        let posBB = 0;
        let WB = 150;
        let WG = 300;
        clearInterval(id);
        id = setInterval(frame, 50);
        function frame() {
            if(WG == 150 || WB == 140){

                if (posLG == 50 || posBG == 10 || posLB == 49 || posBB == 10) {
                    clearInterval(id);
                    // Guide1.style.display = "none";
                    // 
                    
                    
                    atTemple();
                } else {
                    posLG--; 
                    posLB++; 
                    posBG++; 
                    posBB++; 
                    Guide1.style.bottom = posBG + "%"; 
                    Guide1.style.left = posLG + "%"; 
                    
                    document.getElementById('Boy3').style.bottom = posBB + "%";
                    document.getElementById('Boy3').style.left = posLB + "%";
            

                }
            }else{
                WG--;
                WB--;
                Guide1.style.width = WG + "px";
                document.getElementById('Boy3').style.width = WB + "px";
                
            }
        }
    }
    
    function atTemple(){
        
        document.getElementById('mainmsg').innerText = "next"; 
        document.getElementById('b1').style.backgroundImage = "url('templeGreen.jpg')";
        
        document.getElementById('tip').innerHTML = "What Now?";
        document.getElementById('tip1').innerHTML = "Now It's your way, I have to go...";

        document.getElementById('Boy3').style.display = "none";
        document.getElementById('Boy4').style.display = "block";

        document.getElementById('Boy4').style.width = "10vw"
        document.getElementById('Boy4').style.left = "46%"

        Guide1.addEventListener("click", () => {

            
            document.getElementById('tip').innerHTML = "Okey..."
            
            let id = null;
            // const Guide = document.getElementById("Guide");   
            let posL = 60;
            clearInterval(id);
            id = setInterval(frame, 50);
            function frame() {
                if (posL == 80) {
                    clearInterval(id);
                    Guide1.style.display = "none";
                } else {
                    posL++; 
                    Guide1.style.left = posL + "%"; 
                    Guide1.style.transition= "width -2s, height -2s, transform -2s";
                }
            }
        });
            



    }
    
}

