/*
    This javascript file will fetch the details from the object data,
    loop, and place it within the testimony div from the html.
*/
    import {testimonies, services} from "./data.js";

const testimony_placeholder = document.getElementById('testimony-row');
const services_placeholder = document.getElementById('services-row');
window.addEventListener('load', appendToDiv);

function appendToDiv () {
    /*
    Prerequisite: div where data will be appended
    Method functionality: Loop to the testimonies, get index, and display
    */
    if(testimonies.length <= 0 && services.length <= 0) {
        // check if testimonies is empty, if true, display error
        alert("Cannot retrieve or display data.");
        return;
    }
    testimonies.forEach((testimony, index) => {
        testimony_placeholder.innerHTML +=
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

    /*
    Prerequisite: div where data will be appended
    Method functionality: Loop to the services, and display
    */
   services.forEach(service => {
    services_placeholder.innerHTML +=
    `<div class="services-item col-6 col-md-3 ">
        <div class="service-icon">
            `+ service.icon +`
        </div>
        <p class="service-name">`+service.name+`</p>   
    </div>`
   })
}