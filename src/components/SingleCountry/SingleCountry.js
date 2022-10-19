import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const SingleCountry = ({ country }) => {
    return (
        <div className='col'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='w-100  d-block' variant="top" src={country.flags.png} />
                <Card.Body>
                    <Card.Title>{country.name.common}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCountry;