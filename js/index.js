
    let element = document.getElementById('social');
    let share = document.getElementsByClassName('social-networks')[0];


    let mouseoverandout = function(event){
        console.log(event);
        share.classList.toggle('visible');
        element.classList.toggle('dark');
    }
    element.addEventListener('mouseover',mouseoverandout);
    element.addEventListener('mouseout',mouseoverandout);
     //,()=>{
        //Using tootgle method
        // share.classList.toggle('visible');
        // element.classList.toggle('dark');
        //1st way using conditional operator(ternary) ECMAScript 2015
        // share.classList.contains('visible')?
        // share.classList.remove('visible'): 
        // share.classList.add('visible');

        //Common conditional
        // if(!share.classList.contains("visible")){
        //     share.classList.add("visible")
        // }else{
        //     share.classList.remove("visible")
        // }
        // if(share.classList.contains("not-visible")){
        //     share.classList.remove("not-visible")
        //     share.classList.add("visible")
        //     console.log("in")
        // }else{
        //     share.classList.remove("visible");
        //     share.classList.add("not-visible")
        // }
    // })
