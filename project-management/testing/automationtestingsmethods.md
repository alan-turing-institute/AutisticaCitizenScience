# Considering Test Methods for testing Python / Django

There are various test systems that can be used to unit test python. The methods considered in this document include:

- [Unittest](https://docs.python.org/3/library/unittest.html)
- [Doctest](https://docs.python.org/3/library/doctest.html) 
- [Pytest](https://docs.pytest.org/en/stable/)
- [Selenium](https://www.selenium.dev/) - ([Documentation](https://www.selenium.dev/documentation/en/))

Unittest and Pytest are very similar. Unittest is built into python but Pytest is an add on module. Pytest test cases can be written in less code that Unittest and has additional tooling that can run tests in parallel and can produce HTML reports.

Doctest is mainly used to check docstrings which is normally the code comments to see if they are consistent with the code.

The following articles explain the differences and both suggest using Pytest for Python unit testing:

http://www.rohitschauhan.com/index.php/2018/07/05/python-relative-benefits-of-pytest-unittest-nose-and-doctest/

https://blog.j-labs.pl/2019/02/Pytest-why-its-more-popular-than-unittest


For functional testing in the browser we can use a tool called Selenium, which can be run under Pytest also. Since selenium tests the rendered output of a web development framework, selenium can be used to test any website regardless of the web framework used. For example it doesn't matter that the prototype for this project's experience submission platform has been created using Python Django, because selenium doesn't test Python Django directly but rather the result of its final render that gets returned back to the client browser.

### Demo

Using information contained in this [this article](https://www.lambdatest.com/blog/test-automation-using-pytest-and-selenium-webdriver/), an example test setup has been created that shows how Selenium can be used with Pytest. This example can be found in the testing folder. 


The code for this example uses [Google](https://www.google.com/) as an example website. One test in the test suite checks for the existence of the website and the other searches for “phones” and returns the number of hits matching a criteria, where class of returned item in `<h3>` is class=”aA5rQ”. It prints the number of matching hits and checks that it is greater than 0.


A file called pytest_manpage has been added to the testing folder  which gives all the options for running pytest. To get started however please take the following into consideration:

- Run the testscript in the directory where the script is located.

- Set environment variable PYTHONPATH=../ (upper level folder)

- Run: pytest -s --html=[name of html file for test report] [name of test script with extension.py]

- The -s, which is optional, displays and print statements on the running console
- --html, which is optional, creates a test report


## Learning resources

There are many learning resources available on the internet which cover Automation Testing methods and techniques, however the following resources have been of particular benefit because of their role in assisting some members of this project's developer team:

- (Book) [Learning Selenium Testing Tools]() by Packt - goes into detail on writing Selenium tests using webdriver and Python
- (Book) [Pytest Quick start Guide]() by Packt
- (Guided Training Course) [Scraping Dynamic Web Pages with Python and Selenium]() by Pluralsight - Explores Selenium Webdriver


