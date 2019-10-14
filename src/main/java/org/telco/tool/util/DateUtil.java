package org.telco.tool.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Locale;

import org.springframework.stereotype.Service;

@Service
public class DateUtil {

	
	public String convertDatetoSimpleDate(String dateString) {
		try {
		DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
		DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss", Locale.ENGLISH);
		LocalDateTime  date = LocalDateTime.parse(dateString, inputFormatter);
		return outputFormatter.format(date);         
		}
		catch(Exception e){
			System.out.println("Error" + e.getMessage());
			return null;
		}
	}
}
