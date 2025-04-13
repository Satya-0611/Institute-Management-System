import React from "react";
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
    const navigate = useNavigate();

    let manageTeachers = () => {
        navigate('/manage-teachers');
    }

    let manageStudents = () => {
        navigate('/manage-students');
    }


    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Admin Panel</h1>
            <div style={styles.optionsContainer}>
                <div style={styles.optionCard} onClick={manageStudents}>
                    <h2>Manage Students</h2>
                    <p>Add, update, or delete student records.</p>
                </div>
                <div style={styles.optionCard} onClick={manageTeachers}>
                    <h2>Manage Teachers</h2>
                    <p>Add, update, or delete teacher records.</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        margin: "0 auto",
        backgroundColor: "#faeda7",
        borderRadius: "15px",
        height: "60%",
    },
    heading: {
        textAlign: "center",
        marginBottom: "30px",
        fontSize: "2.5rem",
        color: "#333",
    },
    optionsContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "40px",
        display: "flex"
    },
    optionCard: {
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        backgroundColor: "#fce460",
    },
    optionCardHover: {
        transform: "scale(1.5)",
        boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
    },
};

export default AdminPanel;