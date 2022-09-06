# Interactive Advisors Exercise - Brandon Lawrence

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

# How to install and run project

1) Clone the repo to your local machine

2) Open the project in your preferred IDE or editor

3) Run ‘npm install’ to install dependencies

4) Run ‘ng serve’ to run the application after ‘npm install’ has completed

# Architecture

The general workflow for the exercise allows a user to view a selection of Stocks, to which they can then access and view a graph based on the stock data. To achieve this, I used a mixture of container and presentational components (mostly with my shared generic components) to create a generic card and card-grid, as well as lightly leveraging NGRX to manage the state of stocks. 
 
# Assumptions

When developing the application, I had two assumptions to simplify the project scope:

1) Each object in the test data represented a stock with the chart data being used to plot a graph.

2) Design will be barebones as such to solve the fundamental requirements of the exercise.

# Improvements For The Application

Given the time constraints, there were a few other features and parts of the implementation I would have liked to have ironed out:

1) Leveraged NGRX more thoroughly, with an example being on the stock-details.component page. Unfortunately, I ran out of time, however the aim was to create a selector to only select a singular Stock, as opposed to loading and processing all of the stocks in order to get the singular entity I required.

2) Following the prior comment, adding a global app state which would accomidate to the state of generic things such as loading (It slightly felt a bit overkill to add, as I was only managing Stock state during the implementation, however I'd generally aim to segment state into respective features). 

3) The design is simple, and given more time, I would have fleshed it out significantly more.

4) Adding more unit tests to increase test coverage; Due to time constraints, I was unable to achieve my desired test coverage.

5) Abstract the graph into it's own generic component and reference it from a parent component. 

# Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
