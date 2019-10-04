package org.telco.tool.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.telco.tool.model.Patch;
import org.telco.tool.model.Product;




public interface PatchDao extends CrudRepository<Patch, Integer>{

    @Query(value = "select * from patch_manage_db.patch where id = ?1" , nativeQuery=true)
    public Patch findByMyId(@Param("id") String id);
       
    @Query(value = "SELECT * FROM patch_manage_db.patch WHERE patchstatus = 'pending'", nativeQuery=true)
    public List<Patch> findPendingPatches();
    
    @Query(value = "SELECT patch_id FROM patch_manage_db.patch WHERE patchstatus = 'pending'", nativeQuery=true)
    public List<String> findPendingPatchids();

    @Transactional
    @Modifying
    @Query(value = "UPDATE patch_manage_db.patch SET patchstatus = ?1 WHERE patch_id = ?2" , nativeQuery=true)
    public Integer updateApproveStatues(String patchstatus , String patch_id );
    
    @Query(value = "SELECT patch_id FROM patch where product_id = (Select id from product where name = ?1 limit 1)  order by patch_id desc limit 1" , nativeQuery=true)
    public String findPatchIdFromProductId(@Param("name") String name);
    
    @Query(value = "Select patch_id from patch where patch_id like ?1 order by patch_id desc limit 1 " , nativeQuery=true)
    public String findByLastPatchId(@Param("patch_id") String patch_id);
    
    @Query(value = "Select patch_name from product where name = ?1 limit 1" , nativeQuery=true)
    public String findPtachNameByProduct(@Param("name") String name);
    

     
}
