package com.ph4780.TaskApp.service;

import com.ph4780.TaskApp.dto.Response;
import com.ph4780.TaskApp.dto.UserRequest;
import com.ph4780.TaskApp.entity.User;

public interface UserService {

    Response<?> signUp(UserRequest userRequest);
    Response<?> login(UserRequest userRequest);
    User getCurrentLoggedInUser();

}