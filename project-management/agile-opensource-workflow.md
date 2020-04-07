# Agile and open source development process

This document describes a workflow that combines participatory, open source and Agile ways of working.

## Background, problem statement, proposed solution

This is a project funded and supported by the autistic community and therefore every stage of the project requires complete transparency and community feedback.

There is a tension between the [*continual*](https://en.wiktionary.org/wiki/continual) - regularly repeated - development cycles of an Agile workflow, and the [*continuous*](https://en.wiktionary.org/wiki/continuous) - without stopping - development process in an open source community of volunteers.

A *continual* Agile sprint only provides one point in time to plan what work will be done.
The process is rigorously time-locked process.
Development is usually undertaken by a team who know how much time they can commit to the project.
(For example because they are being paid to complete it.)
A [sprint backlog](https://www.mountaingoatsoftware.com/agile/scrum/scrum-tools/sprint-backlog) is defined in the planning meeting at the start of the sprint and there is a general rule that no additional tasks are added outside of that meeting.

A *continuous* open source workflow can be undertaken at any time.
Open source work is often (although not always) done by volunteers who are not paid to develop the project and who are contributing in their spare time.
It is difficult to determine when the work will be completed.

This document describes a balance between the two ways of working that allow the Fujitsu team to maintain their Agile workflow and for members of the broader project community to contribute when they are able.

The proposed solution incorporates an asynchronous feedback mechanism.
The community are able to give their feedback on a demonstration video that is one sprint _behind_ the one that the Fujitsu team are currently working on.

All parties are committed to working in an Agile (and agile) way to develop the platform efficiently.

![workflow diagram illustrating the steps in the process for continual and continous development](/images/agile-opensource-workflow.png)

## Initial scoping

### 1. Focus groups

The initial platform requirements are supported by extensive discussions between autistic people and their supporters, researchers, developers, and funders, as well as from online feedback and contributions from the online community.

### 2. Define user stories from focus group insights

The insights from the focus groups are collected together and written into a comprehensive list of tasks and user stories by researchers and developers, which are the project's backlog.

The tasks and user stories are published as individual GitHub issues, and grouped under appropriate milestones on the project's open repository.

### 3. Initial prioritisation

The tasks and user stories are prioritised (with the input of members of the autistic community) in an initial backlog refinement session, and Fujitsu assign themselves a portion, which is their backlog.

The issues that correspond to the backlog are transferred to the Fujitsu team's fork of the GitHub repository.

The remaining user stories remain open as issues on GitHub for anyone to develop or contribute to on an ad hoc [continuous](#continuous-development) basis.

## Continual Agile development

### 4. Create sprint backlog

The Fujitsu team have 15 day agile sprint cycles, beginning with a retrospective of the previous sprint cycle and a sprint planning session.
During the sprint planning session some of the issues in the Fujitsu team's backlog are pulled into the sprint backlog.
The sprint backlog is a collection of issues that will be covered during that sprint.

User stories that were created during the previous sprint to [incorporate community feedback](#define-user-stories) on the previous sprint report and demonstration video must be discussed at this meeting.

This meeting is not open to the public as it is important to provide the development team a safe space to discuss how the previous sprint progressed and any challenges that they experienced.
At least one member of the autistic community, preferably an autistic person, will be in attendance to participate in the retrospective and prioritisation process.
The project leadership will attempt to rotate who attends these meetings to promote a diverse perspective from the autistic community.

The Fujitsu team can liaise with [Bethan Davies](mailto:Bethan.Davies@autistica.org.uk) at Autistica and [Georgia Aitkenhead](mailto:gaitkenhead@turing.ac.uk) at the Alan Turing Institute to recruit autistic participants.
They can also get in touch with [Emma Chapell](mailto:emma.chappell@autistica.org.uk) from Autistic to recruit autistic community members within Fujitsu. 

### 5. Progress assigned tasks

All tasks are defined as issues in the [Fujitsu fork](https://github.com/fjAutisticaCitizenScience/AutisticaCitizenScience) of the main [AutisticaCitizenScience GitHub repository](https://github.com/alan-turing-institute/AutisticaCitizenScience).

Task may include user experience research sessions, documentation, creation of interactive wireframes, and technical development of the website.

### 6. Open review on GitHub

Completed tasks are submitted as pull requests to the main repository.
These will be reviewed by members of the Fujitsu team and approved by Turing researchers.

### 7. Define user stories

Each sprint will include a task to incorporate feedback from the community.
The feedback may come from community review of the previous sprint's report and demo video, the ["always open" Google form](https://bit.ly/AutisticaTuringCitSciForm), or comments on pull requests and other GitHub issues.

User stories defined during the sprint do not need to be assigned to the current sprint backlog, but they must be reviwed before setting the [next sprint backlog](#create-sprint-backlog).

### 8. Publish sprint report and video demonstration

On day 12 Fujitsu will provide Fujitsu creative team with the Demo Video for approval.
At the end of every 3 week sprint, On day 15 the Fujitsu team will publicly release a [sprint report](#sprint-report) text file detailing the issues and pull requests that were addressed during the sprint and a [video](#video) of the work they have achieved during the sprint.

Details of this release can be found in the [sprint-demo-requirements.md](project-management/sprint-demo-requirements.md) file.
The sprint report will be added to the [SPRINTREPORT.md](SPRINTREPORT.md) file in the main GitHub repository ([https://github.com/alan-turing-institute/AutisticaCitizenScience](https://github.com/alan-turing-institute/AutisticaCitizenScience)).

The project leadership will promote these materials to the community and ask them to share their thoughts and feedback.


## Continuous development

All other issues - tasks and user stories - will be addressed through pull requests to the [main GitHub repository](https://github.com/alan-turing-institute/AutisticaCitizenScience).

The process is very similar to the continual development, but without the defined two week sprints.

All community members are encouraged to contribute to the project by participating in discussions of the design, reviewing work, and opening pull requests to the repository.
