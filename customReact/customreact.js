// how the react actually look at the html we are returning through the function

function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)


}

const reactElement = {
    type : 'a',
    // type mean what type of element we have?
    props:{
        href: 'https://google.com',
        target:'_blank',
    },
    children:'Click me to visit google'
}



const mainContainer =  document.querySelector('#root') 

customRender(reactElement, mainContainer)


// we made our own react element
// 1st take a container where we take a root element by query 
// then we need a render method
// then we made a react element by our selves by 2 approaches(loop)
// its a custom render method


// then we go main.js 
// then there we write a function
// at the end we know react also converts our given HTML element in a tree structure
// then inject it 

// then we use a react.createElement there babel injects it into react there is a proper syntax to use that
// here final expression is evaluated expression where the variables injected into that
