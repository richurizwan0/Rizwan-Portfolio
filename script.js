/* typed.js animation script*/
var typed = new Typed("#animated-text",{
    strings: ["Frontend Developer", "React Developer", "C++ Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    startDelay:1000,
    backDelay: 200,
    loop: true,
  })



/*on scroll activity*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if( top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  /*remove navbar when clicked navbar link*/
  let navbar = document.querySelector('.navbar');
  
};

// Email.js

function sendMail(){
  var params = {
    from_name : document.getElementById('from_name').value,
    email : document.getElementById('email').value,
    mobile_no : document.getElementById('mobile_no').value,
    message : document.getElementById('message').value
  };
  emailjs.send('service_r13s09l', 'template_7lhrpdp', params).then(function(res){
    alert("Sucess");
  })
}