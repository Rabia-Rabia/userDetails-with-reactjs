import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, ListGroup } from 'react-bootstrap';
import Navs from './../Navs/Navs';
import "./SingleUser.css"
import { NavLink } from 'react-router-dom';

const SingleUser = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({});
    const [userAddress, setUserAddress] = useState({});
    const [userAddressGeo, setUserAddressGeo] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(function (response) {
                // handle success
                setUser(response.data);
                setUserAddress(response.data.address)
                setUserAddressGeo(response.data.address.geo)
            })
    }, [userId]);

    return (
       <Container>
           <Navs/>
           <ListGroup className="userDetail">
               <div>
                   <h1>Details</h1>
                   <ul className="list-group">
                        <li className="list-group-item">
                            <h4>Name:</h4> 
                            <span>{user.name}</span>
                        </li>
                        <li className="list-group-item">
                            <h4>Email:</h4>
                            <span>{user.email}</span>
                        </li>
                        <hr />
                        <li className="list-group-item">
                            <h4>Address:</h4>
                        </li>
                        <li className="list-group-item">
                            City:
                            <span>{userAddress.city}</span>
                        </li>
                        <li className="list-group-item">
                            Street:
                            <span>{userAddress.street}</span>
                        </li>
                        <hr />
                        <li className="list-group-item">
                            <h4>Location:</h4>
                        </li>
                        <li className="list-group-item">
                            lat:
                            <span>{userAddressGeo.lat}</span>
                        </li>
                        <li className="list-group-item">
                            lng:
                            <span>{userAddressGeo.lng}</span>
                        </li>                        
                    </ul>
                    <button className='back'><NavLink to="../">Back</NavLink></button>
               </div>
            </ListGroup>
       </Container>
    );
};

export default SingleUser;