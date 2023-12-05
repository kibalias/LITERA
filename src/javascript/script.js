/*
    This javascript file will fetch the details from the object testimonies,
    loop, and place it within the testimony div from the html.
*/
const placeholder = document.getElementById('testimony-row');
const testimonies = [
    {
        author: 'B.D.', 
        review: 'The stylists are not only talented but also incredibly friendly. They transformed my hair into a work of art. The personalized attention and the modern yet cozy atmosphere make each visit a delightful experience. I\'ve finally found a salon that understands and enhances my unique style.',
        img: 'assets/images/pexels-cottonbro-studio-3993463.jpg'
    }, 
    {
        author: 'E.X.', 
        review: 'The expertise and attention to detail displayed by their stylists are unparalleled. From the chic haircuts to the relaxing spa treatments, every visit leaves me feeling rejuvenated and stylish. Highly recommended!',
        img: 'assets/images/pexels-cottonbro-studio-4004470.jpg'
    },
    {
        author: 'J.V.', 
        review: 'The team exceeded my expectations. They listened to my preferences, suggested fantastic ideas, and delivered flawless results. The ambiance is calming, and the service is top-notch. My confidence has soared since I started coming here!',
        img: 'assets/images/pexels-cottonbro-studio-3997376.jpg'
    },
    {
        author: 'A.J.', 
        review: 'I had such an amazing experience in this salon. My hair feels luscious.',
        img: 'assets/images/pexels-rdne-stock-project-7755461.jpg'
    },
]

window.addEventListener('load', appendToDiv);

function appendToDiv () {
    /*
    Parameter needed: div id where data will be appended
    Method: Loop to the testimonies, get index, and display
    */

    testimonies.forEach((testimony, index) => {
        placeholder.innerHTML +=
        `<div class="testimony col-12 col-md-6">
        <div class="testimony-container">
            <div class="image">
                <img src="`+testimony.img+`" alt="testimony-`+index+`">
            </div>
            <div class="review">
                <p>"`+testimony.review+`"</p>
                <small>- `+testimony.author+`</small>
            </div>
        </div>
    </div>`
    });
}