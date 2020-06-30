# Contributing to the Autistica/Turing Citizen Science project

:tada::balloon::cake: **Welcome to the Autistica/Turing Citizen Science repository!** :cake::balloon::tada:

:dizzy::hatched_chick::sunny: _We're so excited you're here and want to contribute._ :sunny::hatched_chick::dizzy:

The point of this guide is to **welcome new users and contributors to the Autistica/Turing Citizen Science community**.
We hope that these guidelines are designed to make it as easy as possible to get involved.
Don't let trying to be perfect get in the way of being good - we welcome all contributions and would love it if you could follow these guidelines to make sure your contributions can be easily integrated but exciting ideas are more important than perfect pull requests. :heart:

If you have any questions that aren't discussed below, please let us know through one of the many ways to [get in touch](#get-in-touch).

## Table of contents

Been here before? Already know what you're looking for in this guide? Jump to the following sections:

- [Joining the community](#joining-the-community)
- [Get in touch](#get-in-touch)
- [Contributing through GitHub](#contributing-through-github)
- [Writing in Markdown](#writing-in-markdown)
- [Where to start: issues](#where-to-start-issues)
  - [Issue labels](#issue-labels)
- [Making a change with a pull request](#making-a-change-with-a-pull-request)
  - [1. Comment on an existing issue or open a new issue referencing your addition](#1-comment-on-an-existing-issue-or-open-a-new-issue-referencing-your-addition)
  - [2. Fork the `AutisticaCitizenScience` repository to your profile](#2-fork-the-autisticacitizenscience-repository-to-your-profile)
  - [3. Make the changes you've discussed](#3-make-the-changes-youve-discussed)
  - [4. Submit a pull request](#4-submit-a-pull-requestgithub-pullrequest)
- [The process of writing chapters](#the-process-of-writing-chapters)
- [Style Guide](#style-guide)
  - [Writing style](#writing-style)
  - [Sentences](#sentences)
- [Recognising Contributions](#recognising-contributions)

## Joining the community

The Autistica/Turing Citizen Science projecty is a community-oriented and -led project.
We therefore require that all contributions **adhere to our [Code of Conduct](CODE_OF_CONDUCT.md)**.

## Get in touch

There are many ways to get in touch with the Autistica/Turing Citizen Science project team!

- Ping us in our [gitter channel](https://gitter.im/alan-turing-institute/AutisticaCitizenScience).
  - This is our preferred method of open communication and discussion!
    We'd love for you to say hello.
- Join the discussion in our [issues][aut-cit-sci-issues] and [pull requests][aut-cit-sci-prs].
  - Can't find your idea being discussed anywhere?
    Open a new issue!
    (See our [Where to start: issues](#where-to-start-issues) section below.)
- Subscribe to our [mailing list](https://tinyletter.com/AutisticaTuringCitizenScience) with which we send monthly project updates.
- You can contact research associate Georgia Aitkenhead by email at gaitkenhead@turing.ac.uk.
- You can contact lead investigator Kirstie Whitaker by email at kwhitaker@turing.ac.uk.

## Contributing through GitHub

[Git][git] is a really useful tool for version control. [GitHub][github] sits on top of Git and supports collaborative and distributed working.

We know that it can be daunting to start using Git and GitHub if you haven't worked with them in the past, but the project teamare here to help you figure out any of the jargon or confusing instructions you encounter! :heart:

In order to contribute via GitHub you'll need to set up a free account and sign in.
Here are some [instructions](https://help.github.com/articles/signing-up-for-a-new-github-account/) to help you get going.
Remember that you can ask us any questions you need to along the way.

If you would like to follow some lessons, you can follow [this link](https://github.com/malvikasharan/developing_collaborative_document) to learn how to use GitHub and other tools to work collaboratively together online. 

## Writing in Markdown

GitHub has a helpful page on [getting started with writing and formatting on GitHub](https://help.github.com/articles/getting-started-with-writing-and-formatting-on-github).

Most of the writing that you'll do will be in [Markdown][markdown].
You can think of Markdown as a few little symbols around your text that will allow GitHub to render the text with a little bit of formatting.
For example you could write words as **bold** (`**bold**`), or in _italics_ (`_italics_`), or as a [link][rick-roll] (`[link](https://https://youtu.be/dQw4w9WgXcQ)`) to another webpage.

Also when writing in Markdown, please start each new sentence on a new line.
While this formats in the same way as if the new line wasn't included, it makes the [diffs produced during the pull request](https://help.github.com/en/articles/about-comparing-branches-in-pull-requests) review easier to read! :sparkles:

## Where to start: issues

Before you open a new issue, please check if any of our [open issues](https://github.com/alan-turing-institute/AutisticaCitizenScience/issues) covers your idea already.

### Issue labels

The list of labels for current issues can be found [here][aut-cit-sci-labels] and includes:

- [![help-wanted](https://img.shields.io/badge/-help%20wanted-159818.svg)][labels-helpwanted] _These issues contain a task that a member of the team has determined we need additional help with._

  If you feel that you can contribute to one of these issues, we especially encourage you to do so!

- [![question](https://img.shields.io/badge/-question-cc317c.svg)][labels-question] _These issues contain a question that you'd like to have answered._

  There are [lots of ways to ask questions](#get-in-touch) but opening an issue is a great way to start a conversation and get your answer.

- [![good-first-issue](https://img.shields.io/badge/-good%20first%20issue-1b3487.svg)][labels-firstissue] _These issues are particularly appropriate if it is your first contribution to the Autistica/Turing Citizen Science project, or to GitHub overall._

  If you're not sure about how to go about contributing, these are good places to start. You'll be mentored through the process by the maintainers team.
  If you're a seasoned contributor, please select a different issue to work from and keep these available for the newer and potentially more anxious team members.

- [![Enhancement](https://img.shields.io/badge/-enhancement-84b6eb.svg)][labels-enhancement] _These issues are suggesting new features that can be added to the project._

  If you want to ask for something new, please try to make sure that your request is distinct from any others that are already in the queue.
  If you find one that's similar but there are subtle differences please reference the other enhancement in your issue.

- [![Community](https://img.shields.io/badge/-community-8605c1.svg)][labels-community] _These issues relate to building and supporting the Autistica/Turing Citizen Science community._

  This is all about collaborating, so please let us know how we can best support you as a community member.

- [![Bug](https://img.shields.io/badge/-bug-d73a4a.svg)][labels-bug] _These issues are reporting a problem or a mistake in the project._

  The more details you can provide the better!
  If you know how to fix the bug, please open an issue first and then submit a pull request :sparkles:

- [![project-management](https://img.shields.io/badge/-project%20management-bfd86c.svg)][labels-project-management] _These issues help us to coordinate some project logistics._

## Making a change with a pull request

We appreciate all contributions to the Autistica/Turing Citizen Science project.
**THANK YOU** for helping us build this useful resource. :sparkles::star2::dizzy:

All project management, conversations and questions related to the Autistica/Turing Citizen Science project happens here in the [`AutisticaCitizenScience` repository][aut-cit-sci-repo].

The following steps are a guide to help you contribute in a way that will be easy for everyone to review and accept with ease :sunglasses:.

### 1. Comment on an [existing issue][aut-cit-sci-issues] or open a new issue referencing your addition

This allows other members of the Autistica/Turing Citizen Science team to confirm that you aren't overlapping with work that's currently underway and that everyone is on the same page with the goal of the work you're going to carry out.

[This blog](https://www.igvita.com/2011/12/19/dont-push-your-pull-requests/) is a nice explanation of why putting this work in up front is so useful to everyone involved.

### 2. [Fork][github-fork] the [`AutisticaCitizenScience` repository][aut-cit-sci-repo] to your profile

This is now your own unique copy of the Autistica/Turing Citizen Science project.
Changes here won't affect anyone else's work, so it's a safe space to explore edits to the code!

Make sure to [keep your fork up to date][github-syncfork] with the master repository, otherwise you can end up with lots of dreaded [merge conflicts][github-mergeconflicts].
If you prefer working in the browser, [these instructions](https://github.com/KirstieJane/STEMMRoleModels/wiki/Syncing-your-fork-to-the-original-repository-via-the-browser) describe how to sync your fork to the original repository via GitHub.

### 3. Make the changes you've discussed

Try to keep the changes focused.
If you submit a large amount of work all in one go it will be much more work for whomever is reviewing your pull request.
[Help them help you.][jerry-maguire] :wink:

While making your changes, commit often and write good, detailed commit messages.
[This blog](https://chris.beams.io/posts/git-commit/) explains how to write a good Git commit message and why it matters.
It is also perfectly fine to have a lot of commits - including ones that break code.
A good rule of thumb is to push up to GitHub when you _do_ have passing tests then the continuous integration (CI) has a good chance of passing everything. 😸

If you feel tempted to "branch out" then please make a [new branch][github-branches] and a [new issue][aut-cit-sci-issues] to go with it.
[This blog](https://nvie.com/posts/a-successful-git-branching-model/) details the different Git branching models.

Please do not re-write history!
That is, please do not use the [rebase](https://help.github.com/en/articles/about-git-rebase) command to edit previous commit messages, combine multiple commits into one, or delete or revert commits that are no longer necessary.

### 4. Submit a [pull request][github-pullrequest]

We encourage you to open a pull request as early in your contributing process as possible.
This allows everyone to see what is currently being worked on.
It also provides you, the contributor, feedback in real time from both the community and the continuous integration as you make commits (which will help prevent stuff from breaking).

When you are ready to submit a pull request, please add the following information to the contents of the pull request message.

- Describe the problem you're trying to fix in the pull request, reference any related issue and use fixes/close to automatically close them, if pertinent.
- List of changes proposed in the pull request.
- Describe what the reviewer should concentrate their feedback on.

If you have opened the pull request early and know that its contents are not ready for review or to be merged, add `[WIP]` at the start of the pull request title, which stands for "Work in Progress".
When you are happy with it and are happy for it to be merged into the main repository, change the `[WIP]` in the title of the pull request to `[Ready for review]`.

A member of the Autistica/Turing Citizen Science team will then review your changes to confirm that they can be merged into the main repository.
A [review][github-review] will probably consist of a few questions to help clarify the work you've done.
Keep an eye on your GitHub notifications and be prepared to join in that conversation.

You can update your [fork][github-fork] of the [`AutisticaCitizenScience` repository][aut-cit-sci-repo] and the pull request will automatically update with those changes.
You don't need to submit a new pull request when you make a change in response to a review.

You can also submit pull requests to other contributors' branches!
Do you see an [open pull request][aut-cit-sci-prs] that you find interesting and want to contribute to?
Simply make your edits on their files and open a pull request to their branch!

GitHub has a [nice introduction][github-flow] to the pull request workflow, but please [get in touch](#get-in-touch) if you have any questions :balloon:.

## Style Guide

### Writing style

To ensure all text can be read easily by all (including screen readers and non-native english speakers), follow [Gov.uk guidance](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#eg-etc-and-ie) on e.g., i.e., and etc.

* "eg" can sometimes be read aloud as "egg" by screen reading software.
  Instead use "for example" or "such as" or "like" or "including" - whichever works best in the specific context.

* "etc" can usually be avoided.
  Try using "for example" or "such as" or "like" or "including".
  Never use etc at the end of a list starting with these words.

* "ie" is sometimes used to clarify a sentence but is not always well understood.
  Try (re)writing sentences to avoid the need to use it.
  If that is not possible, use an alternative such as "meaning" or "that is".

### Sentences

![](https://imgs.xkcd.com/comics/third_way_2x.png)

When writing all sentences should go on a new line.
This will make no difference to how the text is displayed, there will still be paragraphs, but it will mean that any pull requests will be easier to check; the changes will be on a single line instead of somewhere in a paragraph. Consider the example below.

 ```
Today you are you, that is truer than true. There is no one alive who is youer than you. - Dr Seuss
```

A pull request on this correcting it to have a "." after Dr would show as a change to the whole paragraph.
Contrast this with the next example which will be displayed online in the exact same way, but would see a change to a single line.

```
Today you are you, that is truer than true.
There is no one alive who is youer than you.
- Dr Seuss
```

## Recognising Contributions

The Autistica/Turing Citizen Science project follows the [all-contributors][all-contributors] specification, so we welcome and recognise all contributions from documentation to testing to writing chapters.
You can see a list of current contributors [here](https://github.com/alan-turing-institute/AutisticaCitizenScience/blob/master/contributors.md). 😍

The all-contributors bot usage is described [here](https://allcontributors.org/docs/en/bot/usage).
To add yourself or someone else as a contributor, comment on the relevant Issue or Pull Request with the following:

```
@all-contributors please add <username> for <contributions>
```

You can see the [Emoji Key (Contribution Types Reference)](https://allcontributors.org/docs/en/emoji-key) for a list of valid `<contribution>` types.

**PLEASE NOTE: Only one contributor can be added with the bot at a time!**
Add each contributor in turn, merge the pull request and delete the branch (`all-contributors/add-<username>`) before adding another one.
Otherwise, you can end up with dreaded [merge conflicts][github-mergeconflicts].
Therefore, please check the [open pull requests][aut-cit-sci-prs] first to make sure there aren't any open requests from the bot before adding another.

What happens if you accidentally run the bot before the previous run was merged and you got those pesky merge conflicts?
(Don't feel bad, we have all done it! 🙈)
Simply close the pull request and delete the branch (`all-contributors/add-<username>`).
If you are unable to do this for any reason, please let us know in the [Gitter channel](https://gitter.im/alan-turing-institute/AutistiaCitizenScience) or by opening an issue, and a team member will be very happy to help!

Finally, don't forget to add yourself to the list of contributors [here](https://github.com/alan-turing-institute/AutisticaCitizenScience/blob/master/contributors.md)!

---

*These Contributing Guidelines have been adapted from the [contributing guidelines](https://github.com/alan-turing-institute/the-turing-way/blob/master/CONTRIBUTING.md) of [The Turing Way](https://github.com/alan-turing-institute/the-turing-way/) project which were themselves built from the [contributing guidelines](https://github.com/bids-standard/bids-starter-kit/blob/master/CONTRIBUTING.md) of the [BIDS Starter Kit](https://github.com/bids-standard/bids-starter-kit).*
*Both are used under a CC-BY license.*

[aut-cit-sci-repo]: https://github.com/alan-turing-institute/AutisticaCitizenScience
[aut-cit-sci-issues]: https://github.com/alan-turing-institute/AutisticaCitizenScience/issues
[aut-cit-sci-prs]: https://github.com/alan-turing-institute/AutisticaCitizenScience/pulls
[aut-cit-sci-labels]: https://github.com/alan-turing-institute/AutisticaCitizenScience/labels
[labels-bug]: https://github.com/alan-turing-institute/AutisticaCitizenScience/labels/bug
[labels-community]: https://github.com/alan-turing-institute/AutisticaCitizenScience/labels/community
[labels-comms]: https://github.com/alan-turing-institute/AutisticaCitizenScience/labels/comms
[labels-enhancement]: https://github.com/alan-turing-institute/AutisticaCitizenScience/labels/enhancement
[labels-firstissue]: https://github.com/alan-turing-institute/AutisticaCitizenScience/labels/good%20first%20issue
[labels-helpwanted]: https://github.com/alan-turing-institute/AutisticaCitizenScience/labels/help%20wanted
[labels-project-management]: https://github.com/alan-turing-institute/AutisticaCitizenScience/labels/project%20management
[labels-question]: https://github.com/alan-turing-institute/AutisticaCitizenScience/labels/question
[git]: https://git-scm.com
[github]: https://github.com
[github-branches]: https://help.github.com/articles/creating-and-deleting-branches-within-your-repository
[github-fork]: https://help.github.com/articles/fork-a-repo
[github-flow]: https://guides.github.com/introduction/flow
[github-mergeconflicts]: https://help.github.com/articles/about-merge-conflicts
[github-pullrequest]: https://help.github.com/articles/creating-a-pull-request
[github-review]: https://help.github.com/articles/about-pull-request-reviews
[github-syncfork]: https://help.github.com/articles/syncing-a-fork
[markdown]: https://daringfireball.net/projects/markdown
[rick-roll]: https://www.youtube.com/watch?v=dQw4w9WgXcQ
[jerry-maguire]: https://media.giphy.com/media/uRb2p09vY8lEs/giphy.gif
[all-contributors]: https://github.com/kentcdodds/all-contributors#emoji-key
