package org.telco.tool.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.telco.tool.dao.PatchDao;


@Service
public class PatchServiceImpl {
	
	@Autowired
	PatchDao pacthDao;
	
	public String getNextPatchId(String productName) {
		String comapaitablePatchName = null;
		comapaitablePatchName = pacthDao.findPatchIdFromProductId(productName);
		if(comapaitablePatchName != null && !comapaitablePatchName.isEmpty()){
			String latestPatchNumber = pacthDao.findByLastPatchId(comapaitablePatchName);
			if(latestPatchNumber != null && !latestPatchNumber.isEmpty()) {
				for(int i=0;i<latestPatchNumber.length();i++) {
					if(Character.isDigit(latestPatchNumber.charAt(i))) {
						String patchNUmber = latestPatchNumber.substring(i);
						int number =  Integer.parseInt(patchNUmber);
						String[] partials = patchNUmber.split(Integer.toString(number));
						 return partials[0]+(number+1);					
					}
				}
			}
		}else {
			return "0001";
		}
		return "Error";
	}

}
