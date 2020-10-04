
    let element = document.getElementById('social');
    // console.log(element.style.marginTop = "16px")
    let socialNetworks = document.getElementsByClassName('social-networks')[0];
    console.log(window.screen.orientation);
    let btnarea = document.getElementsByClassName('btn-area')[0]


    let hideOrShowSocialNetworks = function(event){
        console.log(window.outerWidth);
        if(window.outerWidth < 850 && window.screen.orientation.type == "portrait-primary"){
            // alert('hi')
            // alert('in');
            socialNetworks.classList.toggle('visible') ? element.style.marginTop = "16px" : element.style.marginTop = "0px";
            element.classList.toggle('dark');
            element.style.zIndex = 100;
            // element.style.marginTop = "15px";
            
            // btnarea.style.marginTop = "15px";
        }else{
            console.log("else")
            socialNetworks.classList.toggle('visible');
            element.classList.toggle('dark');
            
        }

    }

    element.addEventListener('click',hideOrShowSocialNetworks);
    socialNetworks.getElementsByClassName('social-info')[0].children[1].childNodes.forEach(element => {
        element.addEventListener('click',hideOrShowSocialNetworks);
    });
    // document.addEventListener('click',hideOrShowSocialNetworks);
    // element.addEventListener('mouseout',hideOrShowSocialNetworks);
     //,()=>{
        //Using tootgle method
        // socialNetworks.classList.toggle('visible');
        // element.classList.toggle('dark');
        //1st way using conditional operator(ternary) ECMAScript 2015
        // socialNetworks.classList.contains('visible')?
        // socialNetworks.classList.remove('visible'): 
        // socialNetworks.classList.add('visible');

        //Common conditional
        // if(!socialNetworks.classList.contains("visible")){
        //     socialNetworks.classList.add("visible")
        // }else{
        //     socialNetworks.classList.remove("visible")
        // }
        // if(socialNetworks.classList.contains("not-visible")){
        //     socialNetworks.classList.remove("not-visible")
        //     socialNetworks.classList.add("visible")
        //     console.log("in")
        // }else{
        //     socialNetworks.classList.remove("visible");
        //     socialNetworks.classList.add("not-visible")
        // }
    // })
