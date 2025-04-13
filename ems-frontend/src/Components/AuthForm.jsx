import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log("Logging in with:", formData.email, formData.password);
            // Simulate a successful login
            navigate("/admin"); // Redirect to Admin Panel
        } else {
            console.log("Registering with:", formData.name, formData.email, formData.password);
            // Add registration logic here
        }
    };

    return (
        <div style={styles.container}>
            <h2>{isLogin ? "Login" : "Register"}</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                {!isLogin && (
                    <div style={styles.inputGroup}>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                )}
                <div style={styles.inputGroup}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>
                    {isLogin ? "Login" : "Register"}
                </button>
            </form>
            <p style={styles.toggleText}>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <span
                    style={styles.toggleLink}
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? "Register here" : "Login here"}
                </span>
            </p>
        </div>
    );
};

const styles = {
    container: {
        width: "400px",
        margin: "0 auto",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontSize: "18px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    inputGroup: {
        marginBottom: "20px",
    },
    input: {
        padding: "12px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "16px",
        width: "100%",
    },
    button: {
        padding: "12px",
        fontSize: "18px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        width: "100%",
    },
    toggleText: {
        textAlign: "center",
        marginTop: "20px",
    },
    toggleLink: {
        color: "#007bff",
        cursor: "pointer",
        textDecoration: "underline",
    },
};

export default AuthForm;