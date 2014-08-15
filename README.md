Ti-Dev
=================

How to modify the site
---------------

The website has been built using [middleman](http://middlemanapp.com/)

* the base layout for all the pages (currently only the main page) is `source/layouts/main.erb`
* all the multi-language pages must be placed into the `source/localizable/` folder
* all the template fragments must be placed into the `source/partials/` folder and must follow middleman's naming conventions
* all the yaml language files must be placed into the `locales/` folder

How to run locally
------------------
```
$ bundle exec middleman server
```

How to publish the site on github pages
------------------
```
rake publish
```