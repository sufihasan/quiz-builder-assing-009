import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <h2>Question & Answer:</h2>
            <Card className='p-3 mb-4 mt-3'>
                <Card.Title>What is the purpose of react router ?</Card.Title>
                <Card.Body>The Router in React JS is primarily used to create Single Page Web Apps.
                    In the application, React Router is utilized to define various routes.
                    When a user enters a URL into your browser and the URL route equals one
                    of several 'pathways' as in the router folder, the user is sent to that route.</Card.Body>

            </Card>
            <Card className='p-3 mb-4'>
                <Card.Title>How does context api works ?</Card.Title>
                <Card.Body>The Context API helps share data between components which you
                    can't easily share with props, for example, complex data objects.
                    React Context API provides a way to send data like userid, auth, and theme
                    through the component tree without sending any props manually at every level.</Card.Body>

            </Card>
            <Card className='p-3 mb-4'>
                <Card.Title>catr title</Card.Title>
                <Card.Body>This is some text within a card body.</Card.Body>

            </Card>
        </div>
    );
};

export default Blog;