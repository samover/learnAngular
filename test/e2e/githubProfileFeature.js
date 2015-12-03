describe('Github Profile Finder', function() {
  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));
  var profiles = element.all(by.repeater('item in searchCtrl.searchResult.items'));

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github User Search');
  });

  describe('User search', function() {
    beforeEach(function() {
      searchBox.sendKeys('samover');
      searchButton.click();
    });

    it('finds profiles', function() {
      expect(profiles.first().getText()).toEqual('samover');
    });

    it('lists shows amount of followers and repos', function() {

    });
  });
});
