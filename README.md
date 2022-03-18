<p align="center">
  <a href="" rel="noopener">
 <img width=150px height=100px src="https://www.freepnglogos.com/uploads/whatsapp-logo-light-green-png-0.png" alt="Project logo"></a>
</p>

<h3 align="center">whatsapp_clone</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues]https://img.shields.io/bitbucket/issues/anounboy/whatsapp_clone?color=green)](https://github.com/anounboy/whatsapp_clone/issues)
[![GitHub Pull Requests](https://img.shields.io/bitbucket/pr/anounboy/whatsapp_clone?color=green)](https://github.com/anounboy/whatsapp_clone/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This is a simple whatsapp clone built using react and use firebase a backend.
And it use firebase google authenticator for login. You can login with google in it. 
## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

## PreView 
  [PREVIEW]('https://raw.githubusercontent.com/anounboy/whatsapp_clone/master/Screenshot%202022-03-18%20134728.png')
  [WEBPAGE]('https://reactwpc.web.app/')

### Prerequisites

What things you need to install the software and how to install them.

```
    npx create-react-app PROJECT_NAME
    cd PROJECT_NAME
    npm start
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
  git clone git@github.com:anounboy/whatsapp_clone.git
  cd whatsapp_clone
  npm i firebase 
  npm i react-script
  npm i firebase
  npm i react-dom
  npm install @mui/material
```

### Fire base Connect

  create a config.js file and add the config key on it syntax should be
  ```
  
export const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: DOMAIN_NAME,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: ...,
    appId: ..,
    measurementId: ...
  };
  ```

  you all of this from firebase just annd export before it and save in on config.js



End with an example of getting some data out of the system or using it for a little demo.

## 🔧 Running the tests <a name = "tests"></a>

For run the app open terminal and type <br>
```
npm start
```


## 🚀 Deployment <a name = "deployment"></a>

You can deploy this project on firebase easily and also for free <br>
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
### STEP

```
>> npm install -g firebase-tools
>> firebase init

Select Hosting from the options provided.

Select the Use an existing project option.

As the build folder of react apps is generated in the build folder by default, we will use the same as our public directory.

Type y as we want to configure our app as a single-page app.

The initialization is complete, now we just need to run a few commands and our application will be ready to go.

>> npm run build
>> firebase deploy 

```
Deploy Done 🔥🔥
## ⛏️ Built Using <a name = "built_using"></a>

- [ReactJs](https://reactjs.org/) - Web Framework
- [Firebase](https://firebase.google.com/) - Server Framework
- [Firebase](https://firebase.google.com/) - Hosting

## ✍️ Authors <a name = "authors"></a>

- [@anounboy](https://github.com/anounboy) - Idea & Initial work
