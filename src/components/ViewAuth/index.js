import React from "react";
import SearchBox from "../SearchBox";

const AuthView = ({ handleChange, handleSubmit }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Search Here</h1>
            <SearchBox handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    );
};

export default AuthView;
