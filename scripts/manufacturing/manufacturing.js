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