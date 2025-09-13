import React, {useState } from "react";
import axios from "axios";

function Login() {
    const [form, setForm] = useState({email: "", password: "" });

    // Handle input change 
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    
    };

    //Handle login submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", form);
            localStorage.setItem("token", res.data.token); // save Jwt
            alert("login successful!");
            // Redirect user (optional)
            window.location.href = "/dashboard";
        } catch (err) {
            alert(err.response.data.msg || "Login failed");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "centre", marginTop: "50px" }}>
            <form 
              onSubmit={handleSubmit}
              style={{ display: "flex",flexDirection: "column", width: "300px "}}>
                 
                 <h2>Login</h2>
                 <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  />

                  <input
                   type="password"
                   name="password"
                   placeholder="Password"
                   value={form.password}
                   onChange={handleChange}
                   required
                   />
                   <button type="submit" style={{ marginTop: "10px" }}>Login</button>
              </form>
        </div>
    );
}

export default Login;