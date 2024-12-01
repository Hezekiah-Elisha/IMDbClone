"use client";

import {useEffect} from "react";

export default function Error({ error, reset }) {

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className={"text-center flex flex-col justify-center align-middle items-center"}>
            <p>{error.message}</p>
            <button className={"text-amber-500 hover:underline hover:underline-offset-8"} onClick={() => reset()}>Try again</button>
        </div>
    );
}