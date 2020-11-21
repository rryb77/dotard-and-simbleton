import { useBusinesses } from './BusinessProvider.js'
import { Business } from './Business.js'

const businessContent = document.querySelector(".businesses");

export const businessList = () => {
    const businessArray = useBusinesses();
    businessContent.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            businessContent.innerHTML += Business(businessObject)
        }
    );
}