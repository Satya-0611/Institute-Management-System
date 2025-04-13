import React, { useState } from "react";
import { deleteStudent } from "../services/api";

const DeleteStudent = () => {
    const [studentId, setStudentId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Delete student by ID
    const handleDelete = async () => {
        if (!studentId) {
            alert("Please enter a student ID.");
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            await deleteStudent(studentId); // Delete student
            setSuccess("Student deleted successfully!");
            setStudentId(""); // Clear ID input
        } catch (error) {
            setError("Failed to delete student. Please check the ID and try again.");
            console.error("Error deleting student:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Delete Student</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Enter Student ID"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleDelete} style={styles.button}>
                    Delete
                </button>
            </div>

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
        backgroundColor: "#ffebee", // Light red background
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        textAlign: "center",
        color: "#c62828", // Dark red heading
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
        border: "1px solid #c62828", // Dark red border
        fontSize: "16px",
        flex: "1",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#c62828", // Dark red button
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

export default DeleteStudent;