function makeRed(){
    document.body.style.background= "red";
    }

    function makeGreen(){
        document.body.style.background= "green";
    }

    const blueButton = document.getElementById("make-bule-button");
        blueButton.onclick=makeBlue;
        function makeBlue(){
            document.body.style.background="blue";
        }

        // handle event useing anonymous functon  
        const tomatoButoon = document.getElementById("makr-tomato-button");
        tomatoButoon.onclick = function(){
            document.body.style.background="tomato"
        }

        // handle by using add eventlisonar 
        const DeepSkyBlueButoon = document.getElementById("deepSkyBlue-buton");
        DeepSkyBlueButoon.addEventListener('click', mackeDeepSkyBlue);

        function mackeDeepSkyBlue(){
            document.body.style.background= 'deepSkyBlue';
        }
        // addEventListener 
        const HotPinkButton = document.getElementById("mack-HotPink");
        HotPinkButton.addEventListener("click", function makePink(){
            document.body.style.background= "HotPink"
        })
        // direct shortcute 
        document.getElementById('Light-Blue').addEventListener('click', function(){
            document.body.style.background="LightBlue"
        });
