

// Declare and define the global variables

const sections =Array.from( document.querySelectorAll('section'));   
const navBarList = document.getElementById('navbar__list');             


//Function to build the navbar

function createNavBar(){
        sections.forEach(section => {                                 //( For each loop ) to loop in the array
        const menu= document.createElement('li');                 
         menu.innerHTML =` <a class = 'menu__link' data-nav ="${section.getAttribute('id')}">${section.getAttribute('data-nav')}</a>`; //content of navbar
         navBarList.appendChild(menu);     // Build menu    
        });      
}; //End the function declaration



// Set sections as active and add highlght to navbar

    document.addEventListener('scroll', () => {
        menuElemnts=document.getElementsByClassName('menu__link');
        for (const section of sections) {
            if (section.getBoundingClientRect().top <= 150 && section.getBoundingClientRect().top >= -400) {
                section.classList.add('your-active-class');               //add active class to section
                for (let element of menuElemnts) {
                    if (section.getAttribute('id' )== element.getAttribute('data-nav')){
                        element.classList.add('active__menulist');        //add active menu to menu list (highlight)
                    }
                }
            }else{
                section.classList.remove('your-active-class');           //remove active class to section
                for (let element of menuElemnts) {
                    if (section.getAttribute('id') == element.getAttribute('data-nav')){
                        element.classList.remove('active__menulist');        //remove active menu to menu list (highlight)
                    }
                }
            }   
        }
});


// function to scroll smoothly 

function scollSmooth(){
navBarList.addEventListener("click", (elem) => {     
    elem.preventDefault();
    if (elem.target.dataset.nav) {
        document.getElementById(`${elem.target.dataset.nav}`).scrollIntoView({
         behavior : "smooth"
        });
    }
});
}; //End the function declaration

createNavBar();                 //call the function to create navbar
scollSmooth();                  //call function to scroll smoothly


