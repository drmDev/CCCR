class IndexPage {
    constructor(page) {
        this.page = page;

        this.alertWarning = page.getByTestId('warning-note');
        this.strawpollTimeControl = page.getByTestId('strawpoll-time-control');
        this.chessIcons = page.locator('.fa-chess');
    }

    async getWarningText() {
        return this.alertWarning.textContent();
    }
}

module.exports = { IndexPage };