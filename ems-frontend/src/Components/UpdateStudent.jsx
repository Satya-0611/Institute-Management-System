import React, { useState } from "react";
import { getStudentById, updateStudent } from "../services/api";

const UpdateStudent = () => {
    const [studentId, setStudentId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Fetch student by ID
    const fetchStudentById = async () => {
        if (!studentId) {
            alert("Please enter a student ID.");
            return;
        }

        setLoading(true);
        setError(null);
        setStudent(null);

        try {
            const response = await getStudentById(studentId); // Fetch student
            setStudent(response.data);
            setName(response.data.name); // Pre-fill name
            setEmail(response.data.email); // Pre-fill email
        } catch (error) {
            setError("Student not found. Please check the ID and try again.");
            console.error("Error fetching student:", error);
        } finally {
            setLoading(false);
        }
    };

    // Update student
    const handleUpdate = async () => {
        if (!studentId || !name || !email) {
            alert("Please fill in all fields.");
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const updatedStudent = { name, email };
            await updateStudent(studentId, updatedStudent); // Update student
            setSuccess("Student updated successfully!");
            setStudent(null); // Clear fetched student
            setName(""); // Clear name input
            setEmail(""); // Clear email input
            setStudentId(""); // Clear ID input
        } catch (error) {
            setError("Failed to update student. Please try again.");
            console.error("Error updating student:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Update Student</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Enter Student ID"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    style={styles.input}
                />
                <button onClick={fetchStudentById} style={styles.button}>
                    Find
                </button>
            </div>

            {/* Display loading state */}
            {loading && <p>Loading...</p>}

            {/* Display error message */}
            {error && <p style={styles.error}>{error}</p>}

            {/* Display success message */}
            {success && <p style={styles.success}>{success}</p>}

            {/* Display form if student is found */}
            {student && (
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

export default UpdateStudent;