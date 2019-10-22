package org.telco.tool.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.telco.tool.dao.PatchDao;
import org.telco.tool.dao.ProductDao;
import org.telco.tool.model.ApiResponse;
import org.telco.tool.model.Patch;
import org.telco.tool.model.Product;
import org.telco.tool.service.impl.PatchServiceImpl;
import org.telco.tool.service.impl.ProductServiceImpl;
import org.telco.tool.util.DateUtil;
import org.telco.tool.util.RequestValidator;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/patch")
public class PatchController {

	private final String REQUEST_PARAM_ERROR_DATE = "Error : Invalid Date Format";

	@Autowired
	RequestValidator tecloRequestValidator;
	@Autowired
	ProductServiceImpl ProductServiceImpl;
	@Autowired
	PatchServiceImpl patchServiceImpl;
	@Autowired
	DateUtil telcodateUtil;

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

	@GetMapping("/all/patches")
	@ResponseBody
	public ResponseEntity<Patch> getDistinctPatches(@RequestParam Integer id) {
		Patch patch = patchDao.findById(id).get();
		return new ResponseEntity<Patch>(patch, HttpStatus.OK);
	}

	@GetMapping("/pendingpatches")
	public List<Patch> getPendingPatches(){
		return (List<Patch>) patchDao.findPendingPatches();
	}

	@GetMapping("/pendingpatchids")
	public List<String> getPendingPatchId() {
		return (List<String>) patchDao.findPendingPatchids();
	}

	@GetMapping("/patches/update/{patch_id}/{patchstatus}")
	public ResponseEntity<String> updatePatch(@PathVariable("patch_id") String patch_id,
											  @PathVariable("patchstatus") String patchstatus) {

		Patch patch = new Patch();
		patch.setPatch_id(patch_id);
		patch.setPatchstatus(patchstatus);
		int val = patchDao.updateApproveStatues(patchstatus , patch_id);

		if(val == 1){
			return new ResponseEntity<String>("Success" , HttpStatus.OK);
		}else{
			return new ResponseEntity<String>("Failed" , HttpStatus.OK);
		}



	}

	@GetMapping("/generate")
	@ResponseBody
	public ResponseEntity<String> generatePatchId(@RequestParam String productName) {
		String nextNumber = patchServiceImpl.getNextPatchId(productName);
		String patchName = ProductServiceImpl.getPatchNameforProduct(productName);
		String generatedPatchNumber = patchName + nextNumber;
		return new ResponseEntity<String>(generatedPatchNumber, HttpStatus.OK);
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	@ResponseBody
	public ApiResponse<Void> savePatchDetails(@RequestBody Patch patch) {
		String validRequestMessage = tecloRequestValidator.validatePatchSaveRequest(patch);
		if (validRequestMessage == null) {
			Product patchingProduct = ProductDao.getpatchIdByProductName(patch.getProject_name());
			patch.setProduct(patchingProduct);
			String formatedDate = telcodateUtil.convertDatetoSimpleDate(patch.getDate());
			if (formatedDate != null) {
				patch.setDate(formatedDate);
				patchDao.save(patch);
				 return new ApiResponse<>(HttpStatus.OK.value(), "Patch Saved successfully.", null);
			} else {
				return new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), REQUEST_PARAM_ERROR_DATE, null);
			}
		} else {
			return new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), validRequestMessage, null);
		}

	}


}
