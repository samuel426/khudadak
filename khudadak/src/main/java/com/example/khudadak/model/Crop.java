package com.example.khudadak.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "crops")
public class Crop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;
    private String rootType;
    private boolean nitrogenFixing;
    private float phMin;
    private float phMax;
    private int plantingMonth;
    private int harvestingMonth;
    private int growingDays;

    @ManyToMany
    @JoinTable(
            name = "crop_pests",
            joinColumns = @JoinColumn(name = "crop_id"),
            inverseJoinColumns = @JoinColumn(name = "pest_id")
    )
    private List<Pest> pests;

    @ManyToMany
    @JoinTable(
            name = "crop_regions",
            joinColumns = @JoinColumn(name = "crop_id"),
            inverseJoinColumns = @JoinColumn(name = "region_id")
    )
    private List<Region> regions;

    // Getters and Setters

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getRootType() { return rootType; }
    public void setRootType(String rootType) { this.rootType = rootType; }

    public boolean isNitrogenFixing() { return nitrogenFixing; }
    public void setNitrogenFixing(boolean nitrogenFixing) { this.nitrogenFixing = nitrogenFixing; }

    public float getPhMin() { return phMin; }
    public void setPhMin(float phMin) { this.phMin = phMin; }

    public float getPhMax() { return phMax; }
    public void setPhMax(float phMax) { this.phMax = phMax; }

    public int getPlantingMonth() { return plantingMonth; }
    public void setPlantingMonth(int plantingMonth) { this.plantingMonth = plantingMonth; }

    public int getHarvestingMonth() { return harvestingMonth; }
    public void setHarvestingMonth(int harvestingMonth) { this.harvestingMonth = harvestingMonth; }

    public int getGrowingDays() { return growingDays; }
    public void setGrowingDays(int growingDays) { this.growingDays = growingDays; }

    public List<Pest> getPests() { return pests; }
    public void setPests(List<Pest> pests) { this.pests = pests; }

    public List<Region> getRegions() { return regions; }
    public void setRegions(List<Region> regions) { this.regions = regions; }

    public List<String> getCompatibleRegions() {
        return regions.stream().map(Region::getRegionName).toList();
    }
}
