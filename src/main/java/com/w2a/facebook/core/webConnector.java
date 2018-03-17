package com.w2a.facebook.core;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.logging.Logger;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class webConnector {
	
	
	public static WebDriver driver;
	public static Properties or;
	public static Properties config;
	public static FileInputStream fis;
	public static Logger logs = Logger.getLogger("devpinoyLogger");
	
	public webConnector()
	{
		WebDriver driver = null;
		Properties OR=null;
		
		
		try 
		{
			or =new Properties();
			fis = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\w2a\\facebook\\config\\or.properties");
			try {
				or.load(fis);
			} catch (IOException e) {
				System.out.println("File load error");
			}
		} 
		catch (FileNotFoundException e1) 
		{
			System.out.println("Error in initializing Properties file");
		}
		
		
			try 
			{
			config =new Properties();
			fis = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\w2a\\facebook\\config\\config.properties");
				try {
					config.load(fis);
					} 
				catch (IOException e) 
				{
				System.out.println("File load error");
				}		
			} 
			catch (FileNotFoundException e) 
			{
				System.out.println("Error in initializing Properties file");
			}
			
			
		
	}//End constructor
	
	
	//This will open the browser
	public void getbrowser(String browserType) 
	{
//		FileInputStream fis = new FileInputStream("C:\\Users\\haquea\\E2EProject\\src\\main\\java\\resources\\data.properties");	
//		config.load(fis);
//		String browserName = config.getProperty("browser");
		
		String browserName = config.getProperty("browser");
		if (browserName.equals("chrome"))
		{
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\haquea\\Documents\\Downloads\\chromedriver_win32\\chromedriver.exe");
			driver = new ChromeDriver();
			
		}
		
		else if (browserName.equals("firefox"))
		{
			System.setProperty("webdriver.gecko.driver","C:\\Users\\haquea\\Documents\\Downloads\\geckodriver-v0.19.1-win64\\geckodriver.exe");
			WebDriver driver = new FirefoxDriver();
		}
			
		else if (browserName.equals("ie"))
		{
			System.setProperty("webdriver.ie.driver", "C:\\Users\\haquea\\Documents\\Downloads\\IEDriverServer_x64_3.8.0\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
		}
	
	}
	
	
	public void navigate () 
	{
	//	driver.get(config.getProperty(url));
				
		driver.get("http://login.salesforce.com");
	}//end navigator
	
	public void type(String object, String data) 
	{
		driver.findElement(By.xpath(or.getProperty(object))).sendKeys(data);
	}

	public void click(String locator) 
	{
		driver.findElement(By.xpath(or.getProperty(locator))).click();
	}
	
}
