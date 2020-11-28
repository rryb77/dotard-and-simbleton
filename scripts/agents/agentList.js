import { purchasingAgent } from './agent.js'
import { useBusinesses } from '../BusinessProvider.js'

const businessContent = document.querySelector(".businesses");

export const purchasingAgentList = () => {
    const agentArray = useBusinesses();
    businessContent.innerHTML = "<h1>Purchasing Agents</h1>";
    
    agentArray.map(purchasingAgentObject => {
        const newObj = {
            fullName: purchasingAgentObject.purchasingAgent,
            company: purchasingAgentObject.companyName,
            phoneNumber: purchasingAgentObject.phoneWork
        } 
        return businessContent.innerHTML += purchasingAgent(newObj)
    })
}