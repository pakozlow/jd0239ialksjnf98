package com.example.springdemo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class IllegalEnumValueException extends RuntimeException {

    public <T> IllegalEnumValueException(final Class<T> enumClass, final Throwable cause) {
        super(String.format("Illegal value for enum %s provided. Must be one of: %s", enumClass.getSimpleName(),
                            enumClass.isEnum()
                            ? Arrays.stream(enumClass.getEnumConstants())
                                    .map(Object::toString)
                                    .collect(Collectors.toList())
                            : Collections.emptyList())
        );
        initCause(cause);
    }

}
