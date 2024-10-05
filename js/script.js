$(document).ready(function(){
    /* Show And Hide Scroll Up */
    window.onscroll = function(){scrollUp()}
    function scrollUp(){
        if(document.documentElement.scrollTop > 300){
            $(".scroll-up").css("display","block");
        } else{
            $(".scroll-up").css("display","none");
        }
    };
    /* Go Up With ScrollUp Icon */
    $(".scroll-up").click(function(){
        document.documentElement.scrollTop = 0;
    });

    /* Add And Remove Class ACtive */
    let links = document.querySelectorAll(".header .links ul li");

    $(links).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    /* Dark Mood */
    const root_theme = document.querySelector(':root');

    $(".header .switch-bgc .moon").click(function(){
        $(this).hide();
        $(".header .switch-bgc .sun").css("display","inline-block");
        $("body").addClass("dark-mood").removeClass("light-mood");
        root_theme.style.setProperty('--bg-section', '#252525'); 
        root_theme.style.setProperty('--main-color', 'hsl( 35, 72%, 44% )'); 
        root_theme.style.setProperty('--head-color', '#fff'); 
        root_theme.style.setProperty('--paragraph-color', '#9f9f9f'); 
        root_theme.style.setProperty('--second-color-p', '#9f9f9f'); 
        root_theme.style.setProperty('--white-color', '#000'); 
        root_theme.style.setProperty('--black-color', '#fff'); 
        root_theme.style.setProperty('--hover-color', '#f29c24');
        root_theme.style.setProperty('--bg-section', '#282828');
    });

    $(".header .switch-bgc .sun").click(function(){
        $(this).hide();
        $(".header .switch-bgc .moon").css("display","inline-block");
        $("body").removeClass("dark-mood").addClass("light-mood");
        root_theme.style.setProperty('--bg-section', '#252525'); 
        root_theme.style.setProperty('--main-color', 'hsl(0, 84%, 44%)'); 
        root_theme.style.setProperty('--head-color', '#37373f'); 
        root_theme.style.setProperty('--paragraph-color', '#4f4f5a'); 
        root_theme.style.setProperty('--second-color-p', '#7f7f90'); 
        root_theme.style.setProperty('--white-color', '#fff'); 
        root_theme.style.setProperty('--black-color', '#000'); 
        root_theme.style.setProperty('--hover-color', '#f00');
        root_theme.style.setProperty('--bg-section', '#eee');
    });

    /* Show Menu Bar Header */
    $(".header .menu-bar").click(function(){
        $(".header .links ul").css("right", 0);
    });

    /* Hide Menu Bar Header */
    $(".header .links ul li a").click(function(){
        $(".header .links ul").css("right", "-500px");
    });

    $(".header .links ul i").click(function(){
        $(".header .links ul").css("right", "-500px");
    });
    
});