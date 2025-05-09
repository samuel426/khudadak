package com.example.khudadak.controller;

import com.example.khudadak.dto.CropRequestDto;
import com.example.khudadak.dto.CropResponseDto;
import com.example.khudadak.service.CropService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/crops")
public class CropController {

    @Autowired
    private CropService cropService;

    @PostMapping("/recommend")
    public List<CropResponseDto> recommendCrops(@RequestBody CropRequestDto userInput) {
        return cropService.recommendCrops(userInput);
    }
}
