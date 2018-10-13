import React, { Component } from 'react'
import PictureSlider from './PictureSlider'
import { Jumbotron, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap'
import LaddaButton, { XL, EXPAND_LEFT } from 'react-ladda'

import { fetchPictures } from '../redux/actions/pictures'
import { connect } from 'react-redux'


const matchDispatchToProps = (dispatch) => {
    return {
        getPictures: () => dispatch(fetchPictures())
    }
}

const mapStateToProps = (state) => {
    return {
        pictures: state.pictures
    }
}

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }

        this.toggle = this.toggle.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.props.getPictures()
    }


    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    onSubmit(event) {
        event.preventDefault()

        this.toggle()
    }

    render() {
        const { isCreating } = this.props.pictures
        return (
            <div>
                <Jumbotron>
                    <Row>
                        <Col xs="12" sm="6">
                            <h2 className="display-3">Pictures</h2>
                        </Col>
                        <Col style={{ textAlign: 'right' }} xs="12" sm="6">
                            <Button color="success" size="lg" onClick={this.toggle}>Add Picture</Button>
                        </Col>
                    </Row>
                </Jumbotron>
                <PictureSlider />
                <Form onSubmit={this.onSubmit}>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Picture Upload</ModalHeader>
                        <ModalBody>
                            <Input type="file" name="file" id="exampleFile" />
                        </ModalBody>
                        <ModalFooter>
                            <LaddaButton
                                loading={isCreating}
                                data-color='#eee'
                                data-size={XL}
                                data-style={EXPAND_LEFT}
                                data-spinner-size={30}
                                data-spinner-color='#ddd'
                                data-spinner-lines={12}
                                className='btn btn-primary'
                            >Submit</LaddaButton>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Form>
            </div>

        )
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Home)