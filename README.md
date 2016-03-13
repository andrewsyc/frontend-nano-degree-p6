# frontend-nano-degree-p6
* Makes use of the Jasmine Javascript Testing library to test a RSS feed that uses Google's Feed Reader API.
* Utilizes 7 tests, that must pass for project to be complete

# Steps to Pass
1. Return the allFeeds variable to a passing state.
2. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
3. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
- Write a new test suite named "The menu".
4. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
5. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
6. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
7. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
- When complete - all of your tests should pass.

## How To Run?

* To see the tests complete simply unpack and run index.html to see the feed load and then the specs of the test will be displayed below the RSS feed.
