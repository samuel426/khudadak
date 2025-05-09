package com.example.khudadak.service;

import com.example.khudadak.dto.CropRequestDto;
import com.example.khudadak.dto.CropResponseDto;
import com.example.khudadak.model.Crop;
import com.example.khudadak.repository.CropRepository;
import com.example.khudadak.util.ScoreCalculator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CropService {

    @Autowired
    private CropRepository cropRepository;

    @Autowired
    private ScoreCalculator scoreCalculator;

    public List<CropResponseDto> recommendCrops(CropRequestDto userInput) {
        List<Crop> crops = cropRepository.findAll();
        return crops.stream()
                .map(crop -> scoreCalculator.calculateScore(crop, userInput))
                .sorted((c1, c2) -> Integer.compare(c2.getScore(), c1.getScore()))
                .collect(Collectors.toList());
    }
}
