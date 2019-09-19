package org.telco.tool.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.telco.tool.dao.ProductDao;
import org.telco.tool.model.Product;

@Service
public class ProductServiceImpl {
	
	
	@Autowired
	ProductDao productDao;
	
	public List<Product> getAllProducts(){
		return (List<Product>) productDao.findAll();
	}
}
