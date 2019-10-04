package org.telco.tool.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.telco.tool.model.Product;
import org.telco.tool.service.impl.ProductServiceImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	ProductServiceImpl ProductServiceImpl;
	
	   @GetMapping("/allproducts")
		public List<Product> getProducts() {
			return ProductServiceImpl.getAllProducts();
		}
	   
	   @GetMapping("/list")
		public List<String> getDistinctProdcutNameList() {
			return ProductServiceImpl.getDistinctProductList();
		}

}
