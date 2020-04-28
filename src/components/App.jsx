import React from 'react';
import LoginExample from './LoginExample';
import Container from 'react-bootstrap/Container';
import EmailExample from './EmailExample';

const App = () => {
    return (
        <Container className="justify-content-center">
            <h1>Form Examples</h1>
            <p>This is the demo for the completed recipe on <a href="https://iorecipes.com/r/react-forms">ioRecipes.com</a>.</p>
            <p>It's a simple, but complete example of using react, react-bootstrap, and formik to generate interactive forms.</p>
            <hr />
            <EmailExample />
            <hr />
            <LoginExample />
            <hr />
            <p>In this example, we have a long (1.5s) delay when you submit each form to illustrate the state when a form is waiting for a callback from an API.</p>
            <p><a href="https://github.com/DominikGorecki/ReactFormRecipe">Github Link</a></p>
        </Container>
    );
};

export default App;