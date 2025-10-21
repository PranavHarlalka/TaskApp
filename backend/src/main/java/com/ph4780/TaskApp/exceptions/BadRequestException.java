package com.ph4780.TaskApp.exceptions;

public class BadRequestException extends RuntimeException {
    public BadRequestException(String ex) {
        super(ex);
    }
}
