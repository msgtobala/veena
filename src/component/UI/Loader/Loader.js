import React from "react";

import {LoaderWrapper, LineScalePulseOut} from "./styles";

const Loader = () => {
    return (
        <LoaderWrapper>
            <LineScalePulseOut>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </LineScalePulseOut>
        </LoaderWrapper>
    )
};

export default Loader;