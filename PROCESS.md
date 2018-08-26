## Day 1

- created initial project files
- configured tools and dependencies
- setup Travi CI
- made the App component
- made Note, Notepad and NoteView components.

### Thoughts

I decided to not use [create-react-app](https://github.com/facebook/create-react-app) and rather configure everything myself.
This avoids packing unnecessary stuff and shows that I can configure the tools I use.
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

Essential code quality checking. My prefered formatter.

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

### Thoughts

I had forgotten Reakit has containers to manage state, so I refactored to use them.
Code looks more declarative and readable now.
I also forgot I needed enzyme to test React components.
I installed it, set it up, and wrote tests for everything already implemented.

New dependencies:

#### Enzyme and plugins

For testing React Components.

## Day 3

- Renamed some things, moved others
- Implemented adding notes, added tests.
- Started thinking on the best way to do the async view update.

### Thoughts

I wanted to find a good and simple solution to adding notes asynchronously.
I already had an `addNote` function handling the `onClick` event.
Then the new note was stored in the state container that would update the props on the views.
Like this:
```jsx
onClick={() => addNote(note)}
```
Something like this wasn't good because it delayed both views from updating.
```jsx
onClick={() => setTimeout(() => addNote(note), 1000)}
```
But that got me started thinking.
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
At this point it seemed the first idea was simpler and good enough.
The downside is that having `n` views it would be necessary to maintain `n` state entries.

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
  // 1s delay to set "notes" state entry
  // 2s delay to set "modalNotes" state entry
}
```
It adds the new note to two state entries, one for each view, not at the same time.
This triggers the update.
Also changed the code to use React Context, lifting the state up to the `Provider` wrapping the app.
Thoughts if `setTimeout` is best, maybe promises would be better.

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
The current one is good enough but I'm displeased with the `t`s not being straight.
Record Union has an unique color palette, this was fun.

## Day 7

- Fixed styles on mobile
- Fixed a bug related to `key` and `getUniqueId` on notes.
- Started adding animations and transitions.
- Added AnimatedNote
- Added throttle on `addNote`
- Animated note deletion

### Thoughts

Moved note id generation to creation time.
It used to be inside `render()` causing notes to get new ids on each render.

For animations, styles and colors I used [the site](recordunion.com) for reference.
Tried to keep it fun and loyal to the reference without losing contrast or doing it "too much."
Didn't use the neon green because I don't think anything on the app demands that much attention.
I included a red header with dark blue text to create an instant similarity.

Made `AnimatedNote` as a wrapper around `Note`.
It provides cool css animations for notes being added to the Notepad.

Added a boolean flag to prevent several notes being added in a row.

Note deletion was animated by adding a `visibility` property to notes.
A function first toggles the property hiding the note.
Deletion from state is defered to a callback running 1s later.

An issue is that on a mobile device, when the keyboard is hidden away, the modal can get stuck below the screen bottom.

## Day 8

- Refactors
- Bug fixes
- Added a backdrop to the modal

### Thoughts

Refactored the modal toggle button in it's own component.

Extracted a component called `StateContainer` to store generic state unrelated to the notes (toggle state on button and input text).

Added a backdrop to make sure the modal blocks interaction with the page.


## Conclusion

I enjoyed the task and liked Record Union's colors.
React Context provided a good and simple solution to managing the notes and their updates.
Async operations always demand attention and using the redux devtools helped.
I also tested the app in a phone and added media queries to optimize for it.
I wish I had added a background to the page, to make it less blank.

