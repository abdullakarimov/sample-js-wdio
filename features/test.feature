Feature: 10Clouds Website

  Scenario Outline: I can find a specific job opening on the Careers page

    Given I am on the home page
    Then I verify a Careers link is displayed
    When I click on the Careers link
    Then I should see a job title saying QA Automation Engineer

  Scenario Outline: I can find a specific job opening by searching for it on the Careers page

    Given I am on the home page
    Then I verify a Careers link is displayed
    When I click on the Careers link
    And I search for the Automation job
    Then I should see a job title containing Automation
    
