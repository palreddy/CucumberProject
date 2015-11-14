package com.maven.MyFirstMavenProject;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MavenStepDefinition {
	
// Git Check
@Given("^I want to check given$")
public void I_want_to_check_given() throws Throwable {
	
	System.out.println("I am in Given method of project");
   
}

@When("^I check when$")
public void I_check_when() throws Throwable {
	System.out.println("I am in When method of project");
   
}

@Then("^it should check then$")
public void it_should_check_then() throws Throwable {
	System.out.println("I am in Then method of project");
	Assert.assertTrue(true);
	
 
}

@Given("^I want to check given in application$")
public void I_want_to_check_given_in_application() throws Throwable {
	System.out.println("I am in given method of application");
}

@When("^I check when in application$")
public void I_check_when_in_application() throws Throwable {
	System.out.println("I am in  When of application");
   
}

@Then("^it should check then in application$")
public void it_should_check_then_in_application() throws Throwable {
	System.out.println("I am in Then  of application");
}


@Given("^I want to check given in module$")
public void I_want_to_check_given_in_module() throws Throwable {
	System.out.println("I am in Given of module");

}
   
@When("^I check when in module$")
public void I_check_when_in_module() throws Throwable {
	
	System.out.println("I am in When of module");  
}

@Then("^it should check then in module$")
public void it_should_check_then_in_module() throws Throwable {
	
	System.out.println("I am in Then of module");
   
}


}
