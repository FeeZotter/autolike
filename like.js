likeItButtonReference = document.getElementById("likeItButton")
function likeIt() {
    console.log("event fired");
    if(document.getElementById('likeItButton').getElementsByClassName('on')[0]) {
        console.log('class found'); 
    }else{
        console.log('class not found'); 
    }
}; 


function likeItObserver(){

    
    var observer = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            console.log(mutation.type); // <- It always detects changes
            if (likeItButtonReference.getElementsByClassName('on')[0]){
                console.log("episode is liked, oberser is shutting down");
            }
            else{
                console.log("episode is not liked");
            }
        });    
    });
    
    var config = {characterData: true, subtree: true};
    observer.observe(likeItButtonReference, config);
    //observer.disconnect();
    
    }
    


console.log("like.js started")
console.log(likeItButtonReference)
console.log(likeItButtonReference.children[1].innerText)
console.log(likeItButtonReference.children[0].classList[2])

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

