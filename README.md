# A Complete Intro to React

Welcome to a complete intro to React! The site actual workshop material for this repo can be found [here][gh-page]. On the master branch you will find the completed project. On the start branch you will find the barebones boilerplater of the project designed to help you get started.

## Contributing

Please contribute, file issues, and make PRs. More than anything I'm sure there are typos abounding.

## License

MIT

[gh-page]: http://btholt.github.io/complete-intro-to-react/

Side Notes from tutorial:
npm run lint -s -- --fix <-- to fix syntax on lint
NODE_ENV=test jest -u and NODE_ENV=test jest

webpack.config.js:
- 'historyApiFallback': true -- reroute 404 to homepage

state:
- the only way to modify a component, is the component itself, not child not parent, no external forces. The only place it could have orginated from is within the component itself if it has a problem
- one way data flow - data only flows down, never flows up (parent pass to child, child cannot push up to parent)
- one way to solve parent state modification from child is to have child to call a function that tells parent to modify the state by itself

-this.setState -- the only gateway to change state

## this.setState({event.target.value: xyz}) vs this.state.xyz = event.target.vaulue + this.forceUpdate()
- this.setState is an asynchronous functions that is going to schdule an update and eventually, it is going to empty that buffer into one setState, so only updating the bare minimum of things possible to keep your app performing
- use this.setState all time
- this.state.searchTerm = event.target.value -- but this will cause the state and UI are not in sync, and the broswer does not re-render coz no one is watching
- this.forceUpdate() -- As soon as you call this.forceUpdate(), it just like a sledge hammer, and ask to update right now

React: 
- two-way-data binding is not free in React unlilke Angular
- eliminating time component compare to jQuery
- React ES6 does not have PropType, can only define protype outside of the class extend

Jest (Unit Testing)
- renders your component out, it dumps that to a file and then it just compares against that file in the future
- Jest find .spec.js or .test.js for you automatically, example: search.spec.js
-shallow is going to render out everything from a componenet, but it is not going to go any deeper than that. It goes til hitting another component, it will be going to render another component at all