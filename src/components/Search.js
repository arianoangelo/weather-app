import React from 'react';
import {Field, Form, Formik, FormikHelpers} from "formik";
import {useEffect, useState} from "react";

function Search({onSearchSubmit}) {

    // Api call
    const [cityName, setCityName] = useState('');

    const handleForm = (text) => {
        setCityName(() => text);
    }

    useEffect(() => {
        onSearchSubmit(cityName);
    }, [cityName])

    return (
        <Formik
            initialValues={{
                searchField: '',
            }}
            onSubmit={(values) => {
                setTimeout(() => {
                    handleForm(values.searchField);
                    // setSubmitting(false);
                }, 500);
            }}
        >
            <Form className={"d-flex flex-row"}>
                <Field className={"form-control mr-sm-2"} id="searchField" name="searchField"
                       placeholder="Insira o nome da cidade"/>
                <button className={"btn btn-outline-light search-submit"} type="submit">Pesquisar</button>
            </Form>
        </Formik>
    )
}

export default Search;