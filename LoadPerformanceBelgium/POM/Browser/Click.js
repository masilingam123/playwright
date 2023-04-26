/**
 * 
 * @param {*} page 
 * @param {*} element 
 */
async function Click(page, element){
    await page.locator(element).click();
}

module.exports = {
    Click
};