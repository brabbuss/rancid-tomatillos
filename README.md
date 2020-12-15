>[TMDB deployed site](https://brabbuss.github.io/tmdb/)

---

### The Turing Movie Database - A movie information database
###### A beautiful and easy to use React built searchable database  

---

![Screen Shot 2020-12-15 at 1 15 43 PM](https://user-images.githubusercontent.com/67513823/102267812-aca02800-3ed7-11eb-9bef-f1bdc34d05a6.png)

*Homepage*


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

![TMDB-main](https://user-images.githubusercontent.com/67513823/102267276-e7559080-3ed6-11eb-957b-d1306d94a7e8.gif)

*Homepage*

**Main Page**

The homepage provides users with the traditional landing page experience. A sticky navbar up top with search functionality and a way to get back to the homepage, a hero banner carousel that can click through to movie details, and an array of movies in the main body of the site displayed along with their name and rating. 

<details>
  <summary>**Under the Hood**</summary>

---

The Homepage itself is housed in the React `<App />` component, as you might expect. To implement a multi-page experience, we implemented the `<BrowserRouter/>` and the components thereof that allowed linking/routing `<Link />`, `<NavLink />` and `<Route />`. 
  
With normal functionality, what ends up rendering on the homepage is essentially made up of four components. From 'top' to 'bottom':

```
<NavBar />       // Is always visible
<Movies />       // A container for the Banner and MovieCard components
  <Banner />     // Only want to render on the homepage (renders inside of Movies)
  <MovieCard />  // Movie data is mapped over to produce multiple components (renders inside of Movies)

```

The movie data is retrieved inside of the `componentDidMount()` method of the `<App/>` component. That data is a list of all of the movies - that data is mapped over to create multiple individual `<MovieCard />` components.

---

</details>

![TMDB-movieClick](https://user-images.githubusercontent.com/67513823/102267459-2b489580-3ed7-11eb-9a9d-c57958328c6e.gif)

*Movie details*

**Movie Details View** 

Once a user clicks on a movie poster they are redirected to a details page. In this view the revenue, budget (with a bar to display ROI), genres, an overview and a movie trailer for the selected movie are all shown. To return back to the main view a user can click the home button or on the TMDB icon. 

<details>
  <summary>**Under the Hood**</summary>

---

The details page is nested in the React `<App />` component (inside of a Route component) with a dynamic route path parameter `/movies/:movie_id`. The movie id is pulled from the `props` of the corresponding movie poster that was clicked. The ID is bubbled up to App, at which point an API call is made to the proper endpoint (interpolating the ID) to retrieve that individual movie's information. The state of the `App` component is updated, at which point the `MovieDetails` component renders with the needed information. 
  
Server errors are handled with their own `Error` component page. There was a lot of missing data inside of the retrieved data. To provide a better user experience, budget information, if missing, was provided with a grooming utility that supplements missing information with a random budget. This allows full display of the UI and makes for a more robust UX. Original, ungroomed data can be used very easily by removing the grooming function.

On refresh or direct navigation, the page persists (except for strange behavior on the GH deploy page) by using information inside of the `match.params` object to grab the `movie_id` and use that to call the correct movie information as laid out in the first paragraph above.

---

</details>

![TMDB-search](https://user-images.githubusercontent.com/67513823/102267517-3f8c9280-3ed7-11eb-9193-1926d7d3f2a0.gif)

*Search*

**Search**

A user has the option to search for a movie tile which will lead to a new search results page. From this view they will be presented with a list of movie titles that match their search where they can click into each to see more details. 

<details>
  <summary>**Under the Hood**</summary>

---

Pleasantly simple to implement! Search functionality is a twofold process. The `NavBar` component is a class component, the only other one aside from `App` in the site. We required a class component to update the input field as the user types in a query - typing updates the value of the state of the `NavBar` component, which is then reflected on screen. Clicking the `Search` button bubbles up to `App` the string/movie title inside of the search input field. `App` uses the search input value to `.filter()` the current list of movies (as presented on the homepage) and then `.map()` over the results to populate the `SearchResults` component with `MovieCards` matching the search criteria.

---

</details>

## Reflection

#### Wins

* Users are able to type in a URL including the movie id and be routed to that specific movie
* Search functionality
* Detailed and thoughtful styling and UI
* Rendered components have 100% test coverage (74.83% total test coverage)

#### Challanges

* Asynchronous testing in React
* Starting with a full web build and trying to style for mobile afterward was difficult and ultimately unincorporated before submission deadline
* Bootstrap is meant for mobile first, then expand to desktop second - a team design oversight 

#### Future

* Express server or alternative APIs to increase functionality and availability of different types of information
* Gamify a rating system for users with simple badges and notifications


## Team

<h4>Scott Brabson</h4>
<img src="https://avatars1.githubusercontent.com/u/66697338?s=460&u=3d2e338fdeb625c1940a87b1cfdb7ba6e7d16c5c&v=4" alt="Coding Magician"
 width="150" height="auto" style="float: left" />

*FE Engineering student at Turing School who has found no end to the joy that is speaking the language of JS.*

[GitHub Profile](https://github.com/brabbuss)

<h4>Amanda Davidson</h4>
<img src="https://ca.slack-edge.com/T029P2S9M-U014X5X6QTG-670abe18163a-512" alt="Coding Magician"
 width="150" height="auto" style="float: left" />

[GitHub Profile](https://github.com/ADavidson02)
