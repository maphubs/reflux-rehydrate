# reflux-rehydrate

Wrapper to rehydrate RefluxJS stores

Rehydrate RefluxJS store wrapper classes, to support isomorphic rendering, or loading from local storage (running offline or recovering unsaved data)

## Installation

`npm install reflux-rehydrate` or `yarn add reflux-rehydrate`

Requires RefluxJS using the latest ES6 configuration

To do something similar with older ES5 mixins, see my fork of the [Super-Simple-Flux](https://github.com/openmaphub/Super-Simple-Flux) where I've added an initWithProps tie-in on the mixin.

## Usage

### Actions
Use Rehydrate.createActions (Recommend for future compatibility)
```
import Rehydrate from 'reflux-rehydrate';
export default Rehydrate.createActions([
  'myAction1', 'myAction2'
]);
```

Alternatively, you can just add an action called 'rehydrate' to your store.
```
import Reflux from 'reflux';
export default Reflux.createActions([
  'rehydrate', 'myAction1', 'myAction2'
]);
```

### Store

Create your Store as you normally would.

### Components

In componentWillMount, initialize the store singleton using `Rehydrate.initStore(MyStore)`, then call the rehydrate action with a state object containing the data to be rehydrated, for example `Actions.rehydrate(this.props)`

Example Code:
```
import Rehydrate from 'reflux-rehydrate';
import MyStore from '../stores/MyStore';

export default class MyComponent extends Reflux.Component {

  componentWillMount() {
    Rehydrate.initStore(MyStore); //instatiates Store singleton before Reflux normally would, and injects rehydrate action listeners
    Actions.rehydrate(this.props); //all props are added to store state
  }
  //...
}
```

You can also specify just the props that should be synced to the store
``` 
Actions.rehydrate({data1: this.props.data1, data2: this.props.data1});
```

Be sure that the names you use in rehydrate() actually match what is expected in the store. They are simply added to the state, we are not checking to see if they match what is initialized in the constructor. However, warnings like that would be a good addition to this project at some point.

## Development

This project is using Rackt to simplify building React components https://github.com/mzabriskie/rackt-cli
