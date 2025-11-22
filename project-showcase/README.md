## Welcome to the Summative Lab for Module 4 of the Software Engineering Course.

The objective here was to create a dynamic, responsive Single Page Application (SPA) using React.

_The project structure is as follows:_    
    App.jsx
    ---ProjectForm.jsx
    ---SearchFilter.jsx
    ---ProjectList.jsx
        ---ProjectCard.jsx


## Installation and Setup

Clone the repo
    get clone https://github.com/sanjam00/summative-lab-8-spa-application/tree/main

Install dependencies
    npm install

Start the development server
    npm run dev


## User experience
Before I explain the functionality of the project, I want to go over what the SPA does for the user. 
We were tasked with creating an SPA that displayed past projects for a creative agency. The SPA needed to be dynamic, responsive, modern, and easily maintainable. Within this description, there also needed to be a way to search through projects and add new projects to the list.


## Required functionality
*Regarding functionality, there were 4 core features to implement:*
There wasn't much detail in these instructions, but that was the point. The purpose of this assignment was to put everything we'd learned in the past 3 weeks into a portfolio, while giving us the opportunity to practice our CSS skills if we chose.

**1. A landing page displaying a list of projects**
I started with mapping through each ProjectCard in ProjectList.jsx, creating a simple and uniform list of each project that has its own neat card. Then in ProjectCard, I mapped through the project data from the projectData.js file- allowing me to display a dynamic list of projects that can be updated and searched through by name.

**2. A form that allows users to add new projects dynamically**
The functionality for this feature can be found mainly in ProjectForm.jsx, with global state being handled in App.jsx.

**3. A search feature for dynamically filtering projects.**
The search feature is found in SearchFilter.jsx, again with necessary state being handled in App.jsx.

**4. A responsive design that is inspired by the mock-up.**
This was the most lax feature. There was a basic mock up of what the final product should look like, besides that we were given free reign of the design.

***Extra challenge:***
For this final project, I chose to challenge myself a bit further by adding a collapsible feature to the Add Project Form. I did so because the display of the Project List was all the way at the bottom, and felt that the bulkiness of the form- while necessary- would hinder the user experience if they did not plan to add any projects.
To make the animation smoother, I used the [Motion](https://motion.dev/?utm_source=chatgpt.com) library. Specifically, I largely referenced and played around with the information on [this page](https://motion.dev/docs/react-animation?utm_source=chatgpt.com) to get my desired effect.