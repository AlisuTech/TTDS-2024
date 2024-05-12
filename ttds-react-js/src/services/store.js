import { createStore } from "redux"
import reducer from './reducer'
const store =createStore(reducer)
export default store
// Redux Steps
// 1. Create a Store (State Store - localStorage)
// 2. Create a Reducer (Receives and Dispatches Information/Events/Changes)
// 3. Publish an Event or Change
// 4. Subscribe to Event or Change

// WF: Publish Event >> Reducer, receives and Dispatches >> Subscriber Receives the event and acts on it >>     