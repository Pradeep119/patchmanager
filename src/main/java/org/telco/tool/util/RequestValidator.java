package org.telco.tool.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.telco.tool.model.Patch;

@Service
public class RequestValidator {
	@Autowired
	DateUtil telcoDateUtil;

	private final String ERROR = "Error : ";
	private final String PARAM_ERROR_DATE_NUL = ERROR + "Date Cannot be Null";
	private final String PARAM_ERROR_PROJECT_NAME = ERROR + "Project Name Cannot be Null"; 
	private final String PARAM_ERROR_BUNDLE_NAME = ERROR + "Bundle Name Cannot be Null";
	private final String PARAM_ERROR_PUBLIC_JIRA_ID = ERROR + "Public JiraId Cannot be Null";
	private final String PARAM_ERROR_SUPPORT_JIRA_ID = ERROR + "Support JiraId Cannot be Null";
	private final String PARAM_ERROR_COMPONENET_NAME = ERROR + "Componenet Cannot be Null";
	private final String PARAM_ERROR_DEVELOPER_NAME = ERROR + "Developer Name Cannot be Null";
	private final String PARAM_ERROR_EMAIL= ERROR + "Email Cannot be Null";
	private final String PARAM_ERROR_PRIORITY = ERROR + "Patch Priority Cannot be Null";
	private final String PARAM_ERROR_GIT_TAG = ERROR + "Git Tag Cannot be Null";
	
	public String validatePatchSaveRequest(Patch pacthRequestObject) {
		if(pacthRequestObject.getDate() == null || pacthRequestObject.getDate().length() == 0) {
			return PARAM_ERROR_DATE_NUL; 
		}
		if(pacthRequestObject.getProject_name()== null || pacthRequestObject.getProject_name().length() == 0) {
			return PARAM_ERROR_PROJECT_NAME;
		}
		if(pacthRequestObject.getBundle_name()== null || pacthRequestObject.getBundle_name().length() == 0) {
			return PARAM_ERROR_BUNDLE_NAME;
		}
		if(pacthRequestObject.getPublic_jira_id()== null || pacthRequestObject.getPublic_jira_id().length() == 0) {
			return PARAM_ERROR_PUBLIC_JIRA_ID;
		}
		if(pacthRequestObject.getSupport_jira_id()== null || pacthRequestObject.getSupport_jira_id().length() == 0) {
			return PARAM_ERROR_SUPPORT_JIRA_ID;
		}
		if(pacthRequestObject.getComponnents()== null || pacthRequestObject.getComponnents().length() == 0) {
			return PARAM_ERROR_COMPONENET_NAME;
		}
		if(pacthRequestObject.getDeveloper_name()== null || pacthRequestObject.getDeveloper_name().length() == 0) {
			return PARAM_ERROR_DEVELOPER_NAME;
		}
		if(pacthRequestObject.getEmail()== null || pacthRequestObject.getEmail().length() == 0) {
			return PARAM_ERROR_EMAIL;
		}
		if(pacthRequestObject.getPriority()== null || pacthRequestObject.getPriority().length() == 0) {
			return PARAM_ERROR_PRIORITY;
		}
		if(pacthRequestObject.getGit_tag()== null || pacthRequestObject.getGit_tag().length() == 0) {
			return PARAM_ERROR_GIT_TAG;
		}
		return null;
	}
	
}
