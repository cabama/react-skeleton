
After working on multiple React projects here at Nimble, we settled down on some generic code organization and stucture that we want to lay down here.

- actions/: All the Redux actions creators go under the actions directory. It's highly advised to organize the action creators based on the screens. We will discuss about it in details in next section.

- adapters/: Organize the code making network and/or async tasks under this directory.

- components/: This directory hosts all the dumb React components. They receive props from React components under screens and render themselves and their children accordingly. These components should have no direct association to Redux. Redux actions must instead be passed down from the screens.

- config/: Holds the app specific configuration variables. As always, do not store any secret keys here.

- constants/: Define all the actions types under this directory. Ideally, the organization of this directory should match that of the actions.

- containers/: Holds the top level React components. These React components are mounted by the react-router and map the Redux actions and state to props and pass down to the screens. Refrain youself from having any logic inside these components.

- lib/: All the custom libraries that stand on their own and can work under any Javascript ecosystem go inside this directory.

- reducers/: Holds the Redux reducers. Ideally it should reflect the folder structure of actions and constants.

- screens/: Holds the page specific components which then renders all other dumb components to build any specific page. These components map one-to-one to those under containers.

- services/: Holds the Service Objects used inside the project. By definition, these classes should encapsulate one single process of the app.

- store/: Redux store objects.

- utils/: Any utilities used in the project should be placed inside this folder.

App.jsx: The parent React component of the app. Bridges the react-router and Redux store into the app flow.

routes.js: All the app routes are defined in this file.