import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';


const schema = Yup.object({
    email: Yup
        .string()
        .email("Not a proper email")
        .required("Email required"),
    password: Yup
        .string()
        .required("Password is required")
        .min(5, "Min of 5 characters")

});

const LoginOne = () => {
    return (
        <Card body>
            <Card.Title>Login Example One</Card.Title>
            <Formik
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 1400);
                }}
                initialValues={
                    { email: "", password: "" }
                }
            >
                {formik => (

                    <Form noValidate onSubmit={formik.handleSubmit}>
                        <Form.Row className="justify-content-md-center">
                            <Form.Group as={Col} md="6" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    disabled={formik.isSubmitting}
                                    isInvalid={formik.touched.email && formik.errors.email}
                                />
                                {formik.touched.email && formik.errors.email &&

                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.email}
                                    </Form.Control.Feedback>
                                }
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    disabled={formik.isSubmitting}
                                    isInvalid={formik.touched.password && formik.errors.password}
                                />
                                {formik.touched.password && formik.errors.password &&
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.password}
                                    </Form.Control.Feedback>
                                }
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="justify-content-md-center">
                            <Form.Group as={Col} md="12">
                                <Button style={{ transition: "all 1s ease" }} disabled={formik.isSubmitting} type="submit">
                                    {formik.isSubmitting &&
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                    }
                                    {!formik.isSubmitting &&
                                        <span>Login</span>
                                    }
                                </Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                )
                }

            </Formik >
        </Card>
    )
};

export default LoginOne;