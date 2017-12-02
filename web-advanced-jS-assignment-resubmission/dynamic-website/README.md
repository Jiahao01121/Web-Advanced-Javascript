# Online judge project client side
#### Date: Nov 18 - Nov 21

# Online judge project server side
#### Under Development
---
## Online Demo:
	[APP](34.215.110.129)

## Library & Tech & Language used:
 - AngularJS
 - ng CLI
 - typescript
 - webpack
 - node package manager
 - nodeJS
 - es6
 - typescript
 - express & bodyParser

## Project description
 - Build small app that allow user to submit code and give a feedback rank/score that based on code quality (eg: rating base on time complexity & space complexity). similar to [LeetCode](https://leetcode.com/).


## Highlight:
- Dynamic:
  - using Front-end Routing to dynamically distribute page base on URL endpoint (access different service by using different URL).
  - fetch data from data service that load model(MV*).
  - view generated by four component.

- API
    - data retrieved from model.

- Under Development / TODO:
    - using express to build api so that data retrieving process can be done under HTTP Request, in order to achieve RESTful design patterns.
    - save data to MongoDB.
    - set up OAuth2.

---

## Production Build
```
oj-client
│
└──── dist (production build using webpack)
```


## Development environment

##### Prerequisite:
Run `npm install` to set-up the environment.

##### File Structure:
```
oj-client
│
├── e2e (end to end test)
├── package.json
├── .angular-cli.json (config file)
├── disc (production build)
│   .
│   .
│   .
│   
├── src
│   ├── app
│         ├── app.component.html (html entry point)
│         └── app.component.ts (javascript entry point)
│   ├── components (component folder)
│   └── model (data)
│   .
│   .
│   .
│    
├── node_modules
│   .
│   .
│   .
│    
└README.md (Detailed info about the project)
```