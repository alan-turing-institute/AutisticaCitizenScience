# Public demonstration of sprint progress

This document describes the video and updates to the sprint report text file that are publicly shared at the end of each Agile sprint by the Fujitsu team.

 ## Background, problem statement, proposed solution

Described in more detail in [agile-opensource-workflow.md](agile-opensource-workflow.md), there is a tension between *continual* and *continuous* project development.

Specifically, defining work at the beginning of a (usually 2 week) sprint makes it difficult for members of the autistic community to share their feedback with the Fujitsu project team.
A traditional Agile workflow would require them to be present for the end of sprint demonstration.
People who are not paid to be part of the project will struggle to be available at those specific times.
By only presenting to a small group of community members we will not deliver on our values of a [*participatory*](project-values.md#participatory-science) and [*inclusive*](project-values.md#diversity-and-inclusion) development project.

Our proposed solution is to publicly release a [video](#video) visually presenting the work that has been done during the sprint and a [sprint report](#sprint-report) text file detailing the issues and pull requests that were addressed during the sprint.

Members of the project community include autistic people, their families, members of the Open Humans development community, autism researchers, Turing Institute researchers and open source contributors more broadly.
These community members can watch the video and read the sprint report at any time and share their feedback via [GitHub issues](/CONTRIBUTING.md#where-to-start-issues) or the ["always open" Google form](https://bit.ly/AutisticaTuringCitSciForm).

## Sprint report

The [sprint report text file](/SPRINTREPORT.md) is similar to a [standard changelog file](https://keepachangelog.com/en/1.0.0/).
The goal of the sprint report is to communicate project progress to stakeholders including the Turing research team and community members who are not able to attend the [sprint retrospective and planning meeting](#sprint-retrospective-and-planning-meeting).

It is distinct from the changelog which is only updated on a new release of the project.

The sprint report should contain a list of issues that have been [closed](#closed-issues), [progressed](#progressed-issues) or [opened](#opened-issues) during the sprint.
It should also include a bullet point list of [challenges](#challenges) that the team faced, and any issues where [community feedback](#community-feedback-requests) is particularly requested.

### Closed issues

This section of the sprint report contains links to issues that were closed during the sprint.
Associated merged pull requests should also be linked (if applicable).

If necessary, change the issue title to make the sprint report easier to read.

#### Template section format

> * [`#i`](https://github.com/alan-turing-institute/AutisticaCitizenScience/issues/`i`): `issue title`
>   * Assocated pull requests: [`#a`](https://github.com/alan-turing-institute/AutisticaCitizenScience/pull/`a`), [`#b`](https://github.com/alan-turing-institute/AutisticaCitizenScience/issues/`b`)
>   * *Additional notes if necessary.*

### Progressed issues

This section of the sprint report contains links to issues that were addressed during the sprint but which are not yet closed.
Associated "work in progress" (`[WIP]`) or "ready for review" (`[MRG]`) pull requests should also be linked (if applicable).

If necessary, change the issue title to make the sprint report easier to read.

#### Template section format

> * [`#k`](https://github.com/alan-turing-institute/AutisticaCitizenScience/issues/`k`): `issue title`
>   * Assocated pull requests: [`#e`](https://github.com/alan-turing-institute/AutisticaCitizenScience/pull/`e`), [`#f`](https://github.com/alan-turing-institute/AutisticaCitizenScience/issues/`f`)
>   * *Additional notes if necessary.*

### Opened issues

This section of the sprint report contains links to issues that were opened but not addressed during the sprint.

If necessary, change the issue title to make the sprint report easier to read.

#### Template section format

> * [`#m`](https://github.com/alan-turing-institute/AutisticaCitizenScience/issues/`m`): `issue title`
>   * *Additional notes if necessary.*

### Challenges

This section of the sprint report captures challenges and blockers that the Fujitsu team faced during the sprint.
The challenges should include links to the relevant issues and pull requests where applicable.

#### Template section format

> * `challenge/blocker description`
>   * Related to issues: [`#o`](https://github.com/alan-turing-institute/AutisticaCitizenScience/issues/`o`), [`#p`](https://github.com/alan-turing-institute/AutisticaCitizenScience/issues/`p`)
>   * *Additional notes if necessary.*

### Community feedback requests

This section of the sprint report captures issues and pull requests where community feedback is particularly requested.

This section should always link to an issue asking for feedback on the sprint demo itself.
That issue must contain a link to the video and to the appropriate section in the Fujistu [sprint report](/SPRINTREPORT.md).

This section may also contain links to working prototypes of the website that community members can interact with and provide their thoughts on.
Make sure that these links have associated issues to capture the feedback (which can be the same as the sprint report issue, or a separate one as appropriate).

#### Template section format

> * [`#M`](https://github.com/alan-turing-institute/AutisticaCitizenScience/issues/`M`): issue to collect feedback on sprint `N`
>   * Link to video: [`link-to-youtube`](`link-to-youtube`)
>   * Link to sprint report: [SPRINTREPORT.md#`N`](SPRINTREPORT.md#sprint-`N`)
>   * Link to interactive wireframe/prototype: [`link-to-wireframe`](`link-to-wireframe`)

## Video

The video is a 3-5 minute summary of the sprint report.

We recommend formatting it as screen captured presentation with spoken descriptions.

The screen capture may include a powerpoint presentation of the [closed](#closed-issues), [progressed](#progressed-issues) and [opened](#opened-issues) issues, the [challenges](#challenges) that the team faced, and to highlight requests for[community feedback](#community-feedback-requests).
Alternatively the recording could be of a navigation of changed to the GitHub repository.

The video recording is particularly helpful in showing how community members can navigate interactive wireframes or prototypes.

The video should be uploaded to YouTube and made publicly available.

## Sprint timeline

This documentation assumes a two week / ten working day sprint that starts on a Monday (day 1) and finishes on a Friday (day 10).

### Sprint report and video

We recommend that the sprint report and video are uploaded on day 9 (Thursday) to give members of the research team at the Alan Turing Institute time to watch the video.

**It is the responsibility of the Fujitsu development team to ensure that they have internal approval to release the video publicly before the end of the sprint.**

### Sprint retrospective and planning meeting

The sprint retrospective discussion will take place on the 10th day of the sprint.

In this meeting the Fujitsu team members, researchers at the Alan Turing Institute, and at least one member of the autistic community will discuss the work shared in the sprint report and accompanying video.

This discussion will always include a reflection on community feedback provided on the _previous_ sprint.
If necessary new user stories will be created and added to the backlog.

After the retrospective, the project team will set priorities for the next sprint.

### Learning and development day

Day 10 (Friday) of the two week sprint is designated as a learning and development day.
We recommend that the Fujitsu team use this day to learn more about autism and the autistic community.

The Turing research team recommend that this day is spent reading and discussing [Autism: A New Introduction to Psychological Theory and Current Debate](https://smile.amazon.co.uk/Autism-Introduction-Psychological-Theory-Current/dp/1138106127) by Dr [Sue Fletcher-Watson](https://www.ed.ac.uk/profile/dr-sue-fletcher-watson) and Prof [Francesca Happé](https://www.kcl.ac.uk/people/francesca-happe).
Each chapter is less than 20 pages long and suitable for a general audience.
The team could read one chapter per sprint cycle and reflect together on how their work is delivering on the needs of the autistic community.

