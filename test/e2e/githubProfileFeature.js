describe('Github Profile Finder', function() {
  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github User Search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('spike01');
    searchButton.click();
  
    expect(element(by.binding('item.login')).getText()).
      toEqual('spike01');
  });
});
