import React from './react.js';

// const reactElement = React.createElement(
//     'div',
//     { class: 'site-header' },
//     React.createElement('h1', null, 'My first React Naive app'),
//     React.createElement('h2', null, 'Awesome Simple'),
//     React.createElement('p', {}, 'Lorem ipsum dolor...'),
//     React.createElement('div', {},
//         React.createElement('p', {}, 'Nested paragraph'),
//         React.createElement('p', {}, 'Nested paragraph2'),
//     ),
// );

function Article({
    title,
    content,
}) {
    return (
        <article>
            <h3>{title}</h3>
            <p>{content}</p>
        </article>
    );
}

function App() {
    return (
        <div>
            <header class="site-header">
                <h1>My Custom React Naive JSX</h1>
                <h2>Awesomeee!!!</h2>
            </header>

            <main>
                <Article title="My first article" content="Lorem ipsum dolor" />
            </main>
        </div>
    );
}

// Setup react
const rootDomElement = document.getElementById('root');

React.render(<App />, rootDomElement);
// React.render(React.createElement(App), rootDomElement);
