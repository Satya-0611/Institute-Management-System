import React from "react";
import { useNavigate } from "react-router-dom";

const StudentManagement = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Student Management</h1>
            <div style={styles.optionsContainer}>
                <div style={styles.optionCard} onClick={() => navigate("/students/list-all")}>
                    <h2>List All Students</h2>
                    <p>View all students.</p>
                </div>
                <div style={styles.optionCard} onClick={() => navigate("/students/add")}>
                    <h2>Add Student</h2>
                    <p>Add a new student.</p>
                </div>
                <div style={styles.optionCard} onClick={() => navigate("/students/get-by-id")}>
                    <h2>Get Student By ID</h2>
                    <p>Find a student by ID.</p>
                </div>
                <div style={styles.optionCard} onClick={() => navigate("/students/update")}>
                    <h2>Update Student</h2>
                    <p>Update an existing student.</p>
                </div>
                <div style={styles.optionCard} onClick={() => navigate("/students/delete")}>
                    <h2>Delete Student</h2>
                    <p>Delete a student.</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: "#f0f8ff", // Light blue background
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        textAlign: "center",
        color: "#1e90ff", // Dodger blue heading
        marginBottom: "30px",
        fontSize: "2.5rem",
    },
    optionsContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
    },
    optionCard: {
        padding: "20px",
        border: "1px solid #1e90ff", // Dodger blue border
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        backgroundColor: "#ffffff", // White background for cards
        transition: "transform 0.2s, box-shadow 0.2s",
    },
    optionCardHover: {
        transform: "scale(1.05)",
        boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
    },
};

export default StudentManagement;