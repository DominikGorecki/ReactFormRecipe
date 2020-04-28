import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import * as Yup from 'yup';
import { Formik } from 'formik';

const schema = Yup.object({
    email: Yup
        .string()
        .email("Not a proper email")
        .required("Email required"),
});

const RenderFormComponents = (formik) => {
    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Row className="justify-content-md-center">
                <Form.Group as={Col} md="9" controlId="email">
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
                <Form.Group as={Col} md="3">
                    <Button
                        disabled={formik.isSubmitting}
                        type="submit">

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
                            <span>Subscribe</span>
                        }
                    </Button>
                </Form.Group>
            </Form.Row>
        </Form>
    );
}

const RenderEmailForm = () => {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 1400);
            }}
            initialValues={{ email: "" }}
        >
            {formik => RenderFormComponents(formik)}
        </Formik >
    )
}

const EmailExample = () => {
    return (
        <Card body>
            <Card.Title>Email Example</Card.Title>
            <Card.Text>Simple input of an email input form. Perhaps something that might be used for collecting emails for a newsletter</Card.Text>
            {RenderEmailForm()}
        </Card>
    )
};

export default EmailExample;