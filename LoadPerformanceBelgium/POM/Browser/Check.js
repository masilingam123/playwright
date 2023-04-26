/**
 * 
 * @param {*} page 
 * @param {*} element 
 */
async function Check(page, element){
    await page.locator(element).check();
}

module.exports = {
    Check
};