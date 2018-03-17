package com.w2a.facebook.login;

import com.w2a.facebook.core.webConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class loginTest {
	
	webConnector connect = new webConnector();
	

	@Given ("^I open \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_open(String url, String browser)
	{
		System.out.println("I open " + url + " on " + browser);
		connect.getbrowser(browser);
		connect.navigate();
	}
	
	@And ("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter (String object, String data)
	{
		System.out.println("I enter " + object + " on " + data);
		connect.type(object, data);
	}
	
	@And ("^I click on \"([^\"]*)\"$")
	public void I_click_on(String signin)
	{
		System.out.println("I click on " + signin);
		connect.click(signin);
	}
	

	@Then ("^login should be a \"([^\"]*)\"$")
	public void Login(String status)
	{
		System.out.println("Login should be a " + status);
	}
	
	
	
}
