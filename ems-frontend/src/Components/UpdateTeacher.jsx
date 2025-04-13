import React, { useState } from "react";
import { getTeacherById, updateTeacher } from "../services/api";

const UpdateTeacher = () => {
    const [teacherId, setTeacherId] = useState(""); // State for teacher ID input
    const [name, setName] = useState(""); // State for updated name
    const [email, setEmail] = useState(""); // State for updated email
    const [teacher, setTeacher] = useState(null); // State to store fetched teacher
    const [loading, setLoading] = useState(false); // State for loading indicator
    const [error, setError] = useState(null); // State for error message
    const [success, setSuccess] = useState(false); // State for success message

    // Fetch teacher by ID
    const fetchTeacherById = async () => {
        if (!teacherId) {
            alert("Please enter a teacher ID.");
            return;
        }

        setLoading(true);
        setError(null);
        setTeacher(null);

        try {
            const response = await getTeacherById(teacherId); // Fetch teacher
            setTeacher(response.data);
            setName(response.data.name); // Pre-fill name
            setEmail(response.data.email); // Pre-fill email
        } catch (error) {
            setError("Teacher not found. Please check the ID and try again.");
            console.error("Error fetching teacher:", error);
        } finally {
            setLoading(false);
        }
    };

    // Update teacher
    const handleUpdate = async () => {
        if (!teacherId || !name || !email) {
            alert("Please fill in all fields.");
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const updatedTeacher = { name, email };
            await updateTeacher(teacherId, updatedTeacher); // Update teacher
            setSuccess("Teacher updated successfully!");
            setTeacher(null); // Clear fetched teacher
            setName(""); // Clear name input
            setEmail(""); // Clear email input
            setTeacherId(""); // Clear ID input
        } catch (error) {
            setError("Failed to update teacher. Please try again.");
            console.error("Error updating teacher:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Update Teacher</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Enter Teacher ID"
                    value={teacherId}
                    onChange={(e) => setTeacherId(e.target.value)}
                    style={styles.input}
                />
                <button onClick={fetchTeacherById} style={styles.button}>
                    Find
                </button>
            </div>

            {/* Display loading state */}
            {loading && <p>Loading...</p>}

            {/* Display error message */}
            {error && <p style={styles.error}>{error}</p>}

            {/* Display success message */}
            {success && <p style={styles.success}>{success}</p>}

            {/* Display form if teacher is found */}
            {teacher && (
                <div style={styles.formContainer}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />
                    <button onClick={handleUpdate} style={styles.button}>
                        Update
                    </button>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#f3e5f5", // Light purple background
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        textAlign: "center",
        color: "#6a1b9a", // Dark purple heading
        marginBottom: "20px",
    },
    inputContainer: {
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
    },
    input: {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #6a1b9a", // Dark purple border
        fontSize: "16px",
        flex: "1",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#6a1b9a", // Dark purple button
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
    formContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
};

export default UpdateTeacher;