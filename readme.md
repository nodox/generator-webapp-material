# Webapp generator with Material Design 
[![Build Status](https://travis-ci.org/snatera15/generator-webapp-material.svg?branch=master)](https://travis-ci.org/snatera15/generator-webapp-material)

Yeoman generator that scaffolds out a front-end web app with a material design theme.


## Features

* CSS Autoprefixing
* Built-in preview server with LiveReload
* Automagically compile ES6 (with Babel) & Sass
* Automagically lint your scripts
* Automagically wire up your Bower components with [grunt-wiredep](#third-party-dependencies).
* Awesome Image Optimization (via OptiPNG, pngquant, jpegtran and gifsicle)
* Mocha Unit Testing with PhantomJS
* Bootstrap with Material design theme (Optional)
* Leaner Modernizr builds (Optional)
* Heroku ready deployment settings

For more information on what `generator-webapp-material` can do for you, take a look at the [Grunt tasks](https://github.com/yeoman/generator-webapp/blob/master/app/templates/_package.json) used in our `package.json`.


## Getting Started

- Install: `npm install -g generator-webapp-material`
- Run: `yo webapp-material`
- Run `grunt` for building and `grunt serve` for preview[\*](#grunt-serve-note). `--allow-remote` option for remote access.


## Deployment To Heroku

- Setup heroku-toolbelt
```sh
$ grunt build`
$ heroku create [PROJECT_NAME]
$ git push heroku master
```

#### Third-Party Dependencies

*(HTML/CSS/JS/Images/etc)*

Third-party dependencies are managed with [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep). Add new dependencies using **Bower** and then run the **Grunt** task to load them:

```sh
$ bower install --save jquery
$ grunt wiredep
```

This works if the package author has followed the [Bower spec](https://github.com/bower/bower.json-spec). If the files are not automatically added to your source code, check with the package's repo for support and/or file an issue with them to have it updated.

To manually add dependencies, `bower install --save depName` to get the files, then add a `script` or `style` tag to your `index.html` or another appropriate place. If using bower reference them from index.html, using `src="bower_components"` or `src="/bower_components"`.

*Testing Note*: a project checked into source control and later checked out needs to have `bower install` run from the `test` folder as well as from the project root.


#### Grunt Serve Note

Use `grunt serve` to preview versions of your project.


## Docs

We have [recipes](docs/recipes) for integrating other popular technologies like Compass.



## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md).
