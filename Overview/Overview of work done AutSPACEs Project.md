# Overview of work done AutSPACEs Project

## About
AutSPACEs is a citizen science platform which will be used to investigate how sensory processing differences affect the ways autistic people navigate the world around them.
 

* With the help of the [AutSPACEs Repository](https://github.com/alan-turing-institute/AutSPACEs), more information can be obtained regarding the project and the code can be obtained in order to get the skeleton/basic structure of the website.
* The platform is implemented so that the users can share thier experiences on the pltform. Hence, a basic MVP has to be built which was followed with the help of already exiting [Figma Wireframe](https://github.com/alan-turing-institute/AutSPACEs/blob/main/platform-design/MVP-requirements-list.md).

### Roadmap
**High level milestones:**

* create MVP prototype based on spec doc
* make MVP functional and integrate with open humans
* Create pathways for different user types (e.g. moderators)
* User testing (in multiple cycles)
* Integrate basic features with Open Humans 
* Build moderation process
* Interface design
* Add additional features desired by community
* Accessibility checks
* Create functional platform (more advanced than MVP)
* Deployment
* Launch
* 
### Steps to Contribute towards the project
* Read thoroughly about the project from the [AutSPACEs Repository](https://github.com/alan-turing-institute/AutSPACEs)
* Go through the [Milestones and issues](https://github.com/alan-turing-institute/AutSPACEs/issues) that have been recorded and start commenting to them to let the community know that you have been working on it. Also, the respective community member will assign you to that issue.
* Now, clone the repository to your computer and follow the [steps to start a website](https://github.com/alan-turing-institute/AutSPACEs/blob/main/dev_readme.md). You will be able to successfully get the basic skeleton of the website.

### Work that I contributed during the internship period
* I created a small MVP landing page to make myself understand the working of the Django. This landing consited of a picture and video explaining about the project. It also had an option for the user to record their email address for the community to get back to the users. The backend of the MVP consisted of all the Django modules and HTML components.

**MVP Landing Page**
![](https://i.imgur.com/AtMLzLp.png)
* The next came splitting up the tasks into Static and dynamic components. I started creating the static pages according to the Figma wireframe. This page was designed with the help of HTML, Bootstrap and CSS. I was successfully able to understand and create a landing page, experiences page, Moderation page and also a sign up page (this was not part of the wireframe)

**Landing Page**
![](https://i.imgur.com/UIhIbJQ.png)

**View Experiences Page**

![](https://i.imgur.com/S1W18ti.png)

** Moderation Page**
![](https://i.imgur.com/WCXN5n6.png)

**Sign Up Page**
![](https://i.imgur.com/mkXWzf0.png)

**User Sign Up Flow**

![](https://i.imgur.com/PYr6pSY.jpg)

* I also led the platform development team by presenting the work done during the community call meetups that occured every fortnight. A bief explaination of how the repository actually works was expained with the help of Miro Board. 
![](https://i.imgur.com/SyXZ1y7.png)
* I got help from various resources for Django, HTML, Bootstrap, CSS and also to understand the vast structure of Open Humans. 
* For my Master's defense I had to submit a poster regading the work that I carried out during my internship in the form of the poster.
![](https://i.imgur.com/7ytGxki.png)

# Brief report
### Introduction

AutSPACEs is a citizen science platform co-created by autistic people and their supporters alongside researchers and the open source community. The aim is to create an online space where autistic people can share their experiences around sensory processing and autism. We know that the autistic people have challenges navigating the world that was not build by Autistic people and for the autistic people. We would like to use citizen science n a participatory framework to rise up the autistic voices and educate non-autistic people on how they can change the behavior and also change the world. We would like them to understand how to be more inclusive and enabling the autistic people. Understanding sensory processing differences, and learning what could make environments better for autistic people, are top community priorities. In order to really make a difference, we want to take the research out of the lab and learn from the lived experience of autistic people in their daily lives.

### Goals

The platform has four main goals:

**Collect**: to collect together the stories of autistic people and their supporters about how they are affected by sensory processing in their daily lives. This will form a qualitative dataset for research.

**Share** : to create a safe, autism-voice-first online environment for autistic people and their supporters to share their stories. These can then be read by others who can benefit from their experiences and insights.

**Educate** : to educate non-autistic people about the experiences of autistic people so that they can become better supporters to them, and to reduce misunderstandings and stigmas about autism.

**Change** : use research done on the dataset to inform policy-makers and people who build and design environments how to make those spaces better for autistic people.

### How it works?

Users of the platform have the option to view other's stories or to submit their own. They must sign in to submit. All users have the option of submitting their story for research, publishing their story on the platform itself, neither, or both. If it is published, it will first be moderated to make sure it follows the platform's code of conduct. While logged in, users will be able to view their own stories and change their consent options.

### How it is built?

The platform is being developed using the Python/Django web development framework. Users will be able to share experiences through a website which will then be deposited into a backend database supported by Open Humans. The platform is entirely open source. All code is available to be used and adapted. Everyone is invited to contribute. The design for the platform is created according to specifications made by autistic people and their supporters. It is build with, for, and by the autistic community. You can find out more about this at the Autistica/Turing Citizen Science repository.

### Expected Results

We already have a demo version of the website that I had to locally install my machine with the help of Django library and Docker container. Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Some of the already pre-existing code is also present in the GitHub repository which was worked by previously by various contributors. The main idea is to create a fully django based minimum viable product that can be interactable and producible where autistic people can share their experiences on the website.

### Potential Challenges

I have no experience in Django or HTML/CSS which was the major requirements of the project. Nevertheless I understood how the framework actually worked and I am able to create few webpages for this project which are of priority. Also, we have community calls and co-working sessions where I would help other interested people who would like to contribute for the platform development perspective.

### Preliminary results

I created the following in the span of two months within the project:

* Cloned the repository, created a project on the Open Humans and started the demo website.

* Created a basic MVP (Minimum Viable Product) Landing Page so that the users who visits the website can register their email ids requesting for more information on Community calls or about the project. This page also contained info about the project and also a video where the supervisor explains in detail about the mission of this project. Please find the screenshot below for the visualizing the MVP.

* We have pre-exiting basic designs that have been created with the help of FIGMA wireframe. This gives us a basic visualization of how every page looks like and accordingly the HTML along with Bootstrap were implemented in the creation of these pages.

### Digital Sciences methods used

The digital sciences methods used here are Python - Django framework; Web development - HTML, CSS, Bootstrap ; Design - FIGMA wireframe; Container used to host - Docker.

### Technical environment of the internship

* Python - Django Web framework was used to make the interact pages with each other. Django is a Python-based free and open-source web framework that follows the model–template–views architectural pattern. It takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel.

* Web development - HTML/CSS/ Bootstrap was used to create the actual content of the page, such as written text, and CSS (Cascade Styling Sheets) is responsible for the design or style of the website, including the layout, visual effects and background color. Bootstrap is a framework to help you design websites faster and easier. It includes templates of HTML and CSS.

* Git version control - In order to document everything, use the pre-exiting code, push the code or commit, the repository is being continuously used and Git commands are very useful.

### List of hard/soft skills developed.

* Communication
* Team Bonding
* Improve Python - Django skills
* HTML/CSS, Bootstrap skills
* Time Management.
* Help to review others' work
* Leadership Skills
* Contributing to Open Source Project.
