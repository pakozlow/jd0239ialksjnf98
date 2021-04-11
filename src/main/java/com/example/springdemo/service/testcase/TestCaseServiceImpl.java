package com.example.springdemo.service.testcase;

import com.example.springdemo.exception.ResourceNotFoundException;
import com.example.springdemo.model.testcase.TestCase;
import com.example.springdemo.repository.testcase.TestCaseRepository;
import org.springframework.stereotype.Service;

import javax.inject.Inject;

@Service
public class TestCaseServiceImpl implements TestCaseService {

    private final TestCaseRepository testCaseRepository;

    @Inject
    public TestCaseServiceImpl(final TestCaseRepository testCaseRepository) {
        this.testCaseRepository = testCaseRepository;
    }

    @Override
    public TestCase updateTestCase(
            final long id,
            final TestCase updateData) {
        return testCaseRepository.findById(id)
                .map(testCase -> {
                    testCase.setName(updateData.getName());
                    testCase.setStatus(updateData.getStatus());
                    return testCaseRepository.save(testCase);
                })
                .orElseThrow(() -> new ResourceNotFoundException(TestCase.class, id));
    }
}
