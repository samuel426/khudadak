package com.example.khudadak.util;

import com.example.khudadak.dto.CropRequestDto;
import com.example.khudadak.dto.CropResponseDto;
import com.example.khudadak.model.Crop;
import com.example.khudadak.model.Pest;
import com.example.khudadak.repository.CropRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Component
public class ScoreCalculator {

    private final CropRepository cropRepository;

    @Autowired
    public ScoreCalculator(CropRepository cropRepository) {
        this.cropRepository = cropRepository;
    }

    public CropResponseDto calculateScore(Crop crop, CropRequestDto userInput) {
        int score = 0;
        Map<String, String> breakdown = new HashMap<>();

        // 이전 작물 정보 가져오기
        Crop previousCrop = null;
        if (userInput.getPreviousCrop() != null) {
            Optional<Crop> previousCropOpt = cropRepository.findByName(userInput.getPreviousCrop());
            previousCrop = previousCropOpt.orElse(null);
        }

        // 1. 지역 적합성
        if (crop.getCompatibleRegions().contains(userInput.getRegion())) {
            score += 10;
            breakdown.put("지역 적합성", "+10");
        }

        // 2. pH 적합성
        if (userInput.getSoilPH() >= crop.getPhMin() && userInput.getSoilPH() <= crop.getPhMax()) {
            score += 15;
            breakdown.put("pH 적합성", "+15");
        }

        // 3. 질소 상태
        if (userInput.getNitrogenStatus().equals("부족")) {
            if (crop.isNitrogenFixing()) {
                score += 15;
                breakdown.put("질소 고정 효과", "+15");
            } else if (!crop.getType().equals("잎채소")) {
                score += 10;
                breakdown.put("질소 상태(부족)", "+10");
            }
        }

        // 4. 뿌리 다양성
        if (previousCrop != null && !previousCrop.getRootType().equals(crop.getRootType())) {
            score += 10;
            breakdown.put("뿌리 다양성", "+10");
        }

        // 5. 병해충 회피
        int pestScore = 10;
        if (previousCrop != null) {
            for (Pest pest : crop.getPests()) {
                if (previousCrop.getPests().stream().anyMatch(p -> p.getPestName().equals(pest.getPestName()))) {
                    pestScore -= 2;
                }
            }
        }
        score += Math.max(pestScore, 0);
        breakdown.put("병해충 회피", "+" + pestScore);

        // 6. 작부 시기 겹침
        if (userInput.getAvailablePeriod().contains(crop.getPlantingMonth())) {
            score += 10;
            breakdown.put("작부 시기 겹침", "+10");
        }

        // 7. 생육 기간 다양성
        if (previousCrop != null) {
            int durationDifference = Math.abs(previousCrop.getGrowingDays() - crop.getGrowingDays());
            int diversityScore = Math.min(10, durationDifference / 10);
            score += diversityScore;
            breakdown.put("생육 기간 다양성", "+" + diversityScore);
        }

        return new CropResponseDto(crop.getName(), score, breakdown);
    }
}
