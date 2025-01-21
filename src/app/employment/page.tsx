import React from "react";
import EmploymentSection from "./_ui/EmploymentSection";
import WhhyJoinSection from "./_ui/WhyJoinSection";
import RequirementsSection from "./_ui/RequirementsSection";
import ApplicationForm from "./_ui/ApplicationForm";

const page = () => {
	return (
		<div>
			<EmploymentSection />
			<WhhyJoinSection />
			<RequirementsSection />
			<ApplicationForm />
		</div>
	);
};

export default page;
