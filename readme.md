# PlusOne real-time voting Angular application
 
A simple application demonstrating how we structure our Angular applications at Nodes.
 
 It's an application that lets anyone:
 - create a PlusOne (ie. a topic)
 - create a suggestion in a PlusOne
 - vote infinite times on a suggestion
 
The application is very basic, but could serve as a starting point for a more advanced application with authentication, graphs, hidden PlusOnes etc.

I have added some comments and doc blocks to the javascript files to explain how things work and why we structure and configure Angular as we have.

## Firebase

If you want to run this project on your own machine, i urge you to set up your own [Firebase](https://firebase.io). You can change the reference to Firebase in the API_ENDPOINTS constant.

## Prerequisites

1. Install [Node.js](http://nodejs.org)

2. Install Yeoman `npm install -g yo`

3. Install these NPM packages globally

```bash
npm install -g bower grunt
```

## Get started

1. Fork or download this repository

2. In the directory, run `npm install` and `bower install`

3. To start the development server run `grunt serve`

4. To build the project run `grunt build` - you can start a server which serves the production files by running `grunt dist`

## Extend it

If you want to add additional features i recommend using the [generator-nodes](https://www.npmjs.com/package/generator-nodes) Yeoman generator (shameless plug!)
