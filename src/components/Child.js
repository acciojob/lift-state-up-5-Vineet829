import React from "react";

const Child = ({ isLoggedIn, setIsLoggedIn }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    };

    return (
        <div>
            {!isLoggedIn ? (
                <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input type="text" />
                    <br />
                    <br />
                    <label>Password:</label>
                    <input type="password" />
                    <br />
                    <br />
                    <button type="submit">Login</button>
                </form>
            ) : (
                <p>You are logged in!</p>
            )}
        </div>
    );
};

export default Child;
