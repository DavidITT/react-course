import {useFetch} from "../hooks/useFetch.js";
import {useState} from "react";
import {useCounter} from "../hooks/useCounter.js";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const {data, isLoading, hasError} = useFetch( `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    const {author, quote} = !!data && data[0]; //if is true execute...

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                isLoading
                    ?
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <div className="spinner-border text-primary" role="status"></div>
                        <span className="text-primary">&nbsp; Cargando...</span>
                    </div>
                    :
                    <blockquote className="blockquote text-end">
                        <p className="mb-3">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
            }

            <button className="btn btn-primary" onClick={ () => increment()} disabled={isLoading}>
                Siguiente
            </button>

        </>
    )
}