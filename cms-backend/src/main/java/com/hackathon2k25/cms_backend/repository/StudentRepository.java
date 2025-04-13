package com.hackathon2k25.cms_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon2k25.cms_backend.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{

}
