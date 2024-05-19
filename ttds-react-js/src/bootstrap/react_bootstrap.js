import React from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import {BsAward, BsFillXDiamondFill} from 'react-icons/bs'
import {FaAccessibleIcon} from 'react-icons/fa'

const ReactBootstrap = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col style={{backgroundColor: 'red'}}>First</Col>
                    <Col style={{backgroundColor: 'green'}} xs={6} md={2}>Second</Col>
                    <Col style={{backgroundColor: 'blue'}}>Fifth</Col>
                    <Button>Content</Button>
                </Row>
                <Row>
                    <Col>Third</Col>
                    <Col>Fourth</Col>
                    <Col></Col>
                    <BsFillXDiamondFill/>
                    <BsAward style={{color: 'blue'}} size={50}/>
                    <FaAccessibleIcon/>
                </Row>
            </Container>
        </div>
    );
}

export default ReactBootstrap;
