import React, { useState } from "react";
import { addStudent } from "../services/api";

const AddStudent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Add a new student
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email) {
            alert("Please fill in all fields.");
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const newStudent = { name, email };
            await addStudent(newStudent);
            setSuccess("Student added successfully!");
            setName("");
            setEmail("");
        } catch (error) {
            setError("Failed to add student. Please try again.");
            console.error("Error adding student:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Add Student</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>
                    Add
                </button>
            </form>

            {/* Display loading state */}
            {loading && <p>Loading...</p>}

            {/* Display error message */}
            {error && <p style={styles.error}>{error}</p>}

            {/* Display success message */}
            {success && <p style={styles.success}>{success}</p>}
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#e8f5e9",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        textAlign: "center",
        color: "#2e7d32",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    input: {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #2e7d32", // Dark green border
        fontSize: "16px",
    },
    button: {
        padding: "10px",
        backgroundColor: "#2e7d32", // Dark green button
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "16px",
    },
    error: {
        color: "red",
        textAlign: "center",
    },
    success: {
        color: "green",
        textAlign: "center",
    },
};

export default AddStudent;