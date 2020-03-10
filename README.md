# CurrentTrack Partial Frontend
Rough draft of the CurrentTrack Revamp.

## Getting Started
- Install Nodejs from [Nodejs Official Page](https://nodejs.org/en/)
- Open your terminal
- Navigate to the project
- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- Run `npm run dev` or `yarn serve` to start a local development server
- A new tab will be opened in your browser

You can also run additional npm tasks such as
- `npm run build` to build your app for production
- `npm run lint` to run linting.

## Vuetify Material Dashboard
Vuetify Material Dashboard is a beautiful resource built over [Vuetify](https://vuetifyjs.com/en/) and [Vuex](https://vuex.vuejs.org/installation.html). Vuetify Material Dashboard is the official Vuejs version of the Original [Material Dashboard](https://www.creative-tim.com/product/material-dashboard). Using the Dashboard is pretty simple but requires basic knowledge of Javascript, [Vue](https://vuejs.org/v2/guide/), [Vuex](https://vuex.vuejs.org/installation.html) and [Vue-Router](https://router.vuejs.org/en/).

## Vuetify
Vuetify is developed exactly according to Material Design spec. Every component is hand crafted to bring you the best possible UI tools to your next great app. The development doesn't stop at the core components outlined in Google's spec. Through the support of community members and sponsors, additional components will be designed and made available for everyone to enjoy.


## Vuex

Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official [devtools](https://github.com/vuejs/vue-devtools) extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.

## Vue-cli

We used the latest 3.x [Vue CLI](https://github.com/vuejs/vue-cli) which aims to reduce project configuration
to as little as possible. Almost everything is inside `package.json` + some other related files such as
`.babel.config.js`, `.eslintrc.js` and `.postcssrc.js`.

Let us know what you think and what we can improve below. And good luck with development!


#### Special thanks
During the development of this dashboard, we have used many existing resources from awesome developers. We want to thank them for providing their tools open source:
- [Vuetify](https://vuetifyjs.com/en/) for the wonderful framework


Let us know your thoughts below. And good luck with development!

## Table of Contents

* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)

## Demo

- [Start page](https://demos.creative-tim.com/vuetify-material-dashboard)
- [Notifications page](https://demos.creative-tim.com/vuetify-material-dashboard/#/notifications)

[View More](https://demos.creative-tim.com/vue-material-dashboard-pro).


## Quick start

Quick start options:

- Download from [Creative Tim](https://www.creative-tim.com/product/vuetify-material-dashboard)


## Documentation
The documentation for the Vuetify Material Dashboard is hosted at our [website](https://demos.creative-tim.com/vuetify-material-dashboard/documentation).


## File Structure

Within the download you'll find the following directories and files:

```
vuetify-material-dashboard
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── babel.config.js
├── cypress.json
├── jest.config.js
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── img
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── vuetify.svg
│   ├── components
│   │   ├── base
│   │   │   └── Card.vue
│   │   ├── core
│   │   │   ├── AppBar.vue
│   │   │   ├── Drawer.vue
│   │   │   ├── Filter.vue
│   │   │   ├── Footer.vue
│   │   │   └── View.vue
│   │   ├── helper
│   │   │   └── Offset.vue
│   │   └── material
│   │       ├── Card.vue
│   │       ├── ChartCard.vue
│   │       ├── Notification.vue
│   │       └── StatsCard.vue
│   ├── main.js
│   ├── plugins
│   │   ├── axios.js
│   │   ├── base.js
│   │   ├── chartist.js
│   │   ├── components.js
│   │   ├── index.js
│   │   └── vuetify.js
│   ├── router
│   │   ├── index.js
│   │   └── paths.js
│   ├── store
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── modules
│   │   │   ├── app
│   │   │   │   ├── mutations.js
│   │   │   │   └── state.js
│   │   │   └── index.js
│   │   ├── mutations.js
│   │   └── state.js
│   ├── utils
│   │   └── vuex.js
│   └── views
│       ├── Dashboard.vue
│       ├── Icons.vue
│       ├── Maps.vue
│       ├── Notifications.vue
│       ├── TableList.vue
│       ├── Typography.vue
│       ├── Upgrade.vue
│       └── UserProfile.vue
├── tests
│   ├── e2e
│   │   ├── plugins
│   │   │   └── index.js
│   │   ├── specs
│   │   │   └── test.js
│   │   └── support
│   │       ├── commands.js
│   │       └── index.js
│   └── unit
│       └── example.spec.js
├── vue.config.js
└── yarn.lock
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">


## Resources
- [Live Preview](https://demos.creative-tim.com/vuetify-material-dashboard)
- Download Page: https://www.creative-tim.com/product/vuetify-material-dashboard
- Documentation is [here](https://demos.creative-tim.com/vuetify-material-dashboard/documentation)
- License Agreement: https://www.creative-tim.com/license
- Support: https://www.creative-tim.com/contact-us
- Issues: [Github Issues Page](https://github.com/creativetimofficial/vuetify-material-dashboard/issues)
- Vue Material Dashboard - [demo](https://www.creative-tim.com/product/vue-material-dashboard?ref=github-md-pro)
- For Front End Development - [Material Kit Pro ](https://www.creative-tim.com/product/material-kit-pro?ref=github-md-pro)

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.

## Licensing

- Copyright 2018 Creative Tim (https://www.creative-tim.com)
- Creative Tim [license](https://www.creative-tim.com/license)
