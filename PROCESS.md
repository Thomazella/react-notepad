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

## Day 2

- use Reakit's Container for state
- implement note delete functionality
- installed enzyme, added tests
- adjusted styles
- implemented modal dialog
- register repo on Netlify to auto deploy from `master`

_[first commit](https://github.com/Thomazella/react-notepad/commit/27273d6816e920ea628a369100e0390da16b54f0)_,
_[last commit](https://github.com/Thomazella/react-notepad/commit/311b28758b48e31c8fa8db0c49febc9b291085b3)_

### Thoughts

I had forgotten Reakit has containers to manage state, so I refactored to use them.
Code looks more declarative and readable now.
I also forgot I needed enzyme to test React components.
I installed it, set it up, and wrote tests for everything already implemented.
Had to check the enzyme docs a lot and try different approaches to testing things.
Note to self: Try `react-testing-library` in the future.

New dependencies:

#### Enzyme and plugins

For testing React Components.

## Day 3

- Renamed some things, moved others
- Implemented adding notes, added tests.
- Started thinking on the best way to do the async view update.

_[first commit](https://github.com/Thomazella/react-notepad/commit/2609d60030632967322fad5f5be582c4c6321b22)_,
_[last commit](https://github.com/Thomazella/react-notepad/commit/ddb17516dfd781c85460136994cd08e6baccb158)_

### Thoughts

I wanted to find a good and simple solution.
I already had an `addNote` function hadling the `onClick` event.
Then the new note was stored in the state container that would update the props on the views.
Like this:
```jsx
onClick={() => addNote(note)}
```
Something like this:
```jsx
onClick={() => setTimeout(() => addNote(note), 1000)}
```
Wasn't good because it delayed both views from updating.
But I started with that.
First idea was to manage a separate state entry for each view.
Then I thought about adding some logic inside each view, so they would take a `delay` prop.
```jsx
<View delay={1000}>
  // children
</View>
```
I think that API is quite nice, but I wasn't sure about the best way to implement it.
I'd have to manage a timeout inside the component, or a clock.
Maybe the clock should be on the container, to guarantee multiple views would be synced.
I did some experiments with `async/await` inside the components.
At this point it seemed the first idea was simpler.
The only downside is that having `n` views it would be necessary to maintain `n` state entries.

## Day 4

- Implemented the async view update
- Changed container to use React Context
- Worked on tests
- Implemented note errors UI
- Implemented empty and 100 chars validations

### Thoughts

I followed through with the first idea for the async view update.
Instead of `addNote` setting the state directly, it's curried like this:
```jsx
const addNote = newNote => ({ setState }) => {
  // 1s setTimeout
  // 2s setTimeout
}
```
Reakit's implementation passes the `setState` function as a parameter, which is called inside `setTimeout`.
It adds the new note to two state entries, one for each view, not at the same time.
This triggers the update.
Also changed the code to use React Context, to pass less props around.
I should refactor this later, maybe use promises.

## Day 5

- Implemented emoji validation
- Added tests
- Small refactors on NoteContainer

New dependencies:

#### emoji-aware

For managing emoji.

## Day 6

- Started styling the app

### Thoughts

Since Sofia Pro wasn't free, I looked for a similar free font.
Record Union has an unique color palette, this was fun.
Made some changes to `.babelrc` to remove dead browsers increasing bundle size.

## Day 7

- Fixed styles on mobile
- Fixed a bug related to `key` and uniqueIds on notes.
- Started adding animations and transitions.
- Added AnimatedNote
- Added throttle on `addNote`

### Thoughts

Moved note id generation to creation time.
It used to be inside `render()` causing notes to get new ids on each render.

For animations, styles and colors I used [the site](recordunion.com) for reference.
Tried to keep it fun and loyal to the reference without losing contrast or doing it "too much."

Made `AnimatedNote` as a wrapper around `Note`.
It uses Reakit's `Hidden` to provide a cool animation for notes being added to the Notepad.

Added a boolean flag to prevent several notes being added in a row.