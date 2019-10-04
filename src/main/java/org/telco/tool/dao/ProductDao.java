package org.telco.tool.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.telco.tool.model.Patch;
import org.telco.tool.model.Product;

public interface ProductDao extends CrudRepository<Product, Integer>{

	
    @Query(value = "select DISTINCT name from product" , nativeQuery=true)
    public List<String> getAllDistinctProducts();
    
    @Query(value = "Select patch_name from product where name = ?1" , nativeQuery=true)
    public String getpatchNameByProduct(@Param("name") String name);
    
    @Query(value = "Select * from product where name = ?1" , nativeQuery=true)
    public Product getpatchIdByProductName(@Param("name") String name);
    
    @Query(value = "select * from patch where id = ?1" , nativeQuery=true)
    public Patch findByMyId(@Param("id") String id);
    
 
    
}
