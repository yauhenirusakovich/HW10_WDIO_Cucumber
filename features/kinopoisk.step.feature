Feature: Get kinopoisk subscribe feature

  Scenario: Get kinopoisk subscribe feature
    Given I am on the main page
    When I click headButton button
    Then I see new page and click getSubscribe button

Feature: Get twoHills playing feature

  Scenario: Get twoHills playing feature
    Given I stay on the twoHillsPage page
    When I click on the watch button
    Then I click on the watchNom button

Feature: Get search result feature

  Scenario: Get search result feature
    Given I am on the main page
    When I click on the inputBtn button
    Then I check search results

Feature: Get tickets result feature

  Scenario: Get tickets result feature
    Given I am on the main page
    When I click on mainMenu button
    Then I click on tickets button
    Then I check tickets results

Feature: Get serials result feature

  Scenario: Get serials result feature
    Given I am on the main page
    When I click on mainMenu button
    When I click on serials button
    Then I check viborRedaczii results