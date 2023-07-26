import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useForm } from "react-hook-form";
import useFetch from "use-http";

const MyFormValidator = () => {
    const { register, handleSubmit } = useForm();
    const { data, loading, error } = useFetch("/api/test_data");

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" ref={register("name")} />
            <input name="email" ref={register("email")} />
            <Button type="submit">Submit</Button>
        </form>
    )

}

export default MyFormValidator;