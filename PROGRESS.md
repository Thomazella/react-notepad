## Day 1

- created initial project files
- configured tools and dependencies
- set up Travi CI
- made the App component
- made Note, Notepad and NoteView components.

_[first commit](https://github.com/Thomazella/react-notepad/commit/7f75dd076136961836df32e9477e77df5539c76e)_,
_[last commit](https://github.com/Thomazella/react-notepad/commit/41a640fe8d4e252f569b0c6e9a13841eb1ddf9a9)_

### Thoughts

I decided to not use [creat-react-app](https://github.com/facebook/create-react-app) and rather configure everything myself.
This avoids packing unecessary stuff and shows that I can configure the tools I use.
Most config files were reused from another project.
`Public/index.html` was based on the [HTML5 boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/src/index.html).
Favicons were generated with [favicon generator](https://realfavicongenerator.net/) _(and I thought favicons were simple)_.
I made the favicon image using Adobe Illustrator.

About the dependencies:

#### React, React-dom

Well, React!

#### Reakit

Component library that I help maintain. It provides several high quality primitives to build interfaces. I suspect it will make the overall implementation *much* smoother.

#### React-icons

Icon library to use with React.

#### Babel and plugins

I'm using `transform-class-properties` to avoid having to bind functions passed as props. Target browsers set to `defaults` ([see list](https://github.com/browserslist/browserslist#full-list))

#### Eslint and plugins, Prettier

Essential code quality checking. My preffered formatter.

#### Parcel

I'm using it because it's trivial to set up. Very good for small projects.

#### Jest, rimraf

My testing framework and a tool to delete directories from package.json scripts.