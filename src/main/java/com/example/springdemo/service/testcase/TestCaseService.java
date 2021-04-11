package com.example.springdemo.service.testcase;

import com.example.springdemo.model.testcase.TestCase;

public interface TestCaseService {

    TestCase updateTestCase(long id, TestCase updateData);
}
