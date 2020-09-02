let toggleShare = false;
const data = {
    cover: "./images/drawers.jpg",
    title: "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
    text: "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
    author: "Michelle Appleton",
    authorAvatar: "./images/avatar-michelle.jpg",
    date: "28 Jun 2020"
}
document.getElementById("articleMediaImg-1").setAttribute("src", data.cover);
document.getElementById("articleBodyTit-1").innerHTML = data.title;
document.getElementById("articleBodyTex-1" ).innerHTML = data.text;
document.getElementById("articleFooterTextAuth-1").innerHTML = data.author;
document.getElementById("articleFooterTextDat-1").innerHTML = data.date;
document.getElementById("articleFooter-1").setAttribute("src", data.authorAvatar);

function toggleShareHandler (shareId,iconsId){
    var icons = document.querySelector('#'+iconsId);
    var toggler = document.querySelector('#'+shareId);
    if(toggleShare){
        icons.classList.toggle('articleFooterIconsHide');
        setTimeout(()=>{
            icons.classList.toggle('hide');
            toggler.classList.toggle('articleFooterShareActive');
        },500);
    }else{
        icons.classList.toggle('hide');
        setTimeout(()=>{
            icons.classList.toggle('articleFooterIconsHide');
            toggler.classList.toggle('articleFooterShareActive');
        },100);
    }
    toggleShare = ! toggleShare;
}