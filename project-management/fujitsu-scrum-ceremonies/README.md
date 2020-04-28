# Fujitsu Scrum Ceremonies

The Fujitsu team work following the [Scrum framework](https://www.scrum.org/resources/what-is-scrum), lightly adapted to ensure the work is participatory and transparent for all community members.
The process is described in detail in the [`agile-opensource-workflow`](/project-management/agile-opensource-workflow.md) document.

**Scrum ceremonies** are the meetings that ensure all work is going as planned and there are regular opportunities for team members to ask questions and share their updates.

![a flow diagram visualising the Scrum framework](https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2017-05/ScrumFrameworkTest.png)
*The Scrum framework, showing the sprint planning, daily scrum, sprint reivew and sprint retrospective ceremonies, via [www.scrum.org](https://www.scrum.org/resources/scrum-framework-poster)*

The [`fujitsu-scrum-ceremonies`](/project-management/fujitsu-scrum-ceremonies) folder contains notes from each of the Scrum ceremonies.
This `README` file describes the purpose of those meetings and what should be captured in the notes for each meeting.

## Table of Contents

* Description of Scrum ceremony
  * [Backlog refinement](#backlog-refinement)
  * [Sprint planning](#sprint-planning)
  * [Sprint review](#sprint-review)
  * [Sprint retrospective with Autistica/Turing Institute](#sprint-retrospective-with-autisticaturing-institute)
  * [Sprint retrospective with Fujitsu development team](#sprint-retrospective-with-fujitsu-development-team)
  * [Daily Scrum](#daily-scrum)
* [Using the template agendas](#using-the-template-agendas)
* [Scheduled and completed meetings](#scheduled-and-completed-meetings)

## Description of Scrum ceremony

### Backlog refinement

The purpose of the backlog refinement meeting is for the product owner and broader team review items on the backlog to ensure the backlog contains the appropriate items and that all team members understand them, that the items are prioritised correctly and have appropriate timelines associated with them, and that the items at the top of the backlog are ready for next sprint.

* **Frequency**: weekly
* **Attendees**: Scrum Master, Development team and Product Owner
* **Template agenda**: [`template-backlog-refinement.md`](template-backlog-refinement.md)

### Sprint planning

The purpose of the sprint planning meeting is for the team to determine which of the product backlog items they will work on during the next sprint and discusses their initial plan for completing those product backlog items.

* **Frequency**: once per sprint on the first day of the sprint, currently every 15 work days.
* **Attendees**: Scrum Master, Development team and Product Owner
* **Template agenda**: [`template-sprint-planning.md`](template-sprint-planning.md)

### Sprint review

The purpose of the sprint review is to demonstrate the work completed during the sprint.

This will be provided in the form of a report and a video, as described in the [`sprint-demo-requirements`](/project-management/sprint-demo-requirements.md) file.

* **Frequency**: once per sprint, currently every 15 work days.
  * The video demonstration is created on the 12th day of the sprint, but available for external viewing in the morning of the 15th - last - day of the sprint.
* **Viewers**: Scrum Master, Development team, Product Owner, Stakeholders
* **Sprint report template**: [`SPRINTREPORT.md`](/SPRINTREPORT.md)

### Sprint retrospective with Autistica/Turing Institute

The purpose of the sprint retrospective is for the Autistica and Alan Turing team to view work that was completed during the previous sprint and demonstrated in the video and associated sprint report. The demonstration video will be sent on day 14 of the sprint.
The team will record how the sprint progressed in terms of relationships, process and tools, identifying and celebrating aspects that went well, and identifying potential improvements and how they can be integrated into the next sprint will be recorded under the GitHub repository.   

* **Frequency**: once per sprint on the last day of the sprint, currently every 15 work days.
* **Attendees**: Turing Institute researchers, Autistica representative


### Sprint retrospective with Fujitsu development team

The purpose of the sprint retrospective with the Fujitsu development team is to ensure all team members are aligned and to provide an opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint.

* **Frequency**: once per sprint on the last day of the sprint, currently every 15 work days.
* **Attendees**: Scrum Master and Development team
* This meeting is internal to the Fujitsu team and is not captured in the GitHub repository at this time.

### Daily Scrum

The purpose of the Daily Scrum is to synchronize activities within the Development Team and create a plan for the next 24 hours.

* **Frequency**: once per day of each sprint for 15 minutes.
* **Attendees**: Scrum Master, Development team and Product Owner (silent member)
* This meeting is internal to the Fujitsu team and is not captured in the GitHub repository at this time.

## Using the template agendas

Template agendas are provided for the [backlog refinement](#backlog-refinement), [sprint planning](#sprint-planning) and [sprint retrospective with Autistica/Turing Institute](#sprint-retrospective-with-autisticaturing-institute) ceremonies.

Before each meeting the Fujitsu project manager will open a pull request with a copy of the template agenda and circulate it to the invited participants.

The file name should follow a standard format with the following sections split by an underscore (`_`):

* Start with meeting date in ISO format: `YYYYMMDD` (eg: `20200412`)
* Contain sprint identifier padded with zeros to have two digits: `sprintNN` (eg `sprint01`)
* Ending with the type of meeting: `sprint-planning`, `sprint-retrospective` or `backlog-refinement`

For example the agenda and minutes for the sprint planning meeting on 28 April 2020, the start date of sprint 3 would be called: `20200428_sprint03_sprint-planning.md`

The Fujitsu project manager will update the pull request with notes from the meeting after it has been completed and assign a reviewer to verify the minutes.

## Scheduled and completed meetings

This table indicates when Scrum ceremonies will happen for work undertaken by Fujitsu for the Autistica/Turing citizen science project.
The table is in reverse chronological order with the most recent dates at the top of the table.

|Date           | Time | Ceremony | Agenda/Minutes |
|:--------------|:----:|:---------|:---------------|
| 10 June 2020  | - | Sprint Retrospective for Sprint 4 | [20200610_sprint04_sprint-retrospective.md](agendas-and-minutes/20200610_sprint04_sprint-retrospective.md) |
| 20 May 2020   | - | Sprint Planning for Sprint 4 | [20200520_sprint04_sprint-planning.md](agendas-and-minutes/20200520_sprint04_sprint-planning.md) |
| 19 May 2020   | - | Backlog refinement | - |
| 19 May 2020   | - | Sprint Retrospective for Sprint 3 | [20200519_sprint03_sprint-retrospective.md](agendas-and-minutes/20200519_sprint03_sprint-retrospective.md) |
| 12 May 2020   | - | Backlog refinement | - |
| 5 May 2020    | - | Backlog refinement | - |
| 28 April 2020 | - | Backlog refinement | - |
| 28 April 2020 | -  | Sprint planning for Sprint 3 | [20200428_sprint03_sprint-planning.md](agendas-and-minutes/20200428_sprint03_sprint-planning.md) |
| 27 April 2020 | 10:00 - 11:00 | Retrospective for Sprint 2 | [20200427_sprint02_sprint-retrospective.md](agendas-and-minutes/20200427_sprint02_sprint-retrospective.md) |
| 21 April 2020 | 12:00 - 13:00 | Backlog refinement | [20200421_backlog-refinement.md](agendas-and-minutes/20200421-backlog-refinement.md) |
| 14 April 2020 | 12:00 - 13:00 | Backlog refinement | [20200414_backlog-refinement.md](agendas-and-minutes/20200414-backlog-refinement.md) |
| 2 April 2020  | 10:00 - 11:00 | Sprint planning for Sprint 2 | - |
| 1 April 2020  | 10:00 - 11:00 | Retrospective for Sprint 1 | [20200401_sprint01_sprint-retrospective.md](agendas-and-minutes/20200401_sprint01_sprint-retrospective.md) |
| 31 March 2020 | 14:00 - 15:00 | Backlog Refinement | [20200331_backlog-refinement.md](agendas-and-minutes/20200331_backlog-refinement.md) |
| 27 March 2020 | 14:00 - 15:00 | Demo for sprint 1 | - |
