package com.example.springdemo.controller.testcase;

import com.example.springdemo.controller.testcase.dto.TestCasePutDto;
import com.example.springdemo.model.testcase.TestCase;
import com.example.springdemo.model.testcase.TestCaseStatus;
import com.example.springdemo.repository.testcase.TestCaseRepository;
import com.example.springdemo.service.testcase.TestCaseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/testcases")
public class TestCaseController {

    private final TestCaseRepository testCaseRepository;
    private final TestCaseService testCaseService;
    private final TestCaseTransformer testCaseTransformer;

    @Inject
    public TestCaseController(
            final TestCaseRepository testCaseRepository,
            final TestCaseService testCaseService,
            final TestCaseTransformer testCaseTransformer) {
        this.testCaseRepository = testCaseRepository;
        this.testCaseService = testCaseService;
        this.testCaseTransformer = testCaseTransformer;
    }

    @GetMapping
    public ResponseEntity<List<TestCase>> getAllTestCases() {
        return ResponseEntity.ok(testCaseRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<TestCase> createTestCase(@RequestBody @Valid final TestCase testCase) {
        return ResponseEntity.ok(testCaseRepository.save(testCase));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TestCase> updateTestCase(
            @PathVariable("id") final long id,
            @RequestBody @Valid final TestCasePutDto testCasePutDto) {
        return ResponseEntity
                .ok(testCaseService.updateTestCase(id, testCaseTransformer.transformToEntity(testCasePutDto)));
    }
}
