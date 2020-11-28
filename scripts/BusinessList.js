import { useBusinesses } from './BusinessProvider.js'
import { Business } from './Business.js'

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