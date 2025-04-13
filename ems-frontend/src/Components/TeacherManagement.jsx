import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherManagement = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h1>Teacher Management</h1>
            <div style={styles.optionsContainer}>
                <div style={styles.optionCard} onClick={() => navigate("/teachers/list-all")}>
                    <h2>List All Teachers</h2>
                    <p>View all teachers.</p>
                </div>
                <div style={styles.optionCard} onClick={() => navigate("/teachers/add")}>
                    <h2>Add Teacher</h2>
                    <p>Add a new teacher.</p>
                </div>
                <div style={styles.optionCard} onClick={() => navigate("/teachers/get-by-id")}>
                    <h2>Get Teacher By ID</h2>
                    <p>Find a teacher by ID.</p>
                </div>
                <div style={styles.optionCard} onClick={() => navigate("/teachers/update")}>
                    <h2>Update Teacher</h2>
                    <p>Update an existing teacher.</p>
                </div>
                <div style={styles.optionCard} onClick={() => navigate("/teachers/delete")}>
                    <h2>Delete Teacher</h2>
                    <p>Delete a teacher.</p>
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

export default TeacherManagement;