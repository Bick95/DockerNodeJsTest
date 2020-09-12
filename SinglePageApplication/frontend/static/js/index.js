import Dashboard from "./views/Dashboard.js"
import Posts from "./views/Posts.js"
import Settings from "./views/Settings.js"
import About from "./views/About.js"
import PostView from "./views/PostView.js"
import Error404 from "./views/Error404.js"

console.log("JS loaded");

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        //console.log([key, values[i]]);
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [

            { path: "/", view: Dashboard },
            { path: "/error404", view: Error404 },
            { path: "/posts", view: Posts },
            { path: "/posts/:id", view: PostView },
            { path: "/settings", view: Settings },
            { path: "/about", view: About },
    ];

    // Test each route for potential match 
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    //console.log(potentialMatches);

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    
    if (!match) {
        match = {
            route: routes[1],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

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
