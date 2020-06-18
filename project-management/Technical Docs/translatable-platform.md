# Translations in Django

# Python configuration

``` settings.py

from django.utils.translation import ugettext_lazy 

# Set up a list of languages to be supported
LANGUAGES = (
    ('en', _('English')),
    ('fr', _('French')),
)

# If the browser doesn't send us a locale, use this:
LANGUAGE_CODE = 'en'

# Configure the base dir for the locale path
LOCALE_PATHS = (
    os.path.join(BASE_DIR, 'locale'),
)

```

Ensure that:

- `django.contrib.sessions.middleware.SessionMiddleware`
- `django.middleware.locale.LocaleMiddleware`
- `django.middleware.common.CommonMiddleware`

are in the `MIDDLEWARE_CLASSES` dict.

# How to generate new translations

Ensure the language code you use is in the language configuration as above.

You must also ensure it is a valid as per [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

# How to compile translations

# How to make use of the translations

## In a django template file

```
<h1>{% trans 'Welcome' %}</h1>
```


## In the view
... *pending* ...


# How to Contribute to Translations

The section will detail how the community can get involved with adding translations.

## The translation files

The files which include the translations which Django uses are at:
`project_root/locale`

| Language | locale code | File                     |
|----------|-------------|--------------------------|
| English  | en          | en/LC_MESSAGES/django.po |
| French   | fr          | fr/LC_MESSAGES/django.po |
| ...      |             |                          |

## How the files look

Each section within the `.po` file looks like this:

<img width="390" alt="image" src="https://user-images.githubusercontent.com/3026030/84674536-f9a04300-af22-11ea-8788-7c5bda66a693.png">

The msgid is the tag, which the Django templating language uses to load the translations in depending on the users Locale setting; and the comment above shows the location of the translations use - file path and line number.

Where this is a single word, the msgid matches the word needing the translation - however in the event that this is a phrase the msgid represents the marker for the translations' placement. To find the phrase needed to be translated, you can look in the other language files (for example English) to find the orignal phrase.
