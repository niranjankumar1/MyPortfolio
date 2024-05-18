var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};
function closemenu(){
    sidemenu.style.right = "-200px";
};
function openmenu(){
    sidemenu.style.right = "0";
};
let typed = new Typed('.auto-input',{
    strings : ['Front-End Developer!','UI/UX Designer!','Web Designer!','Software Developer!'],
    typespeed:100,
    backspeed:100,
    backDelay:2000,
    loop:true,
});

