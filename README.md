# BNCHS Robotics Website v5.0 <!-- omit in toc -->
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)	![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) 	![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)     ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![ESLint](https://github.com/Team5599/BNCHS-Robotics-Website-v5/actions/workflows/lint.yml/badge.svg)

The official website for the BNCHS Robotics Team | FRC Team #5599 - The Sentinels!

The goal is to build a beautiful modern new website, while at the same time allowing students to learn the JavaSccript ecosystem with minimal experience. 

Visit the live version over at [beta.team5599.com](https://beta.team5599.com/).

**Built with TypeScript, NextJS, Redux, and MongoDB**


## Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Making Contributions](#making-contributions)
  - [Resources](#resources)
  - [Project Structure](#project-structure)
    - [Components](#components)
    - [Styles](#styles)
    - [Shared Types](#shared-types)
    - [Assets](#assets)
    - [Environment Variables](#environment-variables)
  - [Style Guides \& Best Practices](#style-guides--best-practices)
- [Deploying to Heroku](#deploying-to-heroku)
  - [GitHub Actions](#github-actions)
- [Other Documentation](#other-documentation)
  - [Express v3 Server / v3 REST API](#express-v3-server--v3-rest-api)
  - [Database](#database)
  - [Cloudflare](#cloudflare)
  - [Miscellaneous Documentation](#miscellaneous-documentation)
- [Contributors](#contributors)


# Getting Started

To work on this project, you will need to have [git](https://git-scm.com/downloads) and [NodeJS](https://nodejs.org/en/download/) (v12 or higher) installed. 
If you don't have an editor yet, we recommend getting started with [VSCode](https://code.visualstudio.com/). 


```bash
# Clone the project repository
git clone https://github.com/Team5599/BNCHS-Robotics-Website-v5.git

# Navigate into the project directory
cd BNCHS-Robotics-Website-v5

# Install dependencies
npm install

# Run the project locally
npm run dev

# This will start the nextJS application. A live version of the website will be available for you to preview at https://localhost:3000/

# This project supports "hot-reloading", meaning any changes you make and save in your editor will automatically update in the browser without needing to restart the program or reload the page

```

Visit [http://localhost:3000/](http://localhost:3000/) in your browser to ensure the application is working.

> If you have any issues with installation, please contact @MichaelRooplall


# Making Contributions

Contributions are welcomed by developers, regardless of experience. 

> If you are making a major contribution that adds a new feature, page, or changes a significant amount of code-- please checkout a new branch and make your changes there. You may then submit a pull request for us to review and merge.

>ℹ️ Be sure to have read up on the [Project Structure](#ProjectStructure) and [Style Guides and Best Practices](#StyleGuides) when making your contributions.

```bash
# Create a new branch and automatically switch to it
git checkout -b BranchFeatureName

# Make your modifications
...

# Stage and commit your changes
git add .
git commit -m "<brief description of changes>"

# Push your new branch and its changes
git push origin BranchFeatureName

```
> ℹ️ New branches and comitted changes will not be visible to other users until your push your branch.

> Git is a rather complex topic for new developers. Please don't hesitate to reach out to me with any questions if you get stuck. - @MichaelRooplall


## Resources

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

To learn more about React.js, take a look at the following resources:
- [React.js Documentation](https://reactjs.org/docs/getting-started.html) - Learn about React.js features
- [Intro to React.js](https://reactjs.org/tutorial/tutorial.html) - A introduction to React.js

To learn more about TypeScript, take a look at the following resources:
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn about TypeScript features
- [TypeScript for New Programmers](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) - TypeScript from the perspective of a new Developer
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - TypeScript from the perspective of a JavaScript Developer
- [TypeScript for Java/C# Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html) - TypeScript from the perspective of a Java/C# Developer

To learn more about Redux, take a look at the following resources:
- [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview) - Learn the core concepts, principles, and patterns of Redux
- [Redux Tutorials](https://redux.js.org/tutorials/index) - More resources for learning Redux

To learn more about MongoDB, take a look at the following resources:
- [MongoDB - Quick Guide](https://www.tutorialspoint.com/mongodb/mongodb_quick_guide.htm) - Overview of concepts for a MongoDB Database
- [MongoDB - Useful Resources](https://www.tutorialspoint.com/mongodb/mongodb_useful_resources.htm) - Interactive resources for learning MongoDB

## Project Structure

### Components
Components shared between pages (eg. the Navbar) should be placed in ``src/components/``.
Components that belong to a particular page should be placed in ``src/components/PAGE/``.
Do not place components in ``src/pages/``.

Component files should be placed in folders and named using PascalCase. The ``.tsx`` file should be the same name as the folder-- do not use ``index.tsx`` to create every component.

Example:
```
.
└── src/
    └── components/
        ├── Navbar/
        │   ├── Navbar.tsx
        │   └── navbar.module.css
        └── Robots/
            └── Robot/
                ├── Robot.tsx
                └── robot.module.css
```

### Styles
Global styles or styles pertaining to an entire particular page belong in ``src/styles/``, as opposed to grandular styles for individual components which are placed in stylesheet modules in the component's directory.

Global CSS Variables should be defined in ``src/styles/global.css ``

Example:
```
.
└── src/
    └── styles/
        ├── global.css
        ├── Home.module.css
        └── Robots.module.css
```

### Shared Types
Types shared between components or types shared between the client and the api/backend are placed in ``/src/@shared-types/``

Example:
```
.
└── src/
    └── @shared-types/
        ├── RobotData.ts
        └── SponsorData.ts
```

### Assets
Images, fonts, and other assets (inc. 3d files, sounds, etc.) are placed in their respective folders under ``/public/assets/``

Example:
```
.
└── public/
    └── assets/
        ├── fonts/
        │   └── BLADRMF_.TTF
        ├── images/
        │   └── Logo.png
        └── models/
            └── TheHound.obj
```

> 💡 There are libraries that create small, blurred placeholder images (compressed base64 image strings) that we can preload for the user. These placeholders will then fade into the real HD image when loading is completed. Great for faking early responsivity.

This project also uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font. This functionality came with the NextJS template.

### Environment Variables
API Keys and Secrets are stored in  ``.env.local`` . An ``.env.local.template`` file is provided as a template, and you can request keys from @MichaelRooplall. These are onlu necessary for migrating the backend from Express to NextJS, you can still do front-end development without them..

Example:
```
.
├── .env.local
└── .env.local.template
```

The ``PORT`` environmental variable is automatically populated by Heroku, you do not need to add it to your ``.env.local`` file.

## Style Guides & Best Practices

> Design wise, there are currently no concerete examples of what the end product of the websie should look like. In the future, we hope to have a mood board of Figma members can look at to draw inspiration from. 

To keep the project code manageable between different developers, we strongly reading up on the the following style conventions:

[AirBNB's JavaScript Style Guide](https://github.com/airbnb/javascript)
[AirBNB's React/JSX Style Guide](https://airbnb.io/javascript/react/)

This project doesn't necessarily follow them to a tee, but they are a good starting point for keeping things clean.

Along with these rules, please consider the following:
1. Use react functional components over class components [1]
2. Avoid in-line styles whenever possible by creating a stylesheet module. [2]
3. When using certain css values across multiple pages, eg. an accent color, define the value once as a css root variable in the global stylesheet and import it wherever you need to use it.
4. If you are making a large change or adding a new feature, first checkout a new branch, make your changes, commit the branch, and make a pull request. Someone will review it and merge it in.
5. Don't confuse ``margin`` and ``padding``. Use ``margin`` on elements to space them away from eachother. Use ``padding`` on elements that act as <em>containers</em> to give "borders" of space.
6. Use [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) when making complex layouts wherever reasonable. Use the css rule 'gap' for spacing elements inside of a flexbox container rather than margins when possible.
7. Remember that in-line styles take precedence over styles applied from stylesheets. Also remember that stylesheets are 'cascading', meaning that latter rules have a high priority and can overwrite former rules.

>[1] There are two ways of writing React components. We prefer to use functional components over class components. This may seem challenging for developers coming from object-oriented languages like Java. You can read more about functional components and class components [here](https://www.twilio.com/blog/react-choose-functional-components).

>[2] If you like to build your components with in-line styles first, you can definitely do this and then move them to a modular css file later.

# Deploying to Heroku

The ``heroku`` branch is responsible for deploying to our live production server Heroku.

You cannot push directly to the ``heroku`` branch. You must create a pull request to merge your branch into the ``heroku`` branch. When you create a pull request an ESLint check is run to ensure there are no issues with the updates. If the ESLint check is successful, the pull request can be merged-- this will immediately trigger deployment to the Heroku server.


## GitHub Actions

We use GitHub Actions for our CI/CD pipeline.

Whenever changes are pushed to or merged into the ``main`` or ``heroku`` branch, GitHub Actions runs our ESLint check.

The ESLint check is responsible for identifying and reporting on patterns found in our code, with the goal of making code more consistent and avoiding bugs. It can catch breaking bugs and unoptimizations before we deploy them to Heroku.

When a pull request passes the ESLint check and is successfully merged into the ``heroku`` branch, GitHub Actions runs our Heroku Deploy action, responsible for uploading the code to Heroku.

# Other Documentation

## Express v3 Server / v3 REST API

This project currently uses the [BNCHS-Robotics-Server-v3 Express Server](https://github.com/Team5599/BNCHS-Robotics-Server-v3) to host our API endpoints.

> You must be a member of the GitHub organization to view this repo.

In the future, Express routes should be converted to NextJS [API routes](https://nextjs.org/docs/api-routes/introduction).

## Database

Our current MongoDB database is hosted at [cloud.mongodb.com](https://cloud.mongodb.com).

⚠️ All branches currently share access to the same database. There is no seperate development database. Until one is created, be very mindful of your changes.

Until we have a proper storage solution, backups are currently scattered and hard to locate.

> Database models & schemas are currently only found in the v3 Express Server and are being documented and migrated over. If you need access to a type that isn't migrated yet, please ask @Michael Rooplall.

## Cloudflare

While the project is hosted on Heroku, Cloudflare is responsible for handlign a variety of services:
- Caching
- Auto minificiation
- DNS Management
	-  This includes handling the beta and delta subdomains and redirection to the blog subdomain, as well as email forwarding for @team5599.com emails.
- Analytics
- DDOS Protection

Our SSL certificates are handled by Heroku.

> ℹ️ Did you know we average about 1.29k requests through Cloudflare a day?


## Miscellaneous Documentation
- How we handle custom @team5599.com emails. The difference between having custom alias as just a "forwarder" for inbound emails vs. a proper alias for both outbound and inbound emails.
- The v3 website backend has a custom NodeMailer server for sending authentication emails. It can also be adapted to send out mailing lists. 

<hr>

# Contributors

\<Grid of contributors>