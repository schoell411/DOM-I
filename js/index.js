const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//src images
let circleImg = document.getElementById('cta-img');
circleImg.setAttribute('src', siteContent['cta']["img-src"])

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']["middle-img-src"]);

//build nav
let topNav = document.querySelectorAll('nav a');

topNav[0].textContent = siteContent['nav']["nav-item-1"];

topNav[1].textContent = siteContent['nav']["nav-item-2"];

topNav[2].textContent = siteContent['nav']["nav-item-3"];

topNav[3].textContent = siteContent['nav']["nav-item-4"];

topNav[4].textContent = siteContent['nav']["nav-item-5"];

topNav[5].textContent = siteContent['nav']["nav-item-6"];

//build cta section
const ctaText = document.querySelector('h1');
siteContent['cta']['h1'] = "DOM<br> Is<br> Awesome!";
ctaText.innerHTML = siteContent['cta']['h1'];

const ctaButton = document.querySelector('button');
ctaButton.innerHTML = siteContent['cta']['button'];

//build main-content section
//  --h4's--
let mainContentH4 = document.querySelectorAll('.main-content h4');

mainContentH4[0].textContent = siteContent['main-content']['features-h4'];

mainContentH4[1].textContent = siteContent['main-content']['about-h4'];

mainContentH4[2].textContent = siteContent['main-content']['services-h4'];

mainContentH4[3].textContent = siteContent['main-content']['product-h4'];

mainContentH4[4].textContent = siteContent['main-content']['vision-h4'];

// --p's--
let mainContentP = document.querySelectorAll('.main-content p');

mainContentP[0].textContent = siteContent['main-content']['features-content'];

mainContentP[1].textContent = siteContent['main-content']['about-content'];

mainContentP[2].textContent = siteContent['main-content']['services-content'];

mainContentP[3].textContent = siteContent['main-content']['product-content'];

mainContentP[4].textContent = siteContent['main-content']['vision-content'];

//build contact section
let contactH4 = document.querySelector('.contact h4');

contactH4.textContent = siteContent['contact']['contact-h4']

let contactP = document.querySelectorAll('.contact p');

contactP[0].textContent = siteContent['contact']['address'];

contactP[1].textContent = siteContent['contact']['phone'];

contactP[2].textContent = siteContent['contact']['email'];

//build footer
let footerP = document.querySelector('footer p');

footerP.textContent = siteContent['footer']['copyright'];

//stretch styling
let pageSections = document.querySelectorAll('section');

pageSections[0].style.backgroundColor = 'blue';

pageSections[1].style.backgroundColor = 'red';

pageSections[2].style.backgroundColor = 'green';

pageSections.forEach(element => {
  element.style.color = 'white';
})

pageSections.forEach(element => {
  element.style.padding = '2rem';
})

midImg.style.width = '100%';