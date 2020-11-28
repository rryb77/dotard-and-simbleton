import { manufacturing } from './manufacturing.js'
import { useBusinesses } from '../BusinessProvider.js'

const manuArray = useBusinesses();
const businessContent = document.querySelector(".businesses");

export const manufacturingList = () => {
    businessContent.innerHTML = "<h1>Manufacturing Industry</h1>";

    manufacturingArray.forEach(
        (manufacturingObject) => {
            businessContent.innerHTML += manufacturing(manufacturingObject)
        }
    )
};

// use .filter to create a new array with only those in the manufacturing industry
export const manufacturingArray = manuArray.filter(manufacturingObject => {
    if(manufacturingObject.companyIndustry === 'Manufacturing'){
        return true;
    }    
    return false;
});