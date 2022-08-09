Feature: Get kinopoisk tests

  @getSubscribe
  Scenario: Get kinopoisk subscribe feature
    Given I am on the main page
    When I click headButton button
    Then I see new page and click getSubscribe button


  Scenario: Get twoHills playing feature
    Given I stay on the twoHillsPage page
    When I click on the watch button
    Then I click on the watchNom button


  Scenario: Get search result feature
    Given I am on the main page
    When I click on the inputBtn button
    Then I check search results


  Scenario: Get tickets result feature
    Given I am visit the main page
    When I click on mainMenu button
    Then I click on tickets button
    Then I check tickets results


  Scenario: Get serials result feature
    Given I am on the main page
    When I click on mainMenu button
    When I click on serials button
    Then I check viborRedaczii results am on the login page