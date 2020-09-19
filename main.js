$(document).ready(function() {
    // start search hide and show
    $('form a').click(function(){
        $('.form-control').toggleClass('show')
     }) 
      // end search hide and show
    //   start navbar active class
   $(' .navbar-nav li ').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
   })    
    //   end navbar active class  
})
//start remove placeholder from filds
let search_inp=document.querySelector('input[type=search]');
    search_inp.onfocus=function(){
        search_inp.placeholder=''
    }
    search_inp.onblur=function(){
        search_inp.placeholder=' search'
    }
    //end remove placeholder from filds
    //start categoray slid
    let slides=Array.from(document.querySelectorAll('.images .slides')),
        slideCount=slides.length,
        currentIndex=1;
        // console.log(slideCount);
    let btns=Array.from(document.querySelectorAll('.categoray .btn'));
    for (i = 0; i < btns.length; i++) {
        btns[i].onclick=function(){
            currentIndex=parseInt(this.getAttribute('data-index'))
            check()
        }
    }
        // next prve buttons
    let nextBtn=document.querySelector('.next'),
        prevBtn=document.querySelector('.prev');
        // next function
      nextBtn.onclick=function(e){
          e.preventDefault();
         if(this.classList.contains('disable')){
             return false
         }
         else {
            currentIndex++;
         }
          check()
        //   console.log('next');
      }
    //   prev function
      prevBtn.onclick=function(e){
        e.preventDefault();
        if(this.classList.contains('disable')){
            return false
        }
        else {
           currentIndex--;
        }   
        check()
        // console.log('prev');
    }
//    check function 
    function check(){
        removeActiveClass()
            slides[currentIndex -1].classList.add('active_slid');
            btns[currentIndex -1].classList.add('active_btn')
            if(currentIndex == 1){
                prevBtn.classList.add('disable')
            }
            else {
                prevBtn.classList.remove('disable')
            }
            if(currentIndex == slideCount){
                nextBtn.classList.add('disable')
            }
            else {
                nextBtn.classList.remove('disable')
            }
    }
    check()
    // function remove all active class
    function removeActiveClass(){
        slides.forEach(function(img){
            img.classList.remove('active_slid');
        })
        btns.forEach(function(btn){
            btn.classList.remove('active_btn');
        })
    }
    // end category slid
    // start comment slid
    let commentSlide = Array.from(document.querySelectorAll('.coment')),
        libtns= Array.from(document.querySelectorAll('.comments ul li')),
        currentindex = 1;
        for (i = 0; i < libtns.length; i++) {
            libtns[i].onclick=function(){
                currentindex=parseInt(this.getAttribute('data-li'))
                COmslide()
            }
        }
    let nextLi=document.querySelector('.next-li'),
        prevLi=document.querySelector('.prev-li'),
        next_icon=document.querySelector('.next-li i'),
        prev_icon=document.querySelector('.prev-li i')
        nextLi.onclick=function(e){
            e.preventDefault();
            if(this.classList.contains('disable')){
                return false
            }
            else {
               currentindex++;
            }  
            COmslide()
            // console.log('next')
        }
        prevLi.onclick=function(e){
            e.preventDefault();
            if(this.classList.contains('disable')){
                return false
            }
            else {
               currentindex--;
            }  
            COmslide()
            // console.log('prev')
        }
        function COmslide() {
            removeActiveClassComment()
            commentSlide[currentindex -1].classList.add('active-coment');
            libtns[currentindex -1].classList.add('active-li');
            if(currentindex == 1){
                prevLi.classList.add('disable');
                next_icon.classList.add('activ-btns');
                prev_icon.classList.remove('activ-btns');
            }
            else {
                prevLi.classList.remove('disable');
                next_icon.classList.add('activ-btns');
                prev_icon.classList.add('activ-btns');
            }
            if(currentindex == slideCount){
                nextLi.classList.add('disable');
                next_icon.classList.remove('activ-btns');
                prev_icon.classList.add('activ-btns');
            }
            else {
                nextLi.classList.remove('disable')
                next_icon.classList.add('activ-btns');
                prev_icon.classList.remove('activ-btns');
            }
        }
        COmslide();
        // function remove all active class
    function removeActiveClassComment(){
        commentSlide.forEach(function(com){
            com.classList.remove('active-coment');
        })
        libtns.forEach(function(lis){
            lis.classList.remove('active-li');
        })
    }
    // end comment slid