package org.telco.tool.dao;

import org.springframework.data.repository.CrudRepository;
import org.telco.tool.model.Product;

public interface ProductDao extends CrudRepository<Product, Integer>{

}
