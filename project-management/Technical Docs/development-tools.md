
# Web technologies

In this project, we envisage the use of HTML and CSS as a bare minimum. There is also potentially some scope for client side JavaScript in order to create more dynamic content.

The purpose of this document is to ascertain the correct frameworks and developments tools for this project to use, as well as assessing alternatives.

## Frameworks

Whilst it is not necessary to use a web framework in order to create a web application, it can be used in order to cut the time required to get going.

For example, [Bootstrap](https://getbootstrap.com) and [bulma](https://bulma.io) are front-end web frameworks.

### Bootstrap

Bootstrap prides itself as being the "most popular open source front-end framework in the world" and so that would suggest it is popular with developers. It is relatively simple to use and contains a large selection of [pre-built components](https://getbootstrap.com/docs/4.5/components/alerts/).

It uses HTML, CSS and JavaScript (jQuery).

As far as long term support goes, bootstrap was originally a Twitter offering, which quickly became entirely open-source in 2011. 8 Years later it is still going strong and development on their [github repository](https://github.com/twbs/bootstrap) is very active.

### Bulma

Bulma is much more recent than Bootstrap, but it is certainly up and coming. The provided framework is 100% CSS, and *requires* no JavaScript. This typically means it is much more lightweight, however the real world performance differences would be negligible.

Part of is modernity is that it is built from the ground up on the relativity new "[Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)" which is a CSS display pattern that responded to the proportions of the screen in order to create responsive designs with ease. (As of Bootstrap v4 it uses Flexbox too)

### Conclusion

Bulma is a great CSS framework and perfect for getting started. It provides just enough and is extremely lightweight. However, Bootstrap has an enormous amount of community support, and so for an open-source project it makes sense to go with it.

# Website Rending frameworks

## Django

### What is Django?

Django is a framework written in python which allows for server-side rendering of web applications. It was designed to be utilised for rapid development, taking security and scalability into mind. [(source)](https://www.djangoproject.com)

## Django popularity

### Github Stars: 49.6k

### Github Forks 21.5k

### Github Used By: 417k

## Language popularity

Django uses the python programming language which sits as the second most popular language on GitHub at last review:
![Octoverse Graph](https://user-images.githubusercontent.com/3026030/83363562-47994080-a392-11ea-9da2-351097f7113e.png)
[(source)](https://octoverse.github.com)


## Pros to using Django in context

* There is already a library for [OpenHumans/django-open-humans](https://github.com/OpenHumans/django-open-humans)

* Python is widely known as a good starter language, for example it is taught in lots of schools. This could mean an increase in contributions.

* Django is relatively simple once set up, and so would be easy for someone to contribute even at a later date.

## Cons to Django in context

* Django isn't the quickest rendering too especially when combined with python which is interpreted rather than compiled. 

* The default templating language is limited and contains caveats such as not being able to call a function. (Note - it is possible to use Jinja2 instead, which would be recommended and is much more 'standard' in the industry)

* Django follows a Database driven approach, meaning it may be more applicable in contexts where an ORM (Object Relational Mapper) exists. Django focuses on developing models which are then turned into the [(source)](https://docs.djangoproject.com/en/3.0/intro/overview/)

## Notable uses

* Instagram [(source)](https://reinout.vanrees.org/weblog/2016/11/04/instagram.html) ( *It is likely that parts of Instagram have been rewritten in React due to Facebook's acquisition* )

* ...

# Angular

## What is Angular?

Angular is a TypeScript (A Superset of JavaScript) framework which provides the tooling to enable the creation of web applications. It is client-side rendered meaning that web pages are rendered in the users browser.

## Angular Popularity

### Github Stars: 61.5k

### Github Forks: 16.7k

### No Github used by stats available at the time of writing

## Language Popularity
Angular uses the TypeScript language, which is a superset of JavaScript. Both these languages fair well in terms of use in the open-source community:
![Octoverse Graph](https://user-images.githubusercontent.com/3026030/83363562-47994080-a392-11ea-9da2-351097f7113e.png)
[(source)](https://octoverse.github.com)
TypeScript operates with a very similar syntax to JavaScript, but is not *identical*. It's purpose is mainly to add strong typing to JavaScript in order to make debugging and development errors easier to catch earlier.

## Pros to Angular in context

* Angular requires much less server-side performance (due to client side rendering), meaning it is less susceptible to decreased performance under larger loads.

* Only front-end knowledge is needed to start building, as it doesn't involve server-side code.

* Angular is supported by Google, therefore it is likely to be of interest in the development community for some time.

* Development speed can be greatly increased as the codebase is smaller and the front-end can react to changes instantly, without the need to re-compile or re-run.

## Cons to Angular in context

* Page rendering can be slower as the browser is required to do all of the work. In the same point, angular relies on the power of the end users computer, which can be a limitation

* Compatibility with older browsers can be an issue as the majority of the visible content relies on the end users browser to be displayed.

* There is no existing OpenHumans plugin to use, meaning all interaction with the OH API would need to be written from scratch

## Notable uses

* ...