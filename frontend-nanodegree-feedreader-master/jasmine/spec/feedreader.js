/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/*
 * We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /*
     * This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*
         * Check to make sure object has urls
         */
        it('should have a non-empty url', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toEqual('');
            }
        });

        /*
         * in the allFeeds object and ensures it has a name defined and that the name is not empty.
         */
        it('should have a non-empty name', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toEqual('');
            }
        });

    });

    /*
     Menu Spec
     */

    describe('The menu', function () {
        /*
         * Checks that the application menu is hidden by default.
         */
        it('should be hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /*
         * Check that the menu toggles visibility when the menu icon is clicked.
         * Tests a click cycle on the menu
         */
        it('changes visibility when the icon is clicked', function () {
            //Variable equal to whether class exists in DOM
            var menuHidden = $('body').hasClass('menu-hidden');


            //This is just reading out whether this class is toggled or not, should read true
            console.log($('body').hasClass('menu-hidden'));

            //Triggers the menu (toggles via jQuery)
            $('.menu-icon-link').trigger('click');

            //should read false as the class is toggled and the menu appears
            console.log($('body').hasClass('menu-hidden'));
            //Menu should now be visible as the menu icon was clicked
            expect($('body').hasClass('menu-hidden')).not.toBe(menuHidden);


            //makes the menu hidden again
            $('.menu-icon-link').trigger('click');
            //updating the menu variable, it's assigned and not referenced.
            menuHidden = $('body').hasClass('menu-hidden');

            //should now read true
            console.log($('body').hasClass('menu-hidden'));
            expect($('body').hasClass('menu-hidden')).toBe(menuHidden);
        });
    });

    describe('Initial Entries', function () {
        var lastFeed = allFeeds.length - 1;

        beforeEach(function (done) {
            loadFeed(lastFeed, function () {
                done();
            });
        });

        /*
         * Checks that there is at least one entry in the feed container after the loadFeed method is called.
         */
        it('ensure that at least one entry is returned by loadFeed', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /*
     * Contains test for loading new feeds.
     * */
    describe('New Feed Selection', function () {
        var lastFeed = allFeeds.length - 1;
        var initialEntries;
        var finalEntries;

        beforeEach(function (done) {
            loadFeed(lastFeed, function () {
                initialEntries = $('.entry')[0].innerHTML;
                loadFeed(0, function () {
                    finalEntries = $('.entry')[0].innerHTML;
                    done();
                });
            });
        });

        /*
         * Checks that when a new feed is loaded, the html changes.
         */
        it('assert content change after loadFeed', function (done) {
            expect(initialEntries).not.toEqual(finalEntries);
            done();
        });
    });

}());
