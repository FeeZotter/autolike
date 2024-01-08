myP = document.createElement("p")
myP.innerText = "Episode got liked"
myP.style = "text-align: center; font-size: 2em;";

myDiv = document.createElement("div")
myDiv.style = "position: fixed; top: 6em; background: rgba(6, 191, 0, 0.5); display:none; width: 15%; z-index: 100; notification; right:2em;"
myDiv.id = "notification";
myDiv.appendChild(myP);

document.body.appendChild(myDiv)


function likeDetected()
{
    document.getElementById("notification").style.setProperty("display", "block");
    setTimeout(function () {
        document.getElementById("notification").style.setProperty("display", "none");
    }, 3000);
}

function likeItObserver(){
    var observer = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            console.log(mutation.type); // <- It always detects changes
            if (document.getElementById("likeItButton").getElementsByClassName('on')[0]){
                console.log("episode is liked, observer is shutting down");
                likeDetected();
                observer.disconnect();
            }
            else{
                console.log("episode is not liked, button will be clicked");
                document.getElementById("likeItButton").click();
            }
        });    
    });
    
    var config = {characterData: true, childList: true, subtree: true};
    observer.observe(document.getElementById("likeItButton"), config);
    console.log(observer);
    
    }
    


console.log("like.js started")

function myloading() {
    if(document.getElementById('likeItButton').children[0].classList[2] != "on")
    {
        console.log("no like");
        if(document.getElementById('likeItButton').children[1].innerText != "Like") 
        { 
            console.log("like it"); document.getElementById('likeItButton').click(); 
        }
        else
        {
            console.log("eventlistener startes")
            likeItObserver();
        }
    }
    else 
    {
        console.log("already liked")
        likeDetected();
    }
}

window.addEventListener("load", myloading());