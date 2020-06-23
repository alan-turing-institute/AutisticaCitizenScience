Considering Test Methods for testing Python / Django

There are various test systems that can be used to unit test python. The 3 methods I have considered is Unittest, Doctest and Pytest.

Unittest and Pytest are very similar. Unittest is built in to python but Pytest is an add on module. Pytest test cases can be written in less code that Unittest and has additional tooling that can run tests in parallel and can produce Html reports.

Doctest is mainly used to check docstrings which is normally the code comments to see if they are consistent with the code.

The following articles explain the differences and both suggest using Pytest for Python unit testing:

http://www.rohitschauhan.com/index.php/2018/07/05/python-relative-benefits-of-pytest-unittest-nose-and-doctest/

https://blog.j-labs.pl/2019/02/Pytest-why-its-more-popular-than-unittest

For the functional browser testing we can use Selenium, which can be run under Pytest also.

This article explores that subject:

https://www.lambdatest.com/blog/test-automation-using-pytest-and-selenium-webdriver/

Here are some more details about running Selenium tests under pytest. It is not relevant that the website is being developed with Django, since this methodology would apply to any website.

The above article does give quite a detailed account of using pytest and selenium webdriver and I based the example shown in the accompanying file example_code on this article.

This code uses google.co.uk as an example website, One test checks for the existence of the website and the other searches for “phones” and returns the number of hits matching a criteria, where class of returned item in <h3> is class=”aA5rQ”. It prints the number of matching hits and checks that it is greater than 0.

I have also added a file to the testing folder called pytest_manpage which gives all the options for running pytest.

Some quick tips for running a test script:

Run the testscript in the directory where the script is located.

Set environment variable PYTHONPATH=../ (upper level folder)

Run: pytest -s --html=<name of html file for test report> <name of test script with extension.py>

The -s, which is optional, displays and print statements on the running console
--html, which is optional, creates a test report

Also I have found a book, called Learning Selenium Testing Tools with Python, published by Packt publishers which goes into detail on writing Selenium tests using webdriver and python.

There is also a book by the same publisher called Pytest Quick start Guide which I have not looked at in any detail.

For selenium webdriver there is a pluralsight course called Scraping Dynamic Web Pages with Python and Selenium. It does not use Pytest but is well recommended. 

