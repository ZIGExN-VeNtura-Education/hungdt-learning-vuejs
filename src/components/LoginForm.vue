<template>
    <div id="login-form">
        <form action="">
            <h1>Authentication</h1>
            <p>Fill out this form to login.</p>
            <hr>

            <label for="email"><b>Email</b></label>
            <input
                    type="text"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    required
            >

            <br>

            <label for="psw"><b>Password</b></label>
            <input
                    type="password"
                    placeholder="Enter your password"
                    id="psw"
                    name="psw"
                    required
            >

            <p>
                <button type="submit">Login</button>
            </p>
        </form>
    </div>
</template>
