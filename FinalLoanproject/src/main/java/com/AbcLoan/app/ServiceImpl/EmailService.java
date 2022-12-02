package com.AbcLoan.app.ServiceImpl;



import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.AbcLoan.app.model.CustomerApplicationForm;
import com.AbcLoan.app.model.EmailSender;
import com.AbcLoan.app.serviceI.EmailServiceI;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class EmailService implements EmailServiceI {

	
	@Value("${spring.mail.username}")
	String fromMail;
	
	@Autowired
	 JavaMailSender mailSender;  
	   
	    
	

	public void approvedEmailSend(String userEmailId) {
		
	       SimpleMailMessage message=new SimpleMailMessage();
		
	       message.setTo(userEmailId);
	       message.setFrom(fromMail);
	       message.setSubject("Regarding further loan process, we are in your service.");
	       message.setText("	You are eligible for further home loan which you have enquired.Please carry following documents and Contact with loan officer,who will guide you for further process."
						+"\n"+"Be prepared with document given below."+"\n"+
						"1.	Address proof "+"\n"
						+ "2.	Employment detail"+"\n"
						+ "3.	Educational proof (school/diploma/degree certificates)"+"\n"
						+ "4.	Bank statements"+"\n"
						+ "5.	Property details on which the loan is applied (if finalized)");
		
		if
		(mailSender !=null) {
		mailSender.send(message);
		log.info("mail sends");
		}
			

	    
		
	}




	@Override
	public void sendSanctionLetter(String toMail, MultipartFile sanctionLetter) {
		
		MimeMessage mimeMessage= mailSender.createMimeMessage();
		
		MimeMessageHelper helper;
		try {
			helper=new MimeMessageHelper(mimeMessage, true);
			helper.setTo(toMail);
			helper.setFrom(fromMail);
			helper.setSubject("Home Loan Offer Letter");
			helper.setText("Dear sir , Please find attached offer sanction letter!" );
			helper.addAttachment("sanctionletter.pdf", sanctionLetter );
		}catch (MessagingException e) {
			
			log.error("Error : "+e);
			
		}
		mailSender.send(mimeMessage);
		
	}



	public void disburseEmailSend(CustomerApplicationForm customer) {
		
	       SimpleMailMessage message=new SimpleMailMessage();
		
	       message.setTo(customer.getCustomerDetails().getCustomerEmailId());
	       message.setFrom(fromMail);
	       message.setSubject("Congratulations! Your Home Loan has been Dibursed and credited to your account.");
	       message.setText("UPDATE : Dear customer ,"
						+"\n"+"your A/c :"+customer.getLoanDisbursement().getAccountNumber()+" is credited with INR. "+customer.getLoanDisbursement().getTransferAmount()+" on "+customer.getLoanDisbursement().getAmountPaidDate()+"by"+"\n"+
						"A/c Linked MobileNo xxx78555. OTP for bank Transfer is 7878"
						+"\n"+"Thanks & Regards"
						+"\n"+"Account Head"
						+"\n"+"ACE HOME FINANCE");
		if
		(mailSender !=null) {
		mailSender.send(message);
		log.info("mail sends");
		}
	}

}
