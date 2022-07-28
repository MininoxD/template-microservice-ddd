Feature: Health Check
  In veify status app

  Scenario: A valid started app
    Given I send a GET request to "/healthcheck"

    Then the response status code should be 200
    And the response should be empty
