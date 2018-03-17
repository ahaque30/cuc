$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\w2a\\facebook\\login\\login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Facebook.com",
  "description": "\r\nIn order to access Application \r\nAs a Admin \r\nI want to login",
  "id": "login-to-facebook.com",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Login in to Facebook.com",
  "description": "",
  "id": "login-to-facebook.com;login-in-to-facebook.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I open \"url\" on \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"username\" as \"email\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"password\" as \"selenium123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"SignInButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "login should be a \"success\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 8
    },
    {
      "val": "browser",
      "offset": 17
    }
  ],
  "location": "loginTest.I_open(String,String)"
});
formatter.result({
  "duration": 76085570191,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \ner\\\\features\\\\firefox@getpocket.com.xpi\",\"e\":true,\"v\":\"1.0.5\",\"st\":1484777643000},\"webcompat@mozilla.org\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\features\\\\webcompat@mozilla.org.xpi\",\"e\":true,\"v\":\"1.0\",\"st\":1484777643000}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}.xpi\",\"e\":true,\"v\":\"51.0\",\"st\":1484777643000}},\"winreg-app-global\":{\"FT.FirefoxAgent@microfocus.com\":{\"d\":\"C:\\\\Program Files (x86)\\\\HPE\\\\Unified Functional Testing\\\\\\\\Installations\\\\Firefox\\\\WebExtension.xpi\",\"e\":false,\"v\":\"14.3.3501.1\",\"st\":1518551788000}}}\r\n1521311656688\taddons.xpi\tDEBUG\tNo changes found\r\n1521311656694\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\aushelper@mozilla.org.xpi\r\n1521311656695\taddons.xpi\tDEBUG\tLoading bootstrap scope from C:\\Program Files\\Mozilla Firefox\\browser\\features\\aushelper@mozilla.org.xpi\r\n1521311656700\taddons.xpi\tDEBUG\tCalling bootstrap method startup on aushelper@mozilla.org version 1.0\r\n1521311656701\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\e10srollout@mozilla.org.xpi\r\n1521311656701\taddons.xpi\tDEBUG\tLoading bootstrap scope from C:\\Program Files\\Mozilla Firefox\\browser\\features\\e10srollout@mozilla.org.xpi\r\n1521311656703\taddons.xpi\tDEBUG\tCalling bootstrap method startup on e10srollout@mozilla.org version 1.7\r\n1521311656704\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1521311656704\taddons.xpi\tDEBUG\tLoading bootstrap scope from C:\\Program Files\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1521311656707\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0.5\r\n1521311656712\taddons.xpi-utils\tDEBUG\tStarting async load of XPI database C:\\Users\\haquea\\AppData\\Local\\Temp\\anonymous600343393578764292webdriver-profile\\extensions.json\r\n1521311656713\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\webcompat@mozilla.org.xpi\r\n1521311656714\taddons.xpi\tDEBUG\tLoading bootstrap scope from C:\\Program Files\\Mozilla Firefox\\browser\\features\\webcompat@mozilla.org.xpi\r\n1521311656715\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 1.0\r\n1521311656717\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1521311656717\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1521311656717\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1521311656718\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1521311656718\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1521311656718\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1521311656725\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1521311656725\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1521311656725\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1521311656725\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1521311656725\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1521311656726\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1521311657149\taddons.xpi-utils\tDEBUG\tAsync JSON file read took 0 MS\r\n1521311657149\taddons.xpi-utils\tDEBUG\tFinished async read of XPI database, parsing...\r\n1521311657151\taddons.xpi-utils\tDEBUG\tSuccessfully read XPI database\r\n1521311657161\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1521311657161\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1521311657161\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\n1521311657249\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1521311657249\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1521311657249\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\n\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027ptclaphaquea\u0027, ip: \u002710.0.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:130)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.w2a.facebook.core.webConnector.getbrowser(webConnector.java:84)\r\n\tat com.w2a.facebook.login.loginTest.I_open(loginTest.java:18)\r\n\tat ✽.Given I open \"url\" on \"browser\"(com\\w2a\\facebook\\login\\login.feature:9)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\ner\\\\features\\\\firefox@getpocket.com.xpi\",\"e\":true,\"v\":\"1.0.5\",\"st\":1484777643000},\"webcompat@mozilla.org\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\features\\\\webcompat@mozilla.org.xpi\",\"e\":true,\"v\":\"1.0\",\"st\":1484777643000}},\"app-global\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"d\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}.xpi\",\"e\":true,\"v\":\"51.0\",\"st\":1484777643000}},\"winreg-app-global\":{\"FT.FirefoxAgent@microfocus.com\":{\"d\":\"C:\\\\Program Files (x86)\\\\HPE\\\\Unified Functional Testing\\\\\\\\Installations\\\\Firefox\\\\WebExtension.xpi\",\"e\":false,\"v\":\"14.3.3501.1\",\"st\":1518551788000}}}\r\n1521311656688\taddons.xpi\tDEBUG\tNo changes found\r\n1521311656694\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\aushelper@mozilla.org.xpi\r\n1521311656695\taddons.xpi\tDEBUG\tLoading bootstrap scope from C:\\Program Files\\Mozilla Firefox\\browser\\features\\aushelper@mozilla.org.xpi\r\n1521311656700\taddons.xpi\tDEBUG\tCalling bootstrap method startup on aushelper@mozilla.org version 1.0\r\n1521311656701\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\e10srollout@mozilla.org.xpi\r\n1521311656701\taddons.xpi\tDEBUG\tLoading bootstrap scope from C:\\Program Files\\Mozilla Firefox\\browser\\features\\e10srollout@mozilla.org.xpi\r\n1521311656703\taddons.xpi\tDEBUG\tCalling bootstrap method startup on e10srollout@mozilla.org version 1.7\r\n1521311656704\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1521311656704\taddons.xpi\tDEBUG\tLoading bootstrap scope from C:\\Program Files\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1521311656707\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0.5\r\n1521311656712\taddons.xpi-utils\tDEBUG\tStarting async load of XPI database C:\\Users\\haquea\\AppData\\Local\\Temp\\anonymous600343393578764292webdriver-profile\\extensions.json\r\n1521311656713\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\webcompat@mozilla.org.xpi\r\n1521311656714\taddons.xpi\tDEBUG\tLoading bootstrap scope from C:\\Program Files\\Mozilla Firefox\\browser\\features\\webcompat@mozilla.org.xpi\r\n1521311656715\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 1.0\r\n1521311656717\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1521311656717\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1521311656717\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1521311656718\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1521311656718\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1521311656718\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1521311656725\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1521311656725\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1521311656725\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1521311656725\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1521311656725\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1521311656726\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1521311657149\taddons.xpi-utils\tDEBUG\tAsync JSON file read took 0 MS\r\n1521311657149\taddons.xpi-utils\tDEBUG\tFinished async read of XPI database, parsing...\r\n1521311657151\taddons.xpi-utils\tDEBUG\tSuccessfully read XPI database\r\n1521311657161\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1521311657161\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1521311657161\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\n1521311657249\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1521311657249\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1521311657249\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.w2a.facebook.core.webConnector.getbrowser(webConnector.java:84)\r\n\tat com.w2a.facebook.login.loginTest.I_open(loginTest.java:18)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:268)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:45)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:40)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:77)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:82)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "email",
      "offset": 23
    }
  ],
  "location": "loginTest.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "selenium123",
      "offset": 23
    }
  ],
  "location": "loginTest.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SignInButton",
      "offset": 12
    }
  ],
  "location": "loginTest.I_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 19
    }
  ],
  "location": "loginTest.Login(String)"
});
formatter.result({
  "status": "skipped"
});
});