import React from 'react';
function LoginPage(){
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="email" 
                placeholder="Email" 
                style = {{padding: '5px', marginBottom: '10px'}}
                />
                <input type="password" 
                placeholder="Password" 
                style = {{padding: '5px', marginBottom: '10px'}}
                />
                <input type="submit" value="Enter" />
            </form>
        </div>
    );
}
export default LoginPage;