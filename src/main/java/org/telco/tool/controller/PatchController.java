package org.telco.tool.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.telco.tool.dao.PatchDao;
import org.telco.tool.dao.ProductDao;
import org.telco.tool.model.Patch;
import org.telco.tool.model.Product;
import org.telco.tool.service.impl.ProductServiceImpl;




@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/patch")
public class PatchController {

		@Autowired
		ProductServiceImpl ProductServiceImpl;
		
		@Autowired
		PatchDao patchDao;
		
		@Autowired
		ProductDao ProductDao;
	
	   @GetMapping("/test1")
	   public String backtome() {
		   return "hiiiii";
	   }
	   
	   @GetMapping("/allproducts")
		public List<Product> getProducts() {
			return ProductServiceImpl.getAllProducts();
		}
	   
	   @GetMapping("/allpatches")
		public List<Patch> getPatches() {
		   return (List<Patch>) patchDao.findAll();
		}

		@GetMapping("getabook")
		@ResponseBody
		public ResponseEntity<Patch> getArticleByIdParam(@RequestParam Integer id) {
			Patch patch = patchDao.findById(id).get();
			return new ResponseEntity<Patch>(patch, HttpStatus.OK);
		}
		
		
		
		@RequestMapping(value = "/{libraryId}/book", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	    public Patch createBook(@PathVariable(value = "libraryId") Integer libraryId, @RequestBody Patch book) {
	        
			
				List<Patch> books = new ArrayList<Patch>();
		        Product author1 = new Product();

		        Optional<Product> byId = ProductDao.findById(libraryId);

		        
		        Product author = byId.get();

		        //tie Author to Book
		        book.setProduct(author);

		        Patch book1 = patchDao.save(book);
		        
//		        //tie Book to Author
		        books.add(book1);
		        author1.setBooks((List<Patch>) books);

		        return book1;
	    }
}
