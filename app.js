 import React from 'react';
 import ReactDOM from 'react-dom/client'

 const paragraph = React.createElement('p', {} , 'This is p from React');
 
 const parent = React.createElement('div', { id:'parent1'}, 
                        React.createElement('div', { id:'parent2'}, 
                            [
                                React.createElement('h1', {id:"heading"}, "I'am in Heading Tag testing    "),
                                React.createElement('h2', {id:"heading"}, "I'am in Heading 2 Tag")
                            ]
                            
                        )
                    )

    console.log('parent', parent) // object
    console.log('paragraph', paragraph)
    const rootReact = ReactDOM.createRoot(document.getElementById('root'));

    rootReact.render(parent)// takes object and convert it into html element