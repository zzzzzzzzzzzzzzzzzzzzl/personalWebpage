import { toggleDisplay } from './slices/slice'
import store from './store'

export function displayToggle() {
  store.dispatch(toggleDisplay(!store.getState().slice.display))
}
