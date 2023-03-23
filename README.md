# Personal Website built with Next.js


## Technologies
- next.js
- react.js
- css
- markdown

## structure
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
- [ ] Write a real about page in md that describes me, my experience, the purpose of this site, etc
- [ ] Create pages that are accesible to logged in users only
- [ ] Create a messageboard that 
- [ ] Require sms login and use endato to get info on the user - users with non verified numbers will have fewer permissions.
- [ ] Build some threejs visuals to scatter around the website as components to fill whitespace
