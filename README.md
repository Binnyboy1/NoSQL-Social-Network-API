# NoSQL-Social-Network-API

## Description

This is the 'Module 18' challenge assignment for the UCF coding bootcamp.

We were tasked with creating a Social Network API from scratch that would allow us to have a way of adding/removing users, thoughts, and reactions to those thoughts. This project gave us practice with working with Express.js (for routing), MongoDB (for our database), and Mongoose (for working with relational data).

## Installation

1. Git clone repo into VSCode
2. Right click `NoSQL-Social-Network-API` folder and select `Open in Integrated Terminal`
3. Then you can run `Code Block 1` below. If you find that it doesn't run properly, you can run `Code Block 2` to use the exact versions that were used during the creation of this project

> Code Block 1 (recommended)
```
npm i dayjs express mongodb mongoose@^6.7.3
npm run seed
```

> Code Block 2
```
npm i dayjs@^1.11.6 express@^4.18.2 mongodb@^4.12.1 mongoose@^6.7.3
npm run seed
```

4. You can run `npm run seed` if you want to clear the data, otherwise you can stick to just `npm run start` everytime you start up the project

## Usage

In the terminal, you can run `npm run seed` if you want to clear the data, otherwise you can stick to just `npm run start` everytime you start up the project.

You'll need a REST API client like Insomnia in order to test out the functionality of the Social Network API, like what is shown in the demo.

[Demo](https://drive.google.com/file/d/1JodwnZ_2eSbFy6e7hIGN4CSbx6zwY6KU/view)
