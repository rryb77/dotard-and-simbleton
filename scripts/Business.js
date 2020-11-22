export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business__name">${businessObject.companyName}</h2>
            <div class="business__fullStreet">${businessObject.addressFullStreet}</div>
            <div class="business__cityStateZip">${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
            <hr class="solid">
    `
};

export const newYork = (newYorkObject) => {
    return `
    <article class="businessList--newYork">
        <h2 class="business__name">${newYorkObject.companyName}</h2>
        <div class="business__fullStreet">${newYorkObject.addressFullStreet}</div>
        <div class="business__cityStateZip">${newYorkObject.addressCity}, ${newYorkObject.addressStateCode} ${newYorkObject.addressZipCode}</div>
        <hr class="solid">
    </article>
    `
}

export const manufacturing = (manufacturingObject) => {
    return `
    <article class="businessList--manufacturing">
        <h2 class="business__name">${manufacturingObject.companyName}</h2>
        <div class="business__fullStreet">${manufacturingObject.addressFullStreet}</div>
        <div class="business__cityStateZip">${manufacturingObject.addressCity}, ${manufacturingObject.addressStateCode} ${manufacturingObject.addressZipCode}</div>
        <hr class="solid">
    </article>
    `
}

export const purchasingAgent = (purchasingAgentObject) => {
    return `
    <article class="agents">
        <h2 class="business__name">${purchasingAgentObject}</h2>
        <hr class="solid">
    </article>
    `
}