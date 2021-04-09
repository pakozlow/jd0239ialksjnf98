package com.example.springdemo.integration.inbound.rest.testcase;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/testcase")
public class TestCaseController {

    @GetMapping
    @RequestMapping("/")
    public ResponseEntity<String> helloWorld() {
        return ResponseEntity.ok("Hello world");
    }
}
