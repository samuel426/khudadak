package com.example.khudadak.dto;

import java.util.List;

public class CropRequestDto {

    private String region;
    private double soilPH;
    private String nitrogenStatus;
    private int soilArea;
    private String previousCrop;
    private List<Integer> availablePeriod;
    private List<String> pests;  // 추가된 필드

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public double getSoilPH() {
        return soilPH;
    }

    public void setSoilPH(double soilPH) {
        this.soilPH = soilPH;
    }

    public String getNitrogenStatus() {
        return nitrogenStatus;
    }

    public void setNitrogenStatus(String nitrogenStatus) {
        this.nitrogenStatus = nitrogenStatus;
    }

    public int getSoilArea() {
        return soilArea;
    }

    public void setSoilArea(int soilArea) {
        this.soilArea = soilArea;
    }

    public String getPreviousCrop() {
        return previousCrop;
    }

    public void setPreviousCrop(String previousCrop) {
        this.previousCrop = previousCrop;
    }

    public List<Integer> getAvailablePeriod() {
        return availablePeriod;
    }

    public void setAvailablePeriod(List<Integer> availablePeriod) {
        this.availablePeriod = availablePeriod;
    }

    // Getter, Setter
    public List<String> getPests() {
        return pests;
    }

    public void setPests(List<String> pests) {
        this.pests = pests;
    }
}
