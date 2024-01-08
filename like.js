function likeItObserver(){

    console.log("1")
    
    var observer = new MutationObserver(function(mutations){
        console.log("2")
        mutations.forEach(function(mutation){
            console.log("3")
            console.log(mutation.type); // <- It always detects changes
            if (document.getElementById("likeItButton").getElementsByClassName('on')[0]){
                console.log("episode is liked, oberser is shutting down");
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
    }
}

window.addEventListener("load", myloading());