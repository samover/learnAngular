describe('Github Profile Finder', function() {
  var searchBox = element(by.model('searchCtrl.searchTerm')),
  searchButton = element(by.className('btn')),
  profiles = element.all(by.repeater('item in searchCtrl.searchResult.items')),
  repos = element.all(by.className('repos')),
  followers = element.all(by.className('followers'));

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
      expect(profiles.first().getText()).toContain('samover');
    });

    it('lists link to repos of searched user', function() {
      var html = '<a href="https://github.com/samover?tab=repositories">repositories</a>';
      expect(repos.first().getInnerHtml()).toEqual(html);
    });

    it('lists link to followers of searched user', function() {
      var html = '<a href="https://github.com/samover/followers"<followers</a>';
      expect(followers.first().getInnerHtml()).toEqual(html);
    });
  });
});
