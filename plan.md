## 09:30 - 09:45 Warmup

## 09:45 - 10:45 Redux setup / Action creators / Async actions (Redux Thunk)

## 11:00 - 12:30 DIY

## 13:30 - 14:15 Little bit of livecoding for some of the features

## 14:15 -> DIY

## Redux seperation of concerns

- component:
  - Displaying info, interacting with user, state that is used no where else
- action:
  - (synchronous) Sending information about what happened
  - (asynchronous) Handling interactions with your server
- reducer:
  - Updating the state of the store using the current state and the action
- selectors:
  - Taking data from the store and providing it the component
  - Computing / Deriving data based on the data in the store

## Setup

- CRA
- Install deps
- Create store
  - folder
  - index.js (lookup that config)
  - rootReducer
  - 1 slice reducer with an initial state (blogposts)
- Wrap app in Provider
- Test -> Redux Devtools, check initial state

## Fetch a list of blogpost

- [x] create a component (& a route)
- [x] fetch the data
- [x] create action
- [x] dispatch the action
- [x] (create reducer if it does not exist)
- [x] handle the action in the reducer (add a `case`)
- [x] create a selector
- [x] use the selector
- [] display the data

## Approach 1:

- Component does the fetching

## Approach 2:

- Action does the fetching (thunk)
