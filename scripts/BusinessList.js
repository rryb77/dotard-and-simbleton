import { useBusinesses } from './BusinessProvider.js'
import { Business } from './Business.js'
import { newYork } from './Business.js'
import { manufacturing } from './Business.js'

const businessContent = document.querySelector(".businesses");
const businessArray = useBusinesses();

export const businessList = () => {
    businessContent.innerHTML = "<h1>Active Businesses</h1>";

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

export const newYorkSales = businessArray.filter(newYorkObject => {
    if(newYorkObject.addressStateCode === 'NY'){
        return true;
    }    
    return false;
});

export const manufacturingArray = businessArray.filter(manufacturingObject => {
    if(manufacturingObject.companyIndustry === 'Manufacturing'){
        return true;
    }    
    return false;
});


