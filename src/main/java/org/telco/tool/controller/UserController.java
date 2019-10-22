package org.telco.tool.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.telco.tool.model.ApiResponse;
import org.telco.tool.model.User;
import org.telco.tool.model.UserDto;
import org.telco.tool.service.UserService;

import java.util.Base64;
import java.util.List;

//@CrossOrigin(origins = "*", maxAge = 3600)
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ApiResponse<User> saveUser(@RequestBody UserDto user){

        System.out.println(userService.save(user));

        return new ApiResponse<>(HttpStatus.OK.value(), "User saved successfully.",userService.save(user));
    }

    @GetMapping("/allusers")
    public ApiResponse<List<User>> listUser(){
        return new ApiResponse<>(HttpStatus.OK.value(), "User list fetched successfully.",userService.findAll());
    }

//    @GetMapping("/{id}")
//    public ApiResponse<User> getOne(@PathVariable int id){
//        return new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.",userService.findById(id));
//    }

    @PutMapping("/{id}")
    public ApiResponse<UserDto> update(@RequestBody UserDto userDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "User updated successfully.",userService.update(userDto));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
        userService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "User deleted successfully.", null);
    }

    
    
    @GetMapping("me/{email}")
    public ApiResponse<User> getOne(@PathVariable String email){


    	
    	System.out.println("---------------- Email issss :"+email);
    	
        return new ApiResponse<>(HttpStatus.OK.value(), "User data.",userService.findByUser(email));
    }



}
