import { useBusinesses } from './BusinessProvider.js'
import { Business } from './Business.js'
import { purchasingAgent } from './agents/agent.js';

const businessContent = document.querySelector(".businesses");
const businessArray = useBusinesses();

// loop through the array, and then inject HTML to the DOM
export const businessList = () => {
    // general HTML header that doesn't need to be repeated
    businessContent.innerHTML = "<h1>Active Businesses</h1>";

    // this is the business list that will need repeating so here's the loop
    businessArray.forEach(
        (businessObject) => {
            businessContent.innerHTML += Business(businessObject);
        }
    );

}

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */
            
            // implement .find() method here                 
            const foundBusiness = businessArray.find(business => [business.purchasingAgent.nameFirst, business.purchasingAgent.nameLast].includes(document.getElementById("companySearch").value))

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
                </h2>
                <section>
                ${foundBusiness.companyName}

                </section>
                <section>
                ${foundBusiness.phoneWork}        
                </section>
            `;
        }
    });