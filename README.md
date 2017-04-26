# reflux-rehydrate

Wrapper to rehydrate RefluxJS stores

Rehydrate RefluxJS store wrapper classes, to support isomorphic rendering, or loading from local storage (running offline or recovering unsaved data)

At this stage, this library is not needed. You can rehydrate your stores simply by calling `Reflux.init()` then calling `setState()` just like you would inside the store.

```
 constructor(props: Object) {
    super(props);
    Reflux.init(MyStore).setState({myData: this.props.myData});
  }
```

However this library also adds a quick wrapper so we can just do one call `Reflux.rehydrate()`. We also hope to expand on this functionality in the future to assist with persistance to local storage etc.

## Installation

`npm install reflux-rehydrate` or `yarn add reflux-rehydrate`

Requires RefluxJS using the latest ES6 configuration

To do something similar with older ES5 mixins, see my fork of the [Super-Simple-Flux](https://github.com/openmaphub/Super-Simple-Flux) where I've added an initWithProps tie-in on the mixin.

## Usage

### Components

In componentWillMount, initialize the store singleton using `Rehydrate.initStore(MyStore)`, then call the rehydrate action with a state object containing the data to be rehydrated, for example `Actions.rehydrate(this.props)`

Example Code:
```
import Reflux from 'reflux-rehydrate';
import MyStore from '../stores/MyStore';

export default class MyComponent extends Reflux.Component {

   constructor(props: Object) {
    super(props);
    Reflux.rehydrate(MyStore, {myData: this.props.myData});
  }
  
  //...
}
```

Be sure that the names you use in `rehydrate()` actually match what is expected in the store just like any other call to `setState()`

### Actions

Not currently needed, but optional for future compatibility so we can automatically setup actions in your stores.

```
import {createActions} from 'reflux-rehydrate';
export default createActions([
  'myAction1', 'myAction2'
]);
```

### Store

Create your Store as you normally would.


## Development

This project is using Rackt to simplify building React components https://github.com/mzabriskie/rackt-cli
