# Material Theme for Jekyll!

#### created with React, Redux, React-Router and transpiled with Webpack.

##### All the awesomeness of Material UI without the hassle of JQuery and servers, built with the latest web technologies!

#### Now Includes Extra Overengineeringness!
#### DEMO: http://www.code.liquidthink.net

Made with React and served statically and dynamically

### **in order to build:**
#### for Production
```
./build-prod.sh //for production build
```

#### for Development:
```
./build-dev.sh
```
## Site Layout

`./react-dev/pages`
- These are static Jekyll components being rendered with react

'./react-dev/helpers.js'
- these are global helpers. Right now all that is included are the static routes of you're site. Put all your static routes there (in 'staticRoutes' array), you don't need the full route just the base after your url So for example, if my posts are static and are at
 `http://www.example.com/posts/this-is-a-post.html`
 you just need "/posts/"
 this makes the loading of some parts of the site seem almost 'instant', while preserving the SEO of your site since Google can crawl the static content

'./react-dev/components/menu_items.js'

- This is where your menu items are rendered. If you want a new item, add an object to the Hashlist with it's corresponding path (from your root url) Javascript object. IE if it is:

`const menuItems = { Home: '/', About: '/about/', Projects: '/projects/' };`
and you want another entry, "Coding", with a path '/coding/' from the root url the object should look something like this :
`const menuItems = { Home: '/', About: '/about/', Projects: '/projects/', Coding: '/coding'};`



'./react-dev/actions/index.js'
- this is where the magic happens from the JSON our Jekyll plugins rendered ( Jekyll_pages_api and Jekyll-react)
You're going to want to add your site url to the `ROOT_URL` variable
EX:
if your site is at `http://www.example.com` change
`const ROOT_URL = 'http://test_domain.com:4000';`
to
`const ROOT_URL = 'http://example.com';`


### Site Config Variables:
any site configuration that you want to let React use, put under 'react' in your `_config.yml`. This will be grabbed by the siteInfo action creator and put through it's corresponding reducer

### TODO:
 - [x] create a jekyll plugin to output all [YML config] site data into JSON, in such a way which is importable to react and can be used to manage state
 - [x] [possible TODO, maybe redundant. ?] Rendered JS to HTML and outputted into a folder for Jekyll to take it. This allows us to use React components on `_layouts`
 - [ ] create a Dynamic Search Function with Auto Fill
 - [ ] create category pages
 - [ ] add pagination
 - [ ] make it easier to use with Jekyll


### Contribution
Want to contribute? Found an issue? Jump right in! I welcome any help I can get, and will work with you to fix any issues.
