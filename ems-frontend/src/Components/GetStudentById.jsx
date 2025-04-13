import React, { useState } from "react";
import { getStudentById } from "../services/api";

const GetStudentById = () => {
    const [studentId, setStudentId] = useState("");
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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
            const response = await getStudentById(studentId); // Call the API
            console.log(response);
            setStudent(response.data); // Set the fetched student data
        } catch (error) {
            setError("Student not found. Please check the ID and try again.");
            console.error("Error fetching student:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Get Student By ID</h1>
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

            {/* Display student details */}
            {student && (
                <div style={styles.studentDetails}>
                    <h2>Student Details</h2>
                    <p>
                        <strong>Name:</strong> {student.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {student.email}
                    </p>
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
        backgroundColor: "#fff3e0", // Light orange background
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        textAlign: "center",
        color: "#e65100", // Dark orange heading
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
        border: "1px solid #e65100", // Dark orange border
        fontSize: "16px",
        flex: "1",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#e65100", // Dark orange button
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
    studentDetails: {
        marginTop: "20px",
        padding: "20px",
        backgroundColor: "#ffffff", // White background for details
        borderRadius: "6px",
        border: "1px solid #e65100", // Dark orange border
    },
};

export default GetStudentById;