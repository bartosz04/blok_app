---
title: Is Redux really Dead?
description: Contex, hooks, and why it solved much of what Redux did
cover: /covers/isReduxDead.png
date: 10-02-2021
tags:
  - react
  - javascript
  - webdev
  - redux
---
React revolutionized front end development as most people knew it when it was first released. This new approach to writing code triggered incredible innovation in how to handle state changes and UI updates.

This revolution had its downsides, too. One of them was a culture of over-engineering solutions to challenges that could be solved in simpler ways. A typical example of this is how state has been managed in React applications.

Redux has become a hallmark of many React applications created in the last couple of years. The allure of having a single state object, available everywhere in your application sure sounds nice. But has its time passed? Has React evolved to a point where these kinds of state management tools add more complexity than they solve?

This article aims to give you a deeper understanding of which situations warrants state management tools like Redux. We’ll discuss the reasons behind the rise of Redux, and what has changed in the last couple of years - both in React and in Redux. Finally, we’ll look into what might be coming in the future.

## Redux - and why people started using it 

When it was first released , React didn’t have an officially supported way to pass data far down the component tree. If you had some kind of shared state, configuration or other information you would like to use anywhere in you application, you had to pass it down from parent to child to sibling to another child. There was a way to avoid it, but that way - the “legacy context API” was never officially supported, and was documented with a warning that it should not be used.

```js
const rehypePrism = require('@mapbox/rehype-prism')
module.exports = {
  module: {
    // ...
    rules: [
      //...  
      {
        test: /.mdx?$/,
        use: [
          'babel-loader',
          {
            resolve: '@mdx-js/loader',              options:{
              rehypePlugins: [rehypePrism]
             }
          }
        ]
      }
    ] 
  }
}
