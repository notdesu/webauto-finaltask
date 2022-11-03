export default class Page {
  async open(homepage) {
    await browser.url(homepage);
  }
}
