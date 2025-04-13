import React, { useState } from "react";
import { addTeacher } from "../services/api";
import { useNavigate } from 'react-router-dom'

const AddTeacher = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            addTeacher({ name, email })
                .then(alert("teacher added successfully"));
            navigator('/teachers/list-all');
            setName("");
            setEmail("");
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div style={styles.container}>
            <h1>Add Teacher</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#e8f5e9", // Light green background
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        textAlign: "center",
        color: "#2e7d32", // Dark green heading
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
};

export default AddTeacher;