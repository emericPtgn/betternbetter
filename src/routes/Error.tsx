import React from 'react';
import { useRouteError } from 'react-router-dom';
import { ErrorPropTypes } from '../type/ErrorPropTypes';

const Error = () => {
    const error = useRouteError();

    // Vérifier que l'objet est bien conforme à ErrorPropTypes
    if (error && typeof error === 'object' && 'statusText' in error && 'message' in error) {
        const typedError = error as ErrorPropTypes;

        return (
            <section id="error_page">
                <h1>Ooops !</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{typedError.statusText || typedError.message}</i>
                </p>
            </section>
        );
    }

    // Fallback si `error` n'est pas du type attendu
    return (
        <section id="error_page">
            <h1>Ooops !</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </section>
    );
};

export default Error;
