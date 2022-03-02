
const urlList = [
    'https://www.wikipedia.com/',
    'https://commons.wikimedia.org/wiki/Main_Page',
]

const breakPoints = [1080]

const orgName = 'Wikipedia'

module.exports = {
    change: 3,
    batchName: orgName + ' URLs',
    apiKey: process.env.APPLITOOLS_API_KEY,
    appName: orgName + ' UFG app',
    testName: orgName + ' UFG',
    log: false,
    envName: orgName + ' test environment',
    branchName: 'not used',
    jsLayoutBreakpoints: true,
    saveFailedTests: false,
    urls: urlList,
    breakPoints: breakPoints,
    localViewportX: 1080,
    localViewportY: 600,
    disableBrowserFetching: false
}


