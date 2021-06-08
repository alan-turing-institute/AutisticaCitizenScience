# Fujitsu Business Requirements

This document describes the platform requirements that Fujitsu will deliver as part of their pro bono support of the project.

**Table of contents**

* [Key deliverables](#key-deliverables)
* [High-level features](#high-level-features)
* [Open source development](#open-source-development)
    * [GitHub](#github)
    * [Documentation](#documentation)
    * [Agile and open source development](#agile-and-open-source-development)
* [User experience research](#user-experience-research)
    * [User journeys](#user-journeys)
    * [1:1 testing and engagement](#11-testing-and-engagement)
    * [Wireframes](#wireframes)
* [Initial demonstration](#initial-demonstration)
* [Commitment to project values](#commitment-to-project-values)

## Key deliverables

Fujitsu will be responsible for delivering the front-end website of a co-designed citizen-science platform to investigate how autistic people navigate different environments, particularly focussed on the sensory processing differences they experience.
For example, some autistic people may find rooms are too brightly lit, background noise particularly distracting, or have difficulty ignoring food smells.

The intended users are autistic people and members of the autistic community such as parents, carers, family members, and supporters of autistic people.

The website will invite users to sign up, contribute their experiences, and give dynamic informed consent on how that data can be used.
The website must include a moderation workflow, developed in collaboration with the user community.
Anyone can access and learn from the experiences that have been consented to be made public on the site, after moderation.

Data collected will be transferred securely to Open Humans and managed by their backend file management system.
Registration will be managed through Open Humans.
Adaptions to the back-end should be sent to the [Open Humans GitHub repository](https://github.com/OpenHumans/open-humans) as required.

Fujitsu's pro bono support of the project will end in December 2020.
They will deliver complete technical specifications and process documentation for maintaining the website after their formal involvement has ended.

## High-level features

The front-end interface:

1. Clearly and accessibly informs users about the project, the platform, what it is for and how to use it.
2. Registers users and collects necessary demographic information, such as connection to autism, and is compliant with the [UK Data Protection Act](https://www.gov.uk/data-protection).
3. Takes input from users reporting their experiences navigating different sensory environments.
4. Securely transfers data from users categorised as usable for research and/or usable for public view, or neither, to the Open Humans backend file management system.
5. Allows moderation of input before it is made public.
6. Presents users with their own data and consent decisions.
7. Displays experiences that have been consented for public view to any visitor of the website.

## Open source development

Members of the Fujitsu team will collaborate with outside developers, volunteers, and members of the autistic community, not just to test but to collaboratively build the platform.

### GitHub

Work should take place on GitHub and be regularly linked to the [main project repository](https://github.com/alan-turing-institute/AutisticaCitizenScience).
All source code will be public and available under a [combined creative commons attribution and MIT licence](/LICENSE).

### Documentation

Documentation will be created of code, infrastructure setup, deployment processes, and how decisions were made.
All outputs must be accessible to other developers/members of the community who may both wish to contribute to the platform, or adapt the platform design for different purposes.

The platform will continue to be developed after the end of Fujitsu's pro bono support.
The documentation must be complete enough for a new product management team to understand what work has been done and why.

### Agile and open source development

The Fujitsu team will work following an [Agile and open source development process](/project-management/agile-opensource-workflow.md).

The Fujitsu team will publish a [sprint report](/project-management/sprint-demo-requirements.md) and associated demonstration video at the end of each sprint to maintain transparent engagement with the broader autistic and developer communities, and with the people who lie at the intersection of the two.

The [sprint report](/project-management/sprint-demo-requirements.md) will containing a list of issues that have been [closed](/project-management/sprint-demo-requirements.md#closed-issues), [progressed](/project-management/sprint-demo-requirements.md#progressed-issues) or [opened](/project-management/sprint-demo-requirements.md#opened-issues) during the sprint, [challenges](/project-management/sprint-demo-requirements.md#challenges) that the team faced, and requests for [community feedback](/project-management/sprint-demo-requirements.md#community-feedback-requests).

The [video summary](/project-management/sprint-demo-requirements.md#video) of the sprint report will give a public and accessible overview of the work that was done during the sprint.

## User experience research

To ensure that the website is accessible and useful, the website will be designed and built in close collaboration with autistic people and members of the broader autism community.

### User journeys

The platform will be developed based on the development and continual refinement of user journeys.

The initial list of platform users are:

* People on the autistic spectrum.
* People with different accessibility requirements, including those who are dyslexic and non-verbal.
* Parents and carers of autistic people.
* People who are both autistic themselves and the carers or parents of autistic people.
* People who can use the data to directly influence things like policy or the built environment.
* People who will moderate uploaded content.
* Autism researchers.
* Natural language processing experts who will work with the data to link similar experiences together.
* Members of a future production, deployment and maintenance team.

### 1:1 testing and engagement

Fujitsu will be responsible for planning, undertaking and reporting on monthly user experience research sessions.

These user testing sessions should reach a wide and diverse group.
For each session, identifying and proactively researching those who are not involved should be part of the planning and iteration of the user design, so the interface can be as inclusive as possible.

We expect approximately three user research sessions will be held monthly with autistic people, their families and carers.
All insights from the user research session should be captured in the project GitHub after review by the user.

### Wireframes

Interactive [wireframes](https://www.experienceux.co.uk/faqs/what-is-wireframing) will be developed before a technical implementation.

All wireframes and interactive prototypes should be iterated in accordance with feedback from the community.

## Initial demonstration

The project starts with [a working prototype](https://github.com/alan-turing-institute/autistica-filemanagement-demo) to demonstrate the data flow process between the website and Open Humans backend file management system.

The front-end website is built using Django and served using Heroku.

Data flows from the website onto a secure spreadsheet storing json files, tagged with the user's consent preferences.

## Commitment to project values

The Fujitsu team undertake to follow the project's values throughout.
These are detailed in the project's [values statement](/project-management/project-values.md).

The values are to generate a positive [impact](/project-management/project-values.md#impact) on autistic people's lives, to build in a [participatory](/project-management/project-values.md#participatory-science) framework, to maintain the highest standards of [transparency](/project-management/project-values.md#transparency) and [data protection and consent](/project-management/project-values.md#protection-and-consent), to deliver all materials under an [open source](/project-management/project-values.md#open-source) licence, to centre [diversity and inclusion](/project-management/project-values.md#diversity-and-inclusion), and to promote [respectful conduct](/project-management/project-values.md#respectful-conduct).
