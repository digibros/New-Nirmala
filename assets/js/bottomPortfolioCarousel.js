const bottomPortfolioCarousel = document.getElementById('bottomPortfolioCarousel')


const portfolioLogo = [
    '1.jpeg', '10.jpeg', '11.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg'
]

//console.log(portfolioLogo)

for (i of portfolioLogo) {
    const div0 = document.createElement('div')
    //div0.className = 'iconss'

    const img1 = document.createElement('img')
    img1.src=`/prodPics/portfolioLogos/${i}`
    img1.style.marginLeft="10em"
    div0.appendChild(img1);

    bottomPortfolioCarousel.appendChild(div0)
}
