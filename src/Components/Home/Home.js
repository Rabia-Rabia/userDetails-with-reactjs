import React from 'react';
import { Container } from 'react-bootstrap';
import Navs from '../Navs/Navs';

const Home = () => {
    return (
        <Container>
            <Navs/>
            <div style={{textAlign: "center", fontSize: "20px", marginTop: "50px"}}>This is Home Page</div>
        </Container>
    );
};

export default Home;