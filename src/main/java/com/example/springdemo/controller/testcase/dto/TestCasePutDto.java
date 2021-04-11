package com.example.springdemo.controller.testcase.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class TestCasePutDto {

    @NotBlank
    private String name;

    @NotBlank
    private String status;

}
