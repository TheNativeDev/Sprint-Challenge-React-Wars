import React from 'react';
import {Card, CardTitle, CardText, Col, Button} from 'reactstrap';
import './StarWars.css';

const StarwarsCard = props =>{
    return (
        <Col xs="6" md="6">
            <Card body className="card">
                <CardTitle>{props.person.name}</CardTitle>
                <CardText>Gender: {props.person.gender}</CardText>
                <CardText>Birth Year: {props.person.birth_year}</CardText>
                <Button href={props.person.url} target="'_blank">Check out the API</Button>
            </Card>
        </Col>
    );
};

export default StarwarsCard;