# _Tapper_

#### _Application for a bar, 2/23/2020_

#### By _**Drew Peterson**_

## Description

_This application is for a bar with kegs on tap to serve a menu to patrons and to have admin control to add kegs._

## Setup/Installation Requirements

* Clone repository from Github.
* Install in terminal by running "npm install".
* Start the server in terminal by running "npm run start",
* Launch Chrome browser and type "localhost:3000/" in the URL.  The "npm run start" command should launch the page automatically.


## Stories

* As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).
* As an employee, I want to fill out a form when I tap a new keg to add it to the list. (Don't worry about authenticating employee user accounts yet.)
* As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.
* As a patron and/or employee, I want to see how many pints are left in a keg.
* As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.
* As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.
* As a patron, I want to have kegs prices to be color-coded for easy readability. Perhaps based on their price (greater or less than $5 per pint, perhaps).
* As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.

## Component Structure
![Component Structure Diagram] (./src/assets/images/diagram.png)


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Please contact me directly via email at drew.a.peterson@hotmail.com with any bug reports, questions, critique, or for any reason._

## Technologies Used

_Javascript and React Library_

### License

*GPL*



Copyright (c) 2020 **_Drew Peterson_**





update price dollar sign
EDIT KEG if there's a mistake
customer Pints left in keg from 124
Staff clint to serve a pint and -1 to total
Staff color for less than 10 pints left
Color for prices over $5
Color for alcoholContent over 4

Style beer list
style navbar
Style Form
Style Staff
