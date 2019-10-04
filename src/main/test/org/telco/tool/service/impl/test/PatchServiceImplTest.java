package org.telco.tool.service.impl.test;

import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.telco.tool.service.impl.PatchServiceImpl;

@SpringBootTest
@RunWith(SpringRunner.class)
public class PatchServiceImplTest {
	@Autowired
	PatchServiceImpl patchServiceImpl;
	
	private String prouctName = "analytics-hub-orange 2.0.0";
	
	@Test
	public void getNextPatchIdTestforExistingProduct() {
		String patchId = patchServiceImpl.getNextPatchId("analytics-hub-orange-2.0.0");
		System.out.println(patchId);
		assertTrue(!patchId.equals("Error"));
	}
	
	@Test
	public void getNextPatchIdTestforNewProduct() {
		String patchId = patchServiceImpl.getNextPatchId("ADS_HUB");
		System.out.println(patchId);
		assertTrue(!patchId.equals("Error"));
	}
	

}
