import React from 'react';
import { Link } from 'react-router';

/* Global Helpers should go here */

/*
=======================================
 ROUTING
 =======================================
put all your static routes here (in 'staticRoutes' array),
you don't need the full route just the base after your url
So for example, if my posts are static and are at
 "http://www.example.com/posts/this-is-a-post.html"
 you just need "/posts/"
 this makes the loading of some parts of the site seem almost 'instant'
 */

const staticRoutes = ['/posts/'];

const isRouteDynamic = () => {
    const currPath = window.location.pathname;
    return staticRoutes.some(route => currPath.match(`(${route})+.*`) === null);
  };


export const getLink = (component, key, staticURL, path) => {
    if (isRouteDynamic()) {
      return (
        <Link to={path} key={key}>
          {component}
        </Link>
      );
    }
    return (
        <a href={`${staticURL}${path}`} key={key}>
          {component}
        </a>
    );
};
