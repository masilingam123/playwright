/**
 * 
 * @param {string} page 
 * @param {string} element 
 */
async function Click(page, element){
    await page.locator(element).click();
}

/**
 * 
 * @param {*} page 
 * @param {*} element 
 * @param {*} content 
 */
async function Fill(page, element, content){
    await page.locator(element).fill(content)
}

/**
 * 
 * @param {*} page 
 * @param {*} element 
 */
async function Check(page, element){
    await page.locator(element).check();
}

module.exports = {
    Click,
    Fill,
    Check
};