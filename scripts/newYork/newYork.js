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