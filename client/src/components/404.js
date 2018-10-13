import React, { Component } from 'react'
import { Jumbotron, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Row>
                        <Col xs="12" sm="6">
                            <h2 className="display-3">Oops.. 404</h2>
                        </Col>
                        <Col style={{ textAlign: 'right' }} xs="12" sm="6">
                            <Link to={'/home'} className={'btn btn-primary btn-lg'}>Home</Link>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        )}
    }

export default NotFound