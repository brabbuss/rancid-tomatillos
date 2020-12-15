>[TMDB deployed site](https://brabbuss.github.io/tmdb/)

---

### The Turing Movie Database - A movie information database
###### A beautiful and easy to use React built searchable database  

---

![Screen Shot 2020-12-15 at 1 15 43 PM](https://user-images.githubusercontent.com/67513823/102267812-aca02800-3ed7-11eb-9bef-f1bdc34d05a6.png)[Home]


## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Reflection](#reflection)
* [Team](#team)


## Introduction

### Overview
TMDB is a searchable movie database, populated with information derived from a RESTful API and three separate endpoints. TMDB is a SPA built with React and designed towards the project spec laid out [here](https://frontend.turing.io/projects/module-3/rancid-tomatillos-v3.html), a group projects designed specifically for Mod 3 front end engineering students. The project seeks to challenge the totality of learning of students up to this point, pulling together their core-stack knowledge of HTML, CSS, JS, DOM interaction and TDD (test driven development), and extending that knowledge to build out a React app (including React Router, TDD in React using Jest, and asynchronous functions within React).

The project emphasises React fundamentals, such as state management/synching across components, and the flow and management of asynchronous operations (both in production code, and inside of testing suites), pushing students to think carefully and critically about component architecture and modularity, and expected user flow and behavior. The nature of the project encourages employing professional 'soft' skills in the planning and project management stages - utilizing wireframing and mind-mapping, and managing project workflow with Issues and PRs through the **Agile** methodology on GitHub Project Board.

Lastly, be sure to click this here when you see it:
<details>
  <summary>**Under the Hood**</summary>
There's more info under here about the functionality being described!
</details>

### Tech Stack
* React
* JavaScript, HTML
* CSS, SCSS
* Bootstrap
* React Router
* Jest
* REST API

## Features 

![TMDB-main](https://user-images.githubusercontent.com/67513823/102267276-e7559080-3ed6-11eb-957b-d1306d94a7e8.gif)[Main screen]

**Main page**
The homepage provides users with the traditional landing page experience. A sticky navbar up top with search functionality and a way to get back to the homepage, a hero banner carousel that can click through to movie details, and an array of movies in the main body of the site displayed along with their name and rating. 

<details>
  <summary>**Under the Hood**</summary>
  
The Homepage itself is housed in the React `<App />` component, as you might expect. To implement a multi-page experience, we implemented the `<BrowserRouter/>` and the components thereof that allowed linking/routing `<Link />`, `<NavLink />` and `<Route />`. 
  
With normal functionality, what ends up rendering on the homepage is essentially made up of four components. From 'top' to 'bottom':

```
<NavBar />       // Is always visible
<Movies />       // A container for the Banner and MovieCard components
  <Banner />     // Only want to render on the homepage (renders inside of Movies)
  <MovieCard />  // Movie data is mapped over to produce multiple components (renders inside of Movies)

```

The movie data is retrieved inside of the `componentDidMount()` method of the `<App/>` component. That data is a list of all of the movies - that data is mapped over to create multiple individual `<MovieCard />` components.
</details>

![TMDB-movieClick](https://user-images.githubusercontent.com/67513823/102267459-2b489580-3ed7-11eb-9a9d-c57958328c6e.gif)[Movie click]

**Movie details view** 
Once a user clicks on a movie poster they are redirected to a details page. In this view the revenue, budget, genres, an overview and a movie trailer for the selected movie are all shown. To return back to the main view a user can click the home button or on the TMDB icon. 

![TMDB-search](https://user-images.githubusercontent.com/67513823/102267517-3f8c9280-3ed7-11eb-9193-1926d7d3f2a0.gif)[Search movie]

**Search**
A user has the option to search for a movie tile which will lead to a new search results page. From this view they will be presented with a list of movie titles that match their search where they can click into each to see more details. 

## Reflection

### Learning Goals
* Learn React Testing
* Create multi-page UX using Router

### Wins
* Users are able to type in a URL including the movie id and be routed to that specific movie
* We completed the extension to add a search bar
* Rendered components have 100% test coverage (74.83% total test coverage)

### Challanges
* Bootstap did not always play well with React
* Async nature testing in React


### Team

<h4>Scott Brabson</h4>
<img src="https://avatars1.githubusercontent.com/u/66697338?s=460&u=3d2e338fdeb625c1940a87b1cfdb7ba6e7d16c5c&v=4" alt="Coding Magician"
 width="150" height="auto" style="float: left" />

*FE Engineering student at Turing School who has found no end to the joy that is speaking the language of JS.*

>[GitHub Profile](https://github.com/brabbuss)

<h4>Amanda Davidson</h4>
<img src="https://ca.slack-edge.com/T029P2S9M-U014X5X6QTG-670abe18163a-512" alt="Coding Magician"
 width="150" height="auto" style="float: left" />

>[GitHub Profile](https://github.com/ADavidson02)
