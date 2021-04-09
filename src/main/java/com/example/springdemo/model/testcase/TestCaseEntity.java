package com.example.springdemo.model.testcase;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TestCaseEntity {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private TestCaseStatus status;
}
