package org.telco.tool.util.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.telco.tool.util.DateUtil;

@SpringBootTest
@RunWith(SpringRunner.class)
public class DateUtilTest {

	@Autowired
	DateUtil dateTestUtil;
	
	@Test
	public void testDateForamt() {
		System.out.println(dateTestUtil.convertDatetoSimpleDate("Fri Oct 04 2019 12:00:00 GMT+0530 (India Standard Time)"));
		//
		
	}
}
