package com.example.khudadak.dto;

import java.util.Map;

public class CropResponseDto {
    private String cropName;
    private int score;
    private Map<String, String> breakdown;

    public CropResponseDto(String cropName, int score, Map<String, String> breakdown) {
        this.cropName = cropName;
        this.score = score;
        this.breakdown = breakdown;
    }

    public String getCropName() { return cropName; }
    public void setCropName(String cropName) { this.cropName = cropName; }

    public int getScore() { return score; }
    public void setScore(int score) { this.score = score; }

    public Map<String, String> getBreakdown() { return breakdown; }
    public void setBreakdown(Map<String, String> breakdown) { this.breakdown = breakdown; }
}
