package org.telco.tool.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.telco.tool.model.Patch;




public interface PatchDao extends CrudRepository<Patch, Integer>{
	
    @Query(value = "select * from patch_manage_db.patch where id = ?1" , nativeQuery=true)
    public Patch findByMyId(@Param("id") String id);
    
  
}
