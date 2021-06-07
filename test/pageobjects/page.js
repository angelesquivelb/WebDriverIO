module.exports = class Page {
    /**
     * 
     * @param path 
     */
    open (path) {
        return browser.url(`http://54.211.24.155/${path}`)
}