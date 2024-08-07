package com.employeemanagement.service.imp;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.employeemanagement.dto.MailSendingDto;
import com.employeemanagement.dto.MailVendorRequest;
import com.employeemanagement.dto.VendorDto;
import com.employeemanagement.mapper.EmployeeMapper;
import com.employeemanagement.mapper.VendorMapper;
import com.employeemanagement.model.SendingMailToVendor;
import com.employeemanagement.model.Vendor;
import com.employeemanagement.reposotory.EmployeeRepo;
import com.employeemanagement.reposotory.MailTemplateRepo;
import com.employeemanagement.reposotory.SendingMailRepo;
import com.employeemanagement.reposotory.VendorRepo;
import com.employeemanagement.service.VendorService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class VendorServiceImp implements VendorService {

	private VendorRepo repo;

	private SendingMailRepo mailRepo;

	private MailTemplateRepo mailTemplateRepo;

	@Override
	public VendorDto createVendor(VendorDto vendorDro) {
		Vendor vendorMapper = VendorMapper.mapToVendor(vendorDro);
		Vendor vendor = repo.save(vendorMapper);

		return VendorMapper.mapToVendorDto(vendor);
	}

	@Override
	public List<VendorDto> getAllVendor() {
		List<Vendor> vendorlist = repo.findAll();
		return vendorlist.stream().map((employee) -> VendorMapper.mapToVendorDto(employee))
				.collect(Collectors.toList());
	}

	@Override
	public boolean saveMailVendorData(MailSendingDto mailSendDto) {
		String mailBody = mailTemplateRepo.findMailTemplate();
		List<MailVendorRequest> listOfVendors = mailSendDto.getListOfVendor();
		SendingMailToVendor sendingVendor = null;
		if (mailBody != null && !mailBody.isEmpty()) {
			for (int i = 0; i < listOfVendors.size(); i++) {
				MailVendorRequest request = listOfVendors.get(i);
				String emailId = request.getEmail();
				String name = request.getName();
				String upiId = request.getUpiId();
				String msgBodyPopulated = "";
				msgBodyPopulated = mailBody.replace("{name}", name).replace("{upi}", upiId);
				System.out.println("msgBodyPopulated==" + msgBodyPopulated);
				sendingVendor = new SendingMailToVendor();
				sendingVendor.setEmailId(emailId);
				sendingVendor.setMailBody(msgBodyPopulated);
				sendingVendor.setName(name);
				sendingVendor.setCreatedBy(mailSendDto.getCreatedBy());
				mailRepo.save(sendingVendor);
			}
		}
		return true;
	}

	@Override
	public List<SendingMailToVendor> getMailHistory() {
		List<SendingMailToVendor> mailHistory = mailRepo.findAll();
		return mailHistory;
	}

	@Override
	public int findEmailId(String emailId) {
		int flag =repo.findEmailId(emailId);
		return flag;
	}

}
