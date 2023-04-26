/**
 * 
 * @param {*} page 
 * @param {*} element 
 */
async function DownloadOperation(page, element){
    const [ download ] = await Promise.all([
        page.waitForEvent('download'), // wait for download to start
        await page.locator(element).click()
    ]);
    // save into the desired path
    await download.saveAs("Logs\\sampleFile.jpeg");
    // wait for the download and delete the temporary file
    await download.delete()
}


module.exports = {
    DownloadOperation
};

