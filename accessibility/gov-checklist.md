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


# HTML checks - check the language the content is written in 

#### Summary

A screen reader needs to know what language a page is written in so it uses the correct speech libraries for accent and pronunciation. It only knows this if the language is specified in the page HTML.
Deadline

#### What needs to be done?

You’ll need to check the HTML of your sample content pages to see whether your website does this. To inspect the page HTML, use the same method you used when checking whether your content was marked up appropriately.

Once you’ve opened the HTML, scroll to the top of the panel. You should see a <!doctype html> tag. Directly under that you should see an <html lang=” tag. This is where the screen reader finds out the page language.

If the page is written in English, the tag should read <html lang=“en” or <html lang=“en-gb”. If it’s empty, the screen reader cannot tell what language the page is in.

If any of your sample pages contain content written in other languages, you’ll need to check that’s marked up properly too, using the country code for the relevant language.
