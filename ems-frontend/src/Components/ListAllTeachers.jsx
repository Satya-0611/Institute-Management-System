import React, { useEffect, useState } from "react";
import { getTeachers } from "../services/api";

const ListAllTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch teachers from the backend
    useEffect(() => {
        const fetchTeachers = async () => {
            setLoading(true);
            try {
                const response = await getTeachers(); // Call the API
                setTeachers(response.data); // Set the fetched data to state
            } catch (error) {
                setError("Failed to fetch teachers. Please try again later.");
                console.error("Error fetching teachers:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeachers();
    }, []);

    // Display loading state
    if (loading) {
        return <p>Loading...</p>;
    }

    // Display error message
    if (error) {
        return <p style={{ color: "red" }}>{error}</p>;
    }

    // Display teachers
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>List All Teachers</h1>
            <ul style={styles.list}>
                {teachers.map((teacher) => (
                    <li key={teacher.id} style={styles.listItem}>
                        <span style={styles.name}>{teacher.name}</span> -{" "}
                        <span style={styles.email}>{teacher.email}</span>
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

export default ListAllTeachers;