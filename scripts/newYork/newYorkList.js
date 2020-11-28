import { newYork } from './newYork.js'
import { useBusinesses } from '/scripts/BusinessProvider.js'

const newYorkArray = useBusinesses();
const businessContent = document.querySelector(".businesses");

export const newYorkList = () => {
    businessContent.innerHTML = "<h1>New York Businesses</h1>";

    newYorkSales.forEach(
        (newYorkObject) => {
            businessContent.innerHTML += newYork(newYorkObject);
        }
    );
};

export const newYorkSales = newYorkArray.filter(newYorkObject => {
    if(newYorkObject.addressStateCode === 'NY'){
        return true;
    }    
    return false;
});