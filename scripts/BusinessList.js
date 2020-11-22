import { useBusinesses } from './BusinessProvider.js'
import { Business } from './Business.js'
import { newYork } from './Business.js'
import { manufacturing } from './Business.js'
import { purchasingAgent } from './Business.js'

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

export const newYorkList = () => {
    businessContent.innerHTML = "<h1>New York Businesses</h1>";

    newYorkSales.forEach(
        (newYorkObject) => {
            businessContent.innerHTML += newYork(newYorkObject);
        }
    );
}

export const manufacturingList = () => {
    businessContent.innerHTML = "<h1>Manufacturing Industry</h1>";

    manufacturingArray.forEach(
        (manufacturingObject) => {
            businessContent.innerHTML += manufacturing(manufacturingObject)
        }
    )
};

export const purchasingAgentList = () => {
    businessContent.innerHTML = "<h1>Purchasing Agents</h1>";

    purchasingAgentName.forEach(
        (purchasingAgentObject) => {
            businessContent.innerHTML += purchasingAgent(purchasingAgentObject)
        }
    )
}

// use .filter to create a new array with only NY businesses
export const newYorkSales = businessArray.filter(newYorkObject => {
    if(newYorkObject.addressStateCode === 'NY'){
        return true;
    }    
    return false;
});

// use .filter to create a new array with only those in the manufacturing industry
export const manufacturingArray = businessArray.filter(manufacturingObject => {
    if(manufacturingObject.companyIndustry === 'Manufacturing'){
        return true;
    }    
    return false;
});

export const purchasingAgentName = businessArray.map(purchasingAgentObject => {
    return `${purchasingAgentObject.purchasingAgent.nameFirst} ${purchasingAgentObject.purchasingAgent.nameLast}`;
});

console.log(purchasingAgentName)