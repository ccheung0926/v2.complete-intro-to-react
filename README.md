# A Complete Intro to React

Welcome to a complete intro to React! The site actual workshop material for this repo can be found [here][gh-page]. On the master branch you will find the completed project. On the start branch you will find the barebones boilerplater of the project designed to help you get started.

## Contributing

Please contribute, file issues, and make PRs. More than anything I'm sure there are typos abounding.

## License

MIT

[gh-page]: http://btholt.github.io/complete-intro-to-react/

Side Notes from tutorial:
npm run lint -s -- --fix <-- to fix syntax on lint

webpack.config.js:
- 'historyApiFallback': true -- reroute 404 to homepage

state:
- the only way to modify a component, is the component itself, not child not parent, no external forces. The only place it could have orginated from is within the component itself if it has a problem
- one way data flow - data only flows down, never flows up (parent pass to child, child cannot push up to parent)
- one way to solve parent state modification from child is to have child to call a function that tells parent to modify the state by itself