import React, { useState } from "react";
import { deleteTeacher } from "../services/api";

const DeleteTeacher = () => {
    const [teacherId, setTeacherId] = useState(""); // State for teacher ID input
    const [loading, setLoading] = useState(false); // State for loading indicator
    const [error, setError] = useState(null); // State for error message
    const [success, setSuccess] = useState(false); // State for success message

    // Delete teacher by ID
    const handleDelete = async () => {
        if (!teacherId) {
            alert("Please enter a teacher ID.");
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            await deleteTeacher(teacherId); // Delete teacher
            setSuccess("Teacher deleted successfully!");
            setTeacherId(""); // Clear ID input
        } catch (error) {
            setError("Failed to delete teacher. Please check the ID and try again.");
            console.error("Error deleting teacher:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Delete Teacher</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Enter Teacher ID"
                    value={teacherId}
                    onChange={(e) => setTeacherId(e.target.value)}
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

export default DeleteTeacher;