import Dashboard from "./views/Dashboard.js"
import Posts from "./views/Posts.js"
import Settings from "./views/Settings.js"
import About from "./views/About.js"

//const express = require("express");

console.log("JS loaded");

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        
            //{ path: "/", view: () => console.log("Viewing Dashboard!") },
            { path: "/", view: Dashboard },
            { path: "/posts", view: Posts },
            { path: "/settings", view: Settings },
            { path: "/about", view: About },
            //{ path: "404", view: () => console.log("Error 404. Page not found!") },
            //{ path: "/posts", view: () => console.log("Viewing Posts!") },
            //{ path: "/settings", view: () => console.log("Viewing Settings!") },
            

        
    ];

    // Test each route for potential match 
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    //console.log(potentialMatches);

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHTML();

    //console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {

    // Make sure to override default-reloading of pages when navigating (to keep it SPA)
    document.body.addEventListener("click", eventObject => {
        // If the clickable object is of type data-link (as defined in index.html), overwrite default
        if (eventObject.target.matches("[data-link]")) {
            eventObject.preventDefault();
            navigateTo(eventObject.target.href);
        }
    });

    router();
});
