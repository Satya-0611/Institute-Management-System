import React, { useEffect, useState } from "react";
import { getStudents } from "../services/api";

const ListAllStudents = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch students from the backend
    useEffect(() => {
        const fetchStudents = async () => {
            setLoading(true);
            try {
                const response = await getStudents(); // Call the API
                setStudents(response.data); // Set the fetched data to state
            } catch (error) {
                setError("Failed to fetch students. Please try again later.");
                console.error("Error fetching students:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    // Display loading state
    if (loading) {
        return <p>Loading...</p>;
    }

    // Display error message
    if (error) {
        return <p style={{ color: "red" }}>{error}</p>;
    }

    // Display students
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>List All Students</h1>
            <ul style={styles.list}>
                {students.map((student) => (
                    <li key={student.id} style={styles.listItem}>
                        <span style={styles.name}>{student.name}</span> -{" "}
                        <span style={styles.email}>{student.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#e6f7ff", // Light cyan background
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        textAlign: "center",
        color: "#0077b6", // Dark blue heading
        marginBottom: "20px",
    },
    list: {
        listStyle: "none",
        padding: "0",
    },
    listItem: {
        padding: "10px",
        borderBottom: "1px solid #0077b6", // Dark blue border
        fontSize: "1.1rem",
    },
    name: {
        fontWeight: "bold",
        color: "#0077b6", // Dark blue name
    },
    email: {
        color: "#555", // Gray email
    },
};

export default ListAllStudents;