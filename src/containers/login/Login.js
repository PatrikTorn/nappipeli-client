import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { actions, connector } from '../../actions';
import { ducks } from '../../tools/duckTools';
import './Login.css';

const connect = connector(
    state => ({
        socket: state.socket,
        loading: state.user.loading
    }),
    {
        login: actions.user.login
    }
);

class Login extends Component {
    state = {
        name: null,
        duckType: null
    }

    login() {
        let msg;
        if (!this.state.name)
            msg = 'Nimi ei voi olla tyhjä!';
        else if (!this.state.duckType)
            msg = 'Valitse ankka!'
        if (msg) return toast.error(msg);

        this.props.login({
            name: this.state.name,
            duckType: this.state.duckType,
            socketId: this.props.socket.id
        })
            .catch(() => toast.error('Virhe kirjautuessa'))
    }

    render() {
        const duckStyle = (duck) => ({
            border: this.state.duckType === duck.type ? '5px solid green' : '0px'
        });

        const DuckOptions = () => {
            return (
                <Row>
                    {Object.values(ducks).map(duck =>
                        <Col>
                            <img
                                src={duck.image}
                                className="duck"
                                style={duckStyle(duck)}
                                onClick={() => this.setState({ duckType: duck.type })}
                            ></img>
                        </Col>
                    )}
                </Row>
            );
        }
        return (
            <div className="login-wrapper">
                <div className="login-container">
                    <h2>Kirjaudu sisään</h2>
                    <Form className="form">
                        <FormGroup>
                            <Label>Nimimerkki</Label>
                            <Input
                                type="text"
                                id="name"
                                placeholder="Nimimerkki"
                                value={this.state.email}
                                onChange={e => this.setState({ name: e.target.value })}
                            />
                        </FormGroup>

                        <Label>Valitse ankka</Label>
                        <DuckOptions />

                        <Button color="success" block onClick={() => this.login()}>
                            Kirjaudu sisään
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default connect(Login);

