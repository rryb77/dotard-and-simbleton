export const purchasingAgent = (purchasingAgentObject) => {
    return `
    <article class="agents">
        <h2 class="agent__name">${purchasingAgentObject.fullName.nameFirst} ${purchasingAgentObject.fullName.nameLast}</h2>
        <h3 class="agent__company">${purchasingAgentObject.company}</h3>
        <h4 class="agent__phone">${purchasingAgentObject.phoneNumber}</h3>
        <hr class="solid">
    </article>
    `
};