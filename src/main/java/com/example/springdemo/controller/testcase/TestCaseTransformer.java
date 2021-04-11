package com.example.springdemo.controller.testcase;

import com.example.springdemo.controller.testcase.dto.TestCasePutDto;
import com.example.springdemo.exception.IllegalEnumValueException;
import com.example.springdemo.model.testcase.TestCase;
import com.example.springdemo.model.testcase.TestCaseStatus;
import org.springframework.stereotype.Component;

@Component
public class TestCaseTransformer {

    TestCase transformToEntity(final TestCasePutDto testCasePutDto) {
        return TestCase.builder()
                .name(testCasePutDto.getName())
                .status(getTestCaseStatus(testCasePutDto))
                .build();
    }

    private TestCaseStatus getTestCaseStatus(final TestCasePutDto testCasePutDto) {
        try {
            return TestCaseStatus.valueOf(testCasePutDto.getStatus().toUpperCase());
        } catch (final IllegalArgumentException e) {
            throw new IllegalEnumValueException(TestCaseStatus.class, e);
        }
    }

}
