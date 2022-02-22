# AutSPACEs Platform Changelog 2022-02-21
Date: 2022-02-21 </br>
Summary: This is a requirement log which aims at tracking content and structure changes of the platform. You can find the [MVP Requirement List](https://github.com/alan-turing-institute/AutisticaCitizenScience/blob/master/platform-designs/design-requirements/mvp-requirements-list.md) here. You can find the design prototype here. </br>
Implementation: You can run this version locally from the codes on the following branch: [build-tmp](https://github.com/alan-turing-institute/AutSPACEs/tree/build-tmp).
## Contents
* <a href="#Platform-Pages">Platform Pages</a>
* <a href="#Contents-Per-Page">Contents Per Page</a>
* <a href="#Future-Steps">Future Steps</a>

## Platform Pages
* <a href="#Homepage">Homepage</a>  
* Log In Page (external page at Open Humans) 
* <a href="#Registration">Registration</a>  
* <a href="#What-Autism-Is">What Autism Is</a>  
* <a href="#View-Shared-Stories">View Shared Stories</a>  
* <a href="#Share-Stories">Share Stories</a>  
* Moderate Stories
* <a href="#My-Stories">My Stories</a>  
* <a href="#About-Us">About Us</a>  

## Contents Per Page
### Homepage
* Navigation bar
	* login/sign Out
	* registration
	* links to other MVP pages
* Title
* Call to actions
	* sign up
	* view shared stories
	* get involved
* Information on:
	* basic introduction to project
	* goals
	* How to use the platform
	* what autism is
* Footer
	* allied organizations
	* policies
	* about us
	* Autistica and the Alan Turing logos
---
### Registration 
* Navigation bar
	* login/sign Out
	* registration
	* links to other MVP pages
* Information on:
	* explanation of the registration is Open Humans
	* basic introduction to Open Humans
* Footer
	* allied organizations
	* policies
	* about us
	* Autistica and the Alan Turing logos
---
### What Autism Is
* Navigation bar
	* login/sign Out
	* registration
	* links to other MVP pages
* Information on:
	* about autism
	* about sensory processing
* Footer
	* allied organizations
	* policies
	* about us
	* Autistica and the Alan Turing logos
---
### View Shared Stories 
* Navigation bar
	* login/sign Out
	* registration
	* links to other MVP pages
* Information on:
	* basic introduction of the intention of shared stories
* Call to Action
	* search stories 
	* check non-triggering contents
	* read full stories 
	* report triggering contents (external link to Google Form)
* Footer
	* allied organizations
	* policies
	* about us
	* Autistica and the Alan Turing logos
---
### Share Stories 
* Navigation bar
	* login/sign Out
	* registration
	* links to other MVP pages
* Information on:
	* read before
	* code of condcut 
* Call to Action
	* enter story contents
	* enter story suggestions
	* enter a title
	* put triggering labels 
	* choose sharing options
	* submit
* Footer
	* allied organizations
	* policies
	* about us
	* Autistica and the Alan Turing logos
---
### My Stories 
* Navigation bar
	* login/sign Out
	* registration
	* links to other MVP pages
* Information on:
	* basic introduction of the page 
	* stories dashboard
		* In Process 
			* numbers of stories in process, being moderated, being re-moderated
		* Moderated
			* total numbers of stories being moderated, being accepted, being rejected
		* Messages
			* new messages about submitted stories 		
	* a table view of all the submitted stories
		* information including: title, contributor, submission date, moderation date, and status  
* Call to Action
	* view messages
	* contact moderators (external link: Google Form)
* Footer
	* allied organizations
	* policies
	* about us
	* Autistica and the Alan Turing logos
---
### About Us
* Navigation bar
	* login/sign Out
	* registration
	* links to other MVP pages
* Information on:
	* About AutSPACEs
	* Platform Usage
	* Explore AutSPACEs
	* Data Usage 
* Call to Action
	* Contact Us
* Footer
	* allied organizations
	* policies
	* about us
	* Autistica and the Alan Turing logos 

## Future Steps
* Registration
	* Integrate the registration steps with Open Humans together
* View Shared Stories
	* connect the search & filter function with the database
	* dynamically render accepted stories from the database 
* Share Stories
	* update the database models (newly added: titles, triggering labels, sharing for others)
	* connect the inputs with the database 	
* My Stories
	* build messages data pipeline  
