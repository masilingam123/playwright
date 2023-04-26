/**
 * 
 * @param {*} page 
 * @param {*} element 
 * @param {*} content 
 */
async function Fill(page, element, content){
    await page.locator(element).fill(content)
}

module.exports = {
    Fill
};