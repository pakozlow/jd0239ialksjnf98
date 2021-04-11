package com.example.springdemo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    public <T> ResourceNotFoundException(final Class<T> resourceClass, final long resourceId) {
        super(String.format("No resource found for [%s#%s]", resourceClass.getCanonicalName(), resourceId));
    }

}
