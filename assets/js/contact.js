const contactLocation = window.location.href;
console.clear();
console.log(contactLocation)

if (contactLocation.includes('#')) {
    const contactForm = document.getElementById('contactUs')
    contactForm.style.display = "none"

    const thankYouMsg = document.getElementsByClassName('thankYouMsg')[0]
    thankYouMsg.style.display = 'inline-block'
}