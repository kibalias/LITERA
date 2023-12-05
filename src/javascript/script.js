/*
    This javascript file will fetch the details from the object data,
    loop, and place it within the testimony div from the html.
*/
import {testimonies, services, branches} from "./data.js";
const testimony_placeholder = document.getElementById('testimony-row');
const services_placeholder = document.getElementById('services-row');
const branches_placeholder = document.getElementById('branchesTblBody');

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
        `<div class="testimony col-12 col-lg-6">
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
   });

   /*
    Prerequisite: div where data will be appended
    Method functionality: Loop to the branches, and display to table
    */
   branches.forEach(branch => {
    
    branches_placeholder.innerHTML += 
        `<tr>
            <th class><div class="branch-loc">`+branch.place+`</div><img src="`+branch.img+`"></th>
            <td><div class="branch-info">`+createListOfService(branch.services)+`</div></td>
            <td>`+branch.hours+`</td>
            <td><div class="branch-info"><p>`+branch.contact.cel+`</p><p>`+branch.contact.tel+`</p><p>`+branch.contact.loc+`</p></div></td>
        </tr>`
   })
}

function createListOfService(branch) {
    // method called when inserting branch into innerhtml
   let htmlSyntax = "";

    // check if the data passed is not an object, if not, return
    if(typeof branch !=="object"){
        return branch;
    }

    // if data is an object, access through Object values, append in <p> and retun
   Object.values(branch).forEach((service) => {
        htmlSyntax+= `<p>`+service+`</p>`;
   })
   return htmlSyntax;
}