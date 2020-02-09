# Fujitsu Business Requirements 

### Key Deliverable

Fujitsu will be responsible for delivering the front-end website of a co-designed citizen-science platform to investigate how autistic people navigate different environments, particularly focussed on the sensory processing differences they experience. 
The intended users are autistic people and members of the autistic community (such as parents, carers, family members, and supporters of autistic people). 

The website will allow users to sign up, input their experiences, and give dynamic informed consent on how that data can be used. 
The website must include a moderation workflow. 
Anyone can access and learn from the experiences that have been consented to be made public on the site, after moderation. 

Data collected will be transferred securely to Open Humans and managed by their backend file management system. 
Registration will be managed through Open Humans. 
Adaptions to the back-end should be sent to the [Open Humans GitHub repository](https://github.com/OpenHumans/open-humans) as required.  

Fujitsu’s pro bono support of the project will end in December 2020. 
They will deliver complete technical specifications and process documentation for maintaining the website after their formal involvement has ended. 

### High-Level Features 

The front-end interface:

1. clearly and accessibly informs users about the project, the platform, what it is for and how to use it. 
2. registers users and collects necessary demographic information, such as connection to autism. 
3. takes input from users reporting their experiences navigating different sensory environments. 
4. securely transfers data from users categorised as usable for research and/or usable for public view, or neither to the Open Humans backend file management system. 
5. allows moderation of input before it is made public.  
6. presents users with their own data and consent decisions. 
7. displays experiences that have been consented for public view to any visitor of the website.

### Initial Demonstration

A working prototype, associated code, and documentation, can be found at: https://github.com/alan-turing-institute/autistica-filemanagement-demo. 
The front-end website is built using Django and served using Heroku.
Data flows from the website onto a secure spreadsheet storing json files, tagged with the user’s consent preferences.

### User journeys

A series of user journeys based on segmenting the platform’s users into groups, the initial list is:  

* People on the autistic spectrum
* People with different accessibility requirements, including those who are dyslexic and non-verbal
* The parents and carers of autistic people
* People who are both autistic themselves and the carers or parents of autistic people.
* People who can use the data to directly influence things like policy, guidelines, or the built environment 
* Moderators 
* Researchers 

All of these user groups should be user tested, and the categories can be iterated after UX feedback. 

### Wireframes

Wireframes or prototypes should feature in all of the videos and are integral to the sprint planning. 
These should be iterated in accordance with feedback from the community. 

### Open source implementation of the design

Work should take place on GitHub and be regularly linked to the Turing main repository. 
All source code will be public. 
Documentation will be created of working processes, code, and decisions made, so that the outputs are accessible to other developers/members of the community who may both wish to contribute to the platform, or adapt the platform design for different purposes. 

Members of the Fujitsu team will collaborate with outside developers, volunteers, and members of the autistic community, not just to test but to collaboratively build the platform. 

Fujitsu will also provide technical specifications for maintaining the website after their formal involvement has ended. 

### Fortnightly Demos

The Fujitsu team will publish every fortnightly sprint cycle: 
Documentation on how decisions were made (eg: infrastructure choices, programming language / framework choice, design choices)

Public videos at the end of each sprint and an accompanying CHANGELOG cataloguing all the issues that were closed / opened / progressed on (@KirstieJane is going to write up the details of this!


### User Experience Research

3 user sessions will be held monthly with autistic people, their families and carers. 
These user testing sessions should reach a wide and diverse group. 
For each session, identifying and proactively researching those who are not involved should be part of the planning and iteration of the user design, so the interface can be as inclusive as possible. 


Fujitsu will be responsible for planning, undertaking and reporting on monthly user experience research sessions. 

### Commitment to project values

The Fujitsu team undertake to follow the project’s values throughout. 
These are detailed in the project’s [values statement](https://github.com/alan-turing-institute/AutisticaCitizenScience/blob/master/project-management/A2_ValuesAndOutcomes.pdf). 
The values are impact, participatory science, transparency, protection and consent, open source working, diversity and inclusion, and respectful conduct. 

