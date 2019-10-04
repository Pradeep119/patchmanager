package org.telco.tool.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.springframework.stereotype.Service;

@Service
public class DateUtil {

	
	public String convertDatetoSimpleDate(String dateString) {
       String formatedDateString = null;
		try {
            System.out.println("~~~~~~~~~~"+dateString);
            DateFormat srcDf = new SimpleDateFormat("E MMM dd yyyy HH:mm:ss 'GMT'z", Locale.ENGLISH);
            Date date = srcDf.parse(dateString);
            DateFormat destDf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            formatedDateString = destDf.format(date);
            return formatedDateString;
        } catch (ParseException e) {
            e.printStackTrace();
            return formatedDateString;
        }    
		
		
        
	}
}
