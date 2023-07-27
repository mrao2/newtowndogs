import React, { useState } from 'react';
import { Formik, FormikField } from "formik";


const MyTestForm = () => {
    const [form, setForm] = useState(new Formik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            // do something with the values
        },
    }));

    return (
        <Formik form={form}>
            {({ errors, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        type="text"
                        // value={form.values.name}
                        onChange={handleChange}
                    />
                    <input
                        name="email"
                        type="email"
                        // value={form.values.email}
                        onChange={handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        // value={form.values.password}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    );

}

export default MyTestForm;