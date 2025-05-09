package com.example.khudadak.repository;

import com.example.khudadak.model.Pest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PestRepository extends JpaRepository<Pest, Long> {
}
