import React, {useRef} from 'react';
import './Applications.css';
export default function Applications()
{

    return(
        <>
        <h1>GRAMA WARD SACHIVALAYAM APPLICATIONS</h1>
    <p>REVENUE DEPARTMENT:<br/><br/>
	<a href={process.env.PUBLIC_URL+"/ADANGAL.pdf"}>Computerized Adangal </a><br/>
	<a href={process.env.PUBLIC_URL+"/ADANGAL CORRECTION.pdf"}>Adangal Correction</a><br/>
	<a href={process.env.PUBLIC_URL+"/CASTE.pdf"}>Caste</a><br/>
	<a href={process.env.PUBLIC_URL+"/Panchanama for Caste Certificate.pdf"}>Panchanama for Caste Certificate</a><br/>
	<a href={process.env.PUBLIC_URL+"/family membership certificate"}>Family Member Certificate</a><br/>
	<a href={process.env.PUBLIC_URL+"/F-line application(New) application  form (4).docx"}>F-line application</a><br/>
	<a href={process.env.PUBLIC_URL+"/Income application.docx"}>Income Application</a><br/>
	<a href={process.env.PUBLIC_URL+"/Issuance of Income,Asset Certificate  for  Economically Weaker Sections(EWS).pdf"}>Economically Weaker Section</a><br/>
	<a href={process.env.PUBLIC_URL+"/OBC.pdf"}>OBC</a><br/>
    </p>
<p>CIVIL SUPPLIES DEPARTMENT:<br/><br/>
	<a href={process.env.PUBLIC_URL+"/Telugu Application forms for Rice Card (1).pdf"}>Rice Card Applications</a><br/>
	<a href={process.env.PUBLIC_URL+"/RICE CARD FOR SINGLE PERSON.pdf"}>RICE CARD FOR SINGLE PERSON</a><br/>
	<a href={process.env.PUBLIC_URL+"/splitting card.pdf"}>INELIGIBLE SPLITTING OF RICE CARD</a><br/>
	

 </p>
<p>PANCHAYAT RAJ DEPARTMENT:<br/><br/>
	<a href={process.env.PUBLIC_URL+"/NEW PENSION APPLICATION.pdf"}>Pension Application</a><br/>

 </p>

<p>ENERGY DEPARTMENT:<br/><br/>
	<a href={process.env.PUBLIC_URL+"/SPDCL NEW CONNECTION.pdf"}>SPDCL NEW CONNECTION</a><br/>
	<a href={process.env.PUBLIC_URL+"/SPDCL METER TESTING.pdf"}>SPDCL METER TESTING</a><br/>
	<a href={process.env.PUBLIC_URL+"/Title Transfer service-SPDCL.pdf"}>SPDCL TITLE TRANSFER</a><br/>
	<a href={process.env.PUBLIC_URL+"/Meter Burnt or Glass Broken Service-SPDCL.pdf"}>Meter Burnt or Glass Broken Service</a><br/>
	<a href={process.env.PUBLIC_URL+"/Category Change Service-SPDCL.pdf"}>Category Change Service</a><br/>
 </p>
<p>GSWS DEPARTMENT:<br/><br/>
	<a href={process.env.PUBLIC_URL+"/Six step validation.pdf"}>Six step validation</a><br/>
	<a href={process.env.PUBLIC_URL+"/Report of WEA on 6 step validation.pdf"}>Report of WEA & PS on 6 step validation</a><br/>
	<a href={process.env.PUBLIC_URL+"/NBM GRAVIENCE FORM.pdf"}>NBM GRAVIENCE FORM</a><br/><br/>
	<p>HOUSE HOLD MAPPING APPLICATIONS:<br/><br/>
		<a href={process.env.PUBLIC_URL+"/HH Adding (1).pdf"}>HH Adding</a><br/>
		<a href={process.env.PUBLIC_URL+"/HH Death.pdf"}>HH Death</a><br/>
		<a href={process.env.PUBLIC_URL+"/HH Merge.pdf"}>HH Merge</a><br/>
		<a href={process.env.PUBLIC_URL+"/Household_Mapping_splitting form.pdf"}>HH MAPPING SPLITTING APPLICATION</a><br/>
		<a href={process.env.PUBLIC_URL+"/HOUSEHOLD MAPPING SPLIT PS FIELD VERIFICATION FORM.pdf"}>HOUSEHOLD MAPPING SPLIT PS FIELD VERIFICATION</a><br/>
		<a href={process.env.PUBLIC_URL+"/HOUSEHOLD MAPPING SPLIT WEA VERIFICATION FORM.pdf"}>HOUSEHOLD MAPPING SPLIT WEA VERIFICATION</a><br/>
		<a href={process.env.PUBLIC_URL+"/Member Migration on Marriage Grounds Application Form.pdf"}>Member Migration on Marriage Grounds Application Form</a><br/>
	<a href={process.env.PUBLIC_URL+"/Member Migration on Marriage Grounds PSWAS Verification Form.pdf"}>Member Migration on Marriage Grounds PS/WAS Verification Form</a><br/>
 </p>
 </p>
<p>PR & MAUD DEPARTMENT:<br/><br/>
	<a href={process.env.PUBLIC_URL+"/Marriage-Certificate-application-form.pdf"}>Marriage Certificate</a><br/>
 </p>
<p>HEALTH & FAMILY WELFARE DEPARTMENT:<br/><br/>
	<a href={process.env.PUBLIC_URL+"/NEW  APPLICATION FOR HEALTH CARD.pdf"}>NEW  APPLICATION FOR HEALTH CARD</a><br/>
	<a href={process.env.PUBLIC_URL+"/HEALTH CARD ADD MEMBER.pdf"}>HEALTH CARD ADD MEMBER</a><br/>
	<a href={process.env.PUBLIC_URL+"/HEALTH CARD Delete_Member.pdf"}>HEALTH CARD DELETE MEMBER</a><br/>
	<a href={process.env.PUBLIC_URL+"/HEALTH CARD Edit_Member.pdf"}>HEALTH CARD EDIT MEMBER</a><br/>
	
 </p>
<p>SCHEME RELATED APPLICATIONS:<br/><br/>
	<a href={process.env.PUBLIC_URL+"/YSR CHEYUTHA.pdf"}>YSR CHEYUTHA</a><br/>
	<a href={process.env.PUBLIC_URL+"/YSR Jalakala Application Form pdf.pdf"}>YSR Jalakala Application Form</a><br/>
	<a href={process.env.PUBLIC_URL+"/cheyutha new 6 step.pdf"}>Cheyutha New 6step Application</a><br/>
	<a href={process.env.PUBLIC_URL+"/CHEYUTHA GRIEVANCE FORM.pdf"}>CHEYUTHA GRIEVANCE FORM</a><br/>
	<a href={process.env.PUBLIC_URL+"/THODU.pdf"}>THODU</a><br/>
</p>
<p>MISCILANEOUS APPLICATIONS:<br/><br/>
	<a href={process.env.PUBLIC_URL+"/LEAVE FORM.pdf"}>LEAVE FORM</a><br/>
	<a href={process.env.PUBLIC_URL+"/JOB CARD APPLICATION.pdf"}>JOB CARD APPLICATION</a><br/>
	
</p>
       
    
        </>
    );
}