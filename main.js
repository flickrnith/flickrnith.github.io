// for header
// for changing color
var hb_btn = document.querySelectorAll('.hb_list_name');
for(let i = 0;i<hb_btn.length;i++){
    hb_btn[i].addEventListener('mouseover',function(){
        hb_btn[i].style.background = 'red';    
    });
    hb_btn[i].addEventListener('mouseout',function(){
        hb_btn[i].style.background = 'darkred';
    });
}

// for changing content of c1-right content
let c1rh_article = document.querySelector('.c1rh-article');
let c1rb_article = document.querySelector('.c1rb-article');
let c1rg_imgboxes = document.querySelector('.c1rg-imgboxes');
let c1rn_boxes = document.querySelector('.c1rn-boxes');

hb_btn[0].addEventListener('click',display_home);
hb_btn[1].addEventListener('click',display_blog);
hb_btn[2].addEventListener('click',display_gallery);
hb_btn[3].addEventListener('click',display_news);

function display_home(){    
    c1rh_article.style.display = 'block';
    c1rb_article.style.display = 'none';
    c1rn_boxes.style.display = 'none';
    c1rg_imgboxes.style.display = 'none';
}
function display_blog(){    
    c1rb_article.style.display = 'block';
    c1rh_article.style.display = 'none';
    c1rn_boxes.style.display = 'none';
    c1rg_imgboxes.style.display = 'none';
}
function display_gallery(){    
    c1rb_article.style.display = 'none';
    c1rh_article.style.display = 'none';
    c1rn_boxes.style.display = 'none';
    c1rg_imgboxes.style.display = 'block';
}
function display_news(){    
    c1rb_article.style.display = 'none';
    c1rh_article.style.display = 'none';
    c1rn_boxes.style.display = 'block';
    c1rg_imgboxes.style.display = 'none';
}

// for c1-left
let c1ll_mainlist = document.querySelectorAll('.c1ll-main-list');
let c1ll_list = document.querySelectorAll('.c1ll-list');

// for changing color c1-left buttons
for(let i = 0;i<c1ll_mainlist.length;i++){
    c1ll_mainlist[i].addEventListener('mouseover',function(){
        c1ll_mainlist[i].style.background = 'darkred';
    });
    c1ll_mainlist[i].addEventListener('mouseout',function(){
        c1ll_mainlist[i].style.background = 'red';
    });
}

// for displaying content of c1-left buttons
c1ll_mainlist[0].addEventListener('click',display_deparment);
c1ll_mainlist[0].addEventListener('dblclick',remove_deparment);
c1ll_mainlist[1].addEventListener('click',display_clubs);
c1ll_mainlist[1].addEventListener('dblclick',remove_clubs);
c1ll_mainlist[2].addEventListener('click',display_notes);
c1ll_mainlist[2].addEventListener('dblclick',remove_notes);
c1ll_mainlist[3].addEventListener('click',display_games);
c1ll_mainlist[3].addEventListener('dblclick',remove_games);
c1ll_mainlist[4].addEventListener('click',display_movies);
c1ll_mainlist[4].addEventListener('dblclick',remove_movies);
c1ll_mainlist[5].addEventListener('click',display_books);
c1ll_mainlist[5].addEventListener('dblclick',remove_books);

function display_deparment(){
    for(let i = 0;i<4;i++){
        c1ll_list[i].style.display = 'block';
    }
}
function remove_deparment(){
    for(let i = 0;i<4;i++){
        c1ll_list[i].style.display = 'none';
    }
}
function display_clubs(){
    for(let i = 4;i<5;i++){
        c1ll_list[i].style.display = 'block';
    }
}
function remove_clubs(){
    for(let i = 4;i<5;i++){
        c1ll_list[i].style.display = 'none';
    }
}