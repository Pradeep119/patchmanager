package org.telco.tool.service;

import java.util.List;

import org.telco.tool.model.User;
import org.telco.tool.model.UserDto;

public interface UserService {

    User save(UserDto user);
    List<User> findAll();
    void delete(int id);

    User findOne(String username);

    User findById(int id);

    UserDto update(UserDto userDto);
    
    
    
    User findByUser(String email);
    
    
}
