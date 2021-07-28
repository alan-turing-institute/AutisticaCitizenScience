# Accessibility Checklist

This file lists criteria for accesibility according to gov.uk. 
While we will create more rigorous and specific standards of accessibility and customisation for our project outputs in relation to autism, this provides a thoroughly tested bar for inclusion across multiple dimensions. 
Please use this document to check any online project outputs for accessibility. 

## HTML checks - Check any video players are accessible

#### Summary

You need to check that any video players are accessible. This means checking that the buttons you need to use to interact with the video player are marked up in a way that a screen reader would recognise.

#### What needs to be done?

You’ll need to inspect the page HTML to check whether you’re meeting this requirement. Bring up the page HTML using the same method you used to check whether your text content was marked up properly.

Once you’ve done that, right-click (or left-click if you’re using Edge) one of the video player buttons and select ‘inspect’ or ‘inspect element’, depending on the browser you’re using.

Check whether the button’s been given a name like ‘Play’ or ‘Pause’ - if it has, the name will likely appear as part of a ‘title’ or ‘aria label’ tag.

If there’s no text indicating what the button does then it’s probably not been marked up properly. This means a screen reader will not know what the button’s for and that users need to be able to see and understand the button icon to work it out for themselves.


## HTML checks - check the language the content is written in 

#### Summary

A screen reader needs to know what language a page is written in so it uses the correct speech libraries for accent and pronunciation. It only knows this if the language is specified in the page HTML.
Deadline

#### What needs to be done?

You’ll need to check the HTML of your sample content pages to see whether your website does this. To inspect the page HTML, use the same method you used when checking whether your content was marked up appropriately.

Once you’ve opened the HTML, scroll to the top of the panel. You should see a <!doctype html> tag. Directly under that you should see an <html lang=” tag. This is where the screen reader finds out the page language.

If the page is written in English, the tag should read <html lang=“en” or <html lang=“en-gb”. If it’s empty, the screen reader cannot tell what language the page is in.

If any of your sample pages contain content written in other languages, you’ll need to check that’s marked up properly too, using the country code for the relevant language.
                                                            
## HTML checks - Checking tables and bullet lists are styled properly
                                                                               
#### Summary 

Check that any tables and bullet lists have been styled properly. If they are not styled properly, screen reader software will not recognise what they are and will not convey the information in a way that makes sense to users.
                                                                                
### What needs to be done?

**View HTML page** 
The way you view your page’s HTML depends on which browser you’re using. If you’re using:

Google Chrome, right-click the page element you want to check and select ‘inspect’
Safari, right-click the page element you want to check and select ‘inspect element’ - you might need to enable Safari developer tools first
Edge, press ‘F12’, then hold ‘Ctrl’ and ‘B’ - once you’ve done that, left-click the page element you want to check
Firefox, right-click the element you want to check and select ‘inspect element’ - you might need to enable Firefox web developer first
This should open up a panel somewhere on your screen showing the HTML for the page. 

**Check a few tables and bullet lists from your sample pages**. Once you’ve opened up the source code, look out for the following sorts of tags:

for tables, look out for td, th and tr in <>
for bullet lists, look out for ul and li in <>
If you can see these tags, it’s likely the elements have been styled properly.

## Search and other forms of navigation

### Summary

You’ll need to do some checks to see how accessible your website’s navigation is. Navigation includes things like search, site maps and navigation categories.

### What needs to be done?

**Check your navigation behaves consistently**
Things like search bars and breadcrumb trails (the list of links that appear at the top of the page to show where in your website’s navigation you currently are) should behave in the same way wherever they appear on your website.

You can check for this by going to a few of your sample pages and checking whether the navigational elements are presented consistently. If things like search boxes or navigation menus appear in different places across the pages, you’re probably not meeting this requirement.

**Check links do not trigger on the down-press of a mouse**
To open a link, a user has to click their mouse (known as a ‘down event’) and release it (known as an ‘up event’).

You need to check that this is how your links behave. Check a sample of your content pages and interact with some of the links - specifically to see whether the links are opened on the down click of the mouse, or whether they only open once you release the mouse button.

If they’re triggered on the down event, you’re likely not meeting this requirement.

## Check whether there’s an alternative for people who cannot see maps

### Summary

Some websites contain interactive maps.

It’s very hard to make a map itself accessible to people who have visual impairments using some sorts of assistive technology. At the least, you should provide an alternative for users who cannot use the map.

### What needs to be done?

It’s very hard to make a map itself accessible to people who have visual impairments using some sorts of assistive technology. At the least, you should provide an alternative for users who cannot use the map.

The Pension Wise website does this well. For instance, when you search for your nearest contact centre, you’re presented not only with a map you could use to navigate, but also with a text address any user could access.

Check any maps on your website to see whether you’re providing alternative routes for users who cannot use the map.

## Pop-ups and interactive or flashing content

### Summary

Pop-ups or flashing images can be very distracting. They should not be there by default and users need to be able to disable or dismiss these elements easily.

### What needs to be done?

**Check that users can disable animated or moving content**
Things like scrolling carousels or blinking images can be very distracting for people with cognitive disabilities.

If your website contains these sorts of elements, you need to check whether users can disable them.

Go to any of your sample pages containing these items and see if there’s a way to stop them. Try clicking on them, or interacting with the surrounding content. Check to see if there’s a button to stop or pause the item.

**Check for content that plays automatically**
Some websites play audio or video content automatically when a user refreshes or opens a page.

If this applies to your website - and the content plays for more than 3 seconds - you’ll need to check users can either change the volume or stop.

## Checking content is usable when zoomed in or magnified

### Summary

Some users with visual impairments use screen magnification tools that zoom into the page content, or increase the size of the text. You’ll need to check your content is usable for people using these tools.

### What needs to be done?

 - **Checking content is usable when you enlarge the text**
Take a couple of the forms and content pages from your sample and see what happens if you increase the font size.

You can usually do this by changing the settings in your browser. For example, in Chrome you do this by choosing “Settings”, and changing the “Font size” from “medium” to “very large”.

Once you’ve increased the font size, try to complete a few tasks using your sample pages. If the page resizes or restructures properly, it should not obscure any of the important information or buttons you’d need to progress through a form.

 - **Checking how the page behaves when users zoom in**
You’ll need to check what happens to your pages when you adjust the page zoom in your browser. You can do this either through your browser’s settings or by using a keyboard shortcut - usually ‘Cmd’ or ‘Ctrl’ plus the ‘+’ key.

Use the same sample of pages you used when tweaking the size of the text. For each page, see what happens when you zoom progressively further in.

If your website is handling this in an accessible way, then you should be able to navigate without using horizontal scroll: the content should reformat in a way that means you only need to use vertical scrolling.

## Navigating just using a keyboard 

### Summary

Some of your users need to navigate without a mouse, just using a keyboard. You’ll need to do some checks to see how easy it is for them to do that.

The main keys you’ll be using to navigate are the space bar, ‘Tab’, ‘Enter’ and ‘Esc’ keys. ‘Tab’ is the key that lets you jump between page elements, while ‘Enter’ and ‘Esc’ let you interact with and dismiss those page elements. The space bar activates buttons, checkboxes and radio buttons.

You might need to enable the tabbing function if you’re using Safari.

### What needs to be done?

 - Check you can tell where you are on the page
When you navigate just using a keyboard, you do not have the mouse cursor to let you know where the focus is on the page. You need to make sure there’s another way for users to orientate themselves and understand which page element they’re focusing on.

For example, if you tab through the GOV.UK homepage you’ll notice that the page element in focus is highlighted very clearly with a prominent orange block.

 - Spend a few minutes tabbing through a few of the sample pages you selected. Ask yourself whether it’s clear where on the page you’re focused - if it takes you a while to notice which element is in focus then you’re probably not meeting this requirement.

 - Check the order makes sense when tabbing
While you were tabbing through the page elements, you should have noticed whether the tabbing moved in a logical order. For instance, if you tab on to a navigation bar, you’d expect to be able to tab through the entire bar without the focus jumping off elsewhere on the page.

 - Spend a few minutes testing this on a few of your sample pages, to check you can tab in a logical order.

 - Check nothing unexpected happens when tabbing through a page
When you were tabbing through your sample pages, you should have noticed whether anything unexpected happened. For example, if tabbing onto an element triggered anything like:
a new web page to open
a navigation menu to open
Another thing to look out for is whether you can interact with all the page elements you’d expect to.

For example, some websites like the Service Manual feature expandable, hide and reveal style navigation. If these navigational elements are marked up properly, you can expand and close them with a keyboard as you would with a mouse.

But if they’re marked up incorrectly, you’ll likely tab straight past them using just a keyboard. Look out for things like this.

- Check you do not get stuck when navigating through content
While you’re tabbing through your sample pages, note down any places where you get stuck.
Getting stuck means ending up somewhere you cannot navigate away from using just your keyboard. For instance, you might activate a pop-up or interactive element that you cannot skip away from just by using the ‘Esc’ key.
People not using a mouse would not be able to move away from a page element like this, which could prove very frustrating.
If you find you get stuck, you’re probably not meeting this requirement.

 - Check forms are still usable without a mouse
Take your sample of forms and see if you can complete them without using a mouse. This means using ‘Tab’ to jump between the form elements and ‘Enter’ to interact with any navigation elements, like ‘next’ or ‘submit’ buttons.
If there are form elements you cannot get through using just your keyboard, then your website is not meeting this requirement.

 - Check users can skip to the main content on a page
Lots of websites contain several links and navigational elements in the header at the top of the page. Users need to be able to skip past these links straight to the main page content if they want to, so they’re not forced to tab through each item individually every time they open a new page.
Some websites give users the chance to skip these header blocks. For instance, if you hit ‘Tab’ when you arrive at the GOV.UK home page, you’ll see the option to ‘Skip to main content’. If you hit ‘Enter’, the page will refocus past the header block down to where the actual page content begins.

See if the same thing happens when you hit ‘Tab’ after refreshing a page on your website.

## Tests using a mobile or tablet device

### Summary

You’ll need to start by doing some checks using a mobile or tablet device to check that your website is usable on these types of device.

### What needs to be done?

 - Check the page orientation

You’ll need to take a few of your sample pages and check they respond properly when you try to change the page orientation.

You can do this by loading up a page on a mobile or tablet device and turning the screen from portrait to landscape a few times. The page should respond to fit that view, rather than staying locked in place.

 - Check you can navigate using just one finger

Some users have limited dexterity or range of movement, which means it’s important that they do not have to use complex gestures that involve more than one finger to navigate your website on their mobile or tablet device. There needs to be a simple alternative that they can use that only requires one finger.

Go through your sample content pages and check whether it’s possible to navigate using just one finger. Try things like double-tapping to zoom in and out of the page and holding or hovering your finger over an element to highlight it.

It’s worth trying to complete a couple of forms using these techniques, too.

 - Check you’re not relying on complex motions
Some more interactive websites or apps require users to do things like shake or tilt their device to complete an action.

This will not apply to most websites, but if it applies to yours then you need to make sure there’s an alternative for users who cannot move their device in these ways.

Check that none of your sample pages require any of these types of interactions - and if they do, that there’s another way of completing that task.

## Check the PDFs and other documents

### Summary

You’ll need to check your sample of PDFs and other documents (for example, Word documents, spreadsheets and presentations). Your sample should include:

documents that are essential to users accessing one of your services, no matter when they were published

non-essential documents (such as leaflets) that were published on or after 23 September 2018

### What needs to be done?

- Check the documents have meaningful titles. First, check the documents have descriptive titles that explain what they’re for.
-
An example of a good title is something like “Blue badge application form”, as it makes clear what the document is and what a user would use it for. Something like “Accounts - ‘18” is not as good, because it’s vague and does not explain in enough detail what the document is. 

- Check for headings. For this test, you’ll need to open a few of the documents in a document editor. You could use something like Google Docs or Microsoft Word for this if you do not have PDF editing software. The first thing to check is that the document is broken up into sections - and that those sections all have descriptive headings. This will allow people using screen readers to scan the document and jump to the section that’s relevant to them. You’ll also need to check that the headings are tagged properly - for instance, they’ve been created using the styles gallery in Microsoft Word or something similar. That way, a screen reader will recognise them as headings and will let users scan through them to find the content they need. If the headings are just styled using bold, the screen reader will not know they’re headings. 
- Check the documents convey instructions in an accessible way
You need to make sure you’re not conveying instructions in a way that relies on a user’s ability to see the document.
For example, only sighted users will understand instructions like: ‘click the round button’ ‘click the big button below’ ‘click the red button’ Users who cannot see the page will not know what you’re referring to, because you need to be able to see the page to identify a button as ‘big’, ‘red’ or ‘round’. So check your document sample and look out for these types of instructions.
- Check that any link text makes sense. Next, check that any link text you’re using clearly explains where the link will take the user. This is important because screen reader users often scan through lists of links in isolation. This means they do not have the surrounding context to help them understand what the link is for. You can check your links by looking at your sample pages and just reading the link text - without paying attention to the surrounding content. If the links still make sense even in isolation and clearly explain where the links go, it’s likely the text you’re using is accessible. If you’re using link text like ‘click here’ or ‘more information’ then you’re probably not meeting this requirement, as link text like that does not describe where the link will go or what it’s for.
- Check that images, charts and tables have a description .You’ll need to check that any visual way of conveying data like a table, chart or image is described in the surrounding text. That way, users who cannot see the images can still access the information the image conveys.

## Check users can review their answers before submitting a form

### Summary

Users need to be able to check their answers before submitting certain types of form, to confirm they’ve entered the correct information. This only applies to forms where there would be serious consequences to them making a mistake - for example, financial transactions or something that enters them into a legal contract.

### What needs to be done?

You can test this by going to any of your sample forms that meet these criteria and working your way through them. See if you’re presented with a page that lets you check your answers before submitting the form
