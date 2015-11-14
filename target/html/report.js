$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("application.feature");
formatter.feature({
  "id": "testing-maven-application",
  "description": "as a user\nI want to test Maven application\nso that it should pass",
  "name": "Testing Maven application",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "testing-maven-application;maven-application-test",
  "tags": [
    {
      "name": "@app",
      "line": 6
    }
  ],
  "description": "",
  "name": "Maven application test",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "I want to check given in application",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I check when in application",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "it should check then in application",
  "keyword": "Then ",
  "line": 10
});
formatter.match({
  "location": "MavenStepDefinition.I_want_to_check_given_in_application()"
});
formatter.result({
  "duration": 479565000,
  "status": "passed"
});
formatter.match({
  "location": "MavenStepDefinition.I_check_when_in_application()"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.match({
  "location": "MavenStepDefinition.it_should_check_then_in_application()"
});
formatter.result({
  "duration": 86000,
  "status": "passed"
});
formatter.uri("module.feature");
formatter.feature({
  "id": "testing-maven-module",
  "description": "as a user\nI want to test Maven module\nso that it should pass",
  "name": "Testing Maven module",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "testing-maven-module;maven-module-test",
  "tags": [
    {
      "name": "@mod",
      "line": 6
    }
  ],
  "description": "",
  "name": "Maven module test",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I want to check given in module",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I check when in module",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "it should check then in module",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "MavenStepDefinition.I_want_to_check_given_in_module()"
});
formatter.result({
  "duration": 133000,
  "status": "passed"
});
formatter.match({
  "location": "MavenStepDefinition.I_check_when_in_module()"
});
formatter.result({
  "duration": 60000,
  "status": "passed"
});
formatter.match({
  "location": "MavenStepDefinition.it_should_check_then_in_module()"
});
formatter.result({
  "duration": 61000,
  "status": "passed"
});
});