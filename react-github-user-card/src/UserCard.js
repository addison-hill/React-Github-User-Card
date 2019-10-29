import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, Button } from 'reactstrap';

const UserCard = props => {
    console.log('props', props)
    return (
        <div className="container">
            <Card className="card" >
                <CardImg top width="200px" src={props.user.avatar_url} alt="avatar pic" />
                <CardBody>
                    <CardTitle>{props.user.name}</CardTitle>
                    <CardText>{props.user.location}</CardText>
                    <CardText>Number of Repos: {props.user.public_repos}</CardText>
                </CardBody>
            </Card>

            <div className="followers">
            {props.followers.map(item => (
                <Card className="card" >
                <CardImg top width="200px" src={item.avatar_url} alt="avatar pic" />
                <CardBody>
                    <CardTitle>{item.login}</CardTitle>
                </CardBody>
            </Card>
            ))}
            </div>
        </div>
    )
}

export default UserCard