import store from './store';
import { addBug, resolveBug } from './actions';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch(addBug('buggg1'));

store.dispatch(resolveBug(1));

unsubscribe();
