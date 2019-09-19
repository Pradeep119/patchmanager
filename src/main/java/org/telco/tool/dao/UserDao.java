package org.telco.tool.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.telco.tool.model.User;



@Repository
public interface UserDao extends CrudRepository<User, Integer> {

    User findByUsername(String username);
    
    @Query(value = "select * from patch_manage_db.user where username = ?1" , nativeQuery=true)
    User findByUserId(@Param("username") String username);
}


