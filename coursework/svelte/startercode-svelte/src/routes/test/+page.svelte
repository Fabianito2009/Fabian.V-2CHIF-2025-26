<script lang="ts">
    let email = '';
    let password = '';

    function handleSignIn() {
        console.log('Sign in:', { email, password });
    }

    function handleForgotPassword() {
        console.log('Forgot password clicked');
    }
</script>

<div class="container">
    <div class="logo-section">
        <div class="logo">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="#FFD700"/>
                <rect x="30" y="30" width="40" height="40" fill="none" stroke="#8B7500" stroke-width="2"/>
                <line x1="30" y1="50" x2="70" y2="50" stroke="#8B7500" stroke-width="2"/>
                <line x1="50" y1="30" x2="50" y2="70" stroke="#8B7500" stroke-width="2"/>
            </svg>
        </div>
        <h1 class="logo-text">NutriSchool</h1>
    </div>

    <div class="form-container">
        <div class="form-group">
            <label for="email">Email</label>
            <input
                id="email"
                type="email"
                placeholder="Value"
                bind:value={email}
                class="input-field"
            />
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input
                id="password"
                type="password"
                placeholder="Value"
                bind:value={password}
                class="input-field"
            />
        </div>

        <button class="sign-in-btn" onclick={handleSignIn}>Sign In</button>

        <button class="forgot-password-link" onclick={handleForgotPassword}>
            Forgot password?
        </button>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 20px;
        background-color: #5a6b1a;
    }

    .logo-section {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 50px;
        background-color: #9d9d6d;
        padding: 20px 30px;
        border-radius: 20px;
    }

    .logo {
        width: 80px;
        height: 80px;
        background-color: #8b9d3f;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }

    .logo svg {
        width: 100%;
        height: 100%;
    }

    .logo-text {
        font-size: 28px;
        font-weight: 600;
        color: #333;
        margin: 0;
    }

    .form-container {
        width: 100%;
        max-width: 300px;
        background-color: #8b9d3f;
        padding: 40px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .form-group label {
        font-size: 16px;
        font-weight: 600;
        color: #333;
    }

    .input-field {
        padding: 12px 15px;
        border: 2px solid #ccc;
        border-radius: 8px;
        font-size: 14px;
        background-color: white;
        color: #333;
    }

    .input-field::placeholder {
        color: #aaa;
    }

    .input-field:focus {
        outline: none;
        border-color: #FFD700;
    }

    .sign-in-btn {
        padding: 14px 20px;
        background-color: #FFD700;
        color: white;
        font-size: 18px;
        font-weight: 600;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .sign-in-btn:hover {
        background-color: #FFC700;
    }

    .forgot-password-link {
        background: none;
        border: none;
        color: #333;
        font-size: 14px;
        cursor: pointer;
        text-decoration: underline;
        padding: 0;
        transition: color 0.3s ease;
    }

    .forgot-password-link:hover {
        color: #555;
    }
</style>
