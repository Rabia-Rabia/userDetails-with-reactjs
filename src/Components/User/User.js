import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Navs from '../Navs/Navs';
import "./User.css"

const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(function (response) {
        // handle success
        setUsers(response.data);
        })
    }, []);
        // console.log(users);
    return (
        <Container>
            <div>
                <Navs/>
                <ListGroup className="userName">
                    {users.map(user => {
                        return(
                            <ListGroup.Item className="userHeading" key={user.id}>
                                <NavLink to={`${user.id}`}><h3>{user.name}</h3></NavLink>
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </div>
            
        </Container>
    );
};

export default User;