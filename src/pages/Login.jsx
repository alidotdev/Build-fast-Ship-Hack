import '../css/login.css'


const Login = () => {

    function togglePassword(passwordFieldId) {
        var input = document.getElementById(passwordFieldId);
        var toggleIcon = event.currentTarget; // Get the clicked icon

        if (input.type === "password") {
            input.type = "text"; // Change to text to show password
            toggleIcon.innerHTML = "&#128064;"; // Change icon to open eye
        } else {
            input.type = "password"; // Change back to password
            toggleIcon.innerHTML = "&#128065;"; // Change icon to closed eye
        }
        }

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
    <div className="row w-100">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="signup-box p-5 ">
                <h2 className="text-white mb-4">Login</h2>
                <p className="text-white-50 mb-4">Enter your account details</p>
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Username" required />
                    </div>
                   
                    <div className="mb-3 position-relative">
                        <input type="password" className="form-control" placeholder= "Password" id="password1" required />
                        <span className="password-toggle" onClick={()=>togglePassword('password1')} >&#128065;</span>
                    </div>
                   
                    <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
                    <p className="text-center text-white-50">Don’t have an account? <a href="#" className="btn btn-dark">Sign-up</a></p>
                    <script>
                        
                    </script>
                    </form>
                    </div>
        </div>
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1 className="text-white mb-4" id="welcome-text">Welcome to APTIMI portal</h1>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fec4cb97ddb97352327db5ce1edd3704d5c188bde30797fdbdefe47c42cf119?placeholderIfAbsent=true&apiKey=c18fb31782d744ef86b24158dec485cb" className="responsive-image" alt="Descriptive image content" />
            </div>
        </div>
    </div>
</div>
  )
}

export default Login
