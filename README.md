#  Team Profile Generator

Testing is key to making code maintainable. This application includes  a unit test for every part of the code written and ensures that it passes.

## Description
A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

Take a look at the example labeled generatedTeam.html in this repo.

## User Story

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Installation

-git clone repo
-Run npm install to install the following npm package dependency:
	[Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)
-This will start by running node index.js in the command line.
-Answer the questions that are prompted to generate the team profiles.
-Once created, the team file will be named 'generatedTeam.html'

## Tests

-run [Jest](https://www.npmjs.com/package/jest)
- run test by entering npm run test in the command line

## Visuals

https://drive.google.com/file/d/1DI69tgC3mWzfPwbtyhjPE8LAG5CXx_fM/view?usp=share_link
