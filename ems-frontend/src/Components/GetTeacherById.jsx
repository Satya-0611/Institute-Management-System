import React, { useState } from "react";
import { getTeacherById } from "../services/api";

const GetTeacherById = () => {
    const [teacherId, setTeacherId] = useState(""); // State for teacher ID input
    const [teacher, setTeacher] = useState(null); // State to store the fetched teacher
    const [loading, setLoading] = useState(false); // State for loading indicator
    const [error, setError] = useState(null); // State for error message

    // Function to fetch teacher by ID
    const fetchTeacherById = async () => {
        if (!teacherId) {
            alert("Please enter a teacher ID.");
            return;
        }

        setLoading(true);
        setError(null);
        setTeacher(null);

        try {
            const response = await getTeacherById(teacherId); // Call the API
            setTeacher(response.data); // Set the fetched teacher data
        } catch (error) {
            setError("Teacher not found. Please check the ID and try again.");
            console.error("Error fetching teacher:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Get Teacher By ID</h1>
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

            {/* Display teacher details */}
            {teacher && (
                <div style={styles.teacherDetails}>
                    <h2>Teacher Details</h2>
                    <p>
                        <strong>Name:</strong> {teacher.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {teacher.email}
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
    teacherDetails: {
        marginTop: "20px",
        padding: "20px",
        backgroundColor: "#ffffff", // White background for details
        borderRadius: "6px",
        border: "1px solid #e65100", // Dark orange border
    },
};

export default GetTeacherById;