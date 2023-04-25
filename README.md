# robrien.xyz - my personal website
Personal website built with next.js, hosted on AWS

## About
This is my personal web page built with next.js, for more info see [robrien.xyz/about](https://www.robrien.xyz/about). This is designed to be a skeleton for a never ending work in progress.

## Design
Designed to be minimalistic and intuitive, but still fresh and unique. Majority of the site is black and white, using Arial font, no borders, full screen experience. Colors are used as accent, usually only one or two colors visible at any given time. Colors, when used, are bright and contrast heavily against the black and white seen on the rest of the page. Fonts, when not Arial, are attention grabbing, resulting in additional "high contrast" design. 

Intuitive arrow key / swiping / mouse controls are incorporated throughout the site. When a popup or expanded window is open and the user presses the esc key or touches / clicks outside of the window, the window will be closed if possible. ie pressing esc will collapse the navigation menu or close the login modal. Swiping left / right or pressing the left / right arrow keys will scroll through background images. While these functions are not necessarily "necessary," they do show thoughtful design, encouraging the user to explore further. 

Graphics and images on the site are all my own work, and should complement the first paragraph of this section (high contrast, majority black and white, "unique" but intuitive).

## Site Structure

robrien.xyz:
- / - landing page
- /about - about page
- /404 - error page 
- /albums - series of photo albums I've created
- /projects - series of projects I've created

## Project Structure
- /pages contains the navigable pages of my website
- /components contains all of the components used in /pages including the menu, login window, markdown reader 
- /config contains config files, ie the structure of the site's navigation menu is defined in menuConfig.js, and turned into a navigable menu in /components/menu.js
- /styles contains stylesheets for modules. Ideally all components are formatted such that when scrapped together no additional page styling is needed

## To do

- [x] build skeleton
- [ ] Integrate an actual login auth provider instead of dummy form
- [ ] Write more articles that utilize the markdown reader 
- [ ] Make the markdown reader look better by adding adaptive scrolling
- [ ] Come up with a system for cloud image storage, either s3 or some google cloud service
- [ ] Create an "albums" component that takes a json or js config file of album contents and captions and turns it into an album 
- [ ] Add an "html block" into the markdown reader, such that a .md file can contain html that gets executed on the page. or like add iframes to it or something
- [x] Write a real about page in md that describes me, my experience, the purpose of this site, etc
- [ ] Create pages that are accesible to logged in users only
- [ ] Create a messageboard that logged in users can post messages to
- [ ] Require sms login and use endato to get info on the user - users with non verified numbers will have fewer permissions.
- [ ] Build some threejs visuals to scatter around the website as components to fill whitespace
- [ ] figure out a better way to host website
- [ ] create more photos for background and figure out how to load them dynamically
