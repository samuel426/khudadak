package com.example.khudadak.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "pests")
public class Pest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String pestName;
    private String riskLevel;

    @ManyToMany(mappedBy = "pests")
    private List<Crop> crops;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPestName() { return pestName; }
    public void setPestName(String pestName) { this.pestName = pestName; }

    public String getRiskLevel() { return riskLevel; }
    public void setRiskLevel(String riskLevel) { this.riskLevel = riskLevel; }

    public List<Crop> getCrops() { return crops; }
    public void setCrops(List<Crop> crops) { this.crops = crops; }
}
