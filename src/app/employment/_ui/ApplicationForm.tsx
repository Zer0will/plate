"use client";

import * as React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";

// Separate validation schemas for each step
const validationSchemaStep1 = Yup.object({
	fullName: Yup.string().required("Full name is required"),
	phoneNumber: Yup.string().required("Phone number is required"),
	email: Yup.string().email("Invalid email address").required("Email is required"),
	address: Yup.string().required("Address is required"),
	position: Yup.string().required("Position is required"),
	startDate: Yup.string().required("Start date is required"),
	employmentType: Yup.string().required("Employment type is required"),
});

const validationSchemaStep2 = Yup.object({
	hasExperience: Yup.string().required("Please select yes or no"),
	experienceDetails: Yup.string().required("Please provide details"),
	interests: Yup.string().required("Please describe your interests"),
	skills: Yup.string().required("Please list your skills"),
	availableDays: Yup.array().min(1, "Please select at least one day"),
	availableHours: Yup.string().required("Please specify your available hours"),
});

const DAYS_OF_WEEK = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function ApplicationForm() {
	const [currentPage, setCurrentPage] = React.useState(1);
	const [formData, setFormData] = React.useState({});

	const formik = useFormik({
		initialValues: {
			fullName: "",
			phoneNumber: "",
			email: "",
			address: "",
			position: "",
			startDate: "",
			employmentType: "",
			hasExperience: "",
			experienceDetails: "",
			interests: "",
			skills: "",
			availableDays: [] as string[],
			availableHours: "",
			...formData, // Preserve previous data
		},
		validationSchema: currentPage === 1 ? validationSchemaStep1 : validationSchemaStep2,
		validateOnChange: false, // Only validate on submit
		validateOnBlur: false,
		onSubmit: async (values, {setErrors}) => {
			try {
				if (currentPage === 1) {
					// Validate first page
					await validationSchemaStep1.validate(values, {abortEarly: false});
					setFormData(prev => ({...prev, ...values}));
					setCurrentPage(2);
				} else {
					// Validate second page and submit final form
					await validationSchemaStep2.validate(values, {abortEarly: false});
					const finalData = {...formData, ...values};
					console.log("Final form submission:", finalData);
					// Handle your form submission here
				}
			} catch (err) {
				if (err instanceof Yup.ValidationError && err.inner) {
					const errors = {};
					err.inner.forEach(e => {
						errors[e.path] = e.message;
					});
					setErrors(errors);
				}
			}
		},
	});

	// Show validation errors
	const showError = (fieldName: keyof typeof formik.values): JSX.Element | null => {
		return formik.touched[fieldName] && formik.errors[fieldName] ? <div className='text-red-500 text-sm mt-1'>{formik.errors[fieldName]}</div> : null;
	};

	const renderFirstPage = () => (
		<>
			<div className='space-y-6'>
				<h2 className='text-2xl font-semibold text-white'>Personal Information</h2>
				<div className='grid gap-4 md:grid-cols-2'>
					<div>
						<Input
							placeholder='Enter Full Name'
							className='h-12 bg-[#2a2a2a] border-0 rounded-lg text-gray-300 placeholder:text-gray-500'
							{...formik.getFieldProps("fullName")}
						/>
						{showError("fullName")}
					</div>
					<div>
						<Input
							placeholder='Enter Phone Number'
							className='h-12 bg-[#2a2a2a] border-0 rounded-lg text-gray-300 placeholder:text-gray-500'
							{...formik.getFieldProps("phoneNumber")}
						/>
						{showError("phoneNumber")}
					</div>
					<div>
						<Input
							placeholder='Enter Email Address'
							type='email'
							className='h-12 bg-[#2a2a2a] border-0 rounded-lg text-gray-300 placeholder:text-gray-500'
							{...formik.getFieldProps("email")}
						/>
						{showError("email")}
					</div>
					<div>
						<Input
							placeholder='Enter Street Address, City, State, ZIP Code'
							className='h-12 bg-[#2a2a2a] border-0 rounded-lg text-gray-300 placeholder:text-gray-500'
							{...formik.getFieldProps("address")}
						/>
						{showError("address")}
					</div>
				</div>
			</div>

			<div className='space-y-6'>
				<h2 className='text-2xl font-semibold text-white'>Position Details</h2>
				<div className='grid gap-4 md:grid-cols-2'>
					<div>
						<Select onValueChange={value => formik.setFieldValue("position", value)} value={formik.values.position}>
							<SelectTrigger className='h-12 bg-[#2a2a2a] border-0 rounded-lg text-gray-300'>
								<SelectValue placeholder='Position Applying For' />
							</SelectTrigger>
							<SelectContent className='bg-[#2a2a2a] border border-[#9b8b6c]/30'>
								<SelectItem value='chef'>Chef</SelectItem>
								<SelectItem value='server'>Server</SelectItem>
								<SelectItem value='manager'>Manager</SelectItem>
							</SelectContent>
						</Select>
						{showError("position")}
					</div>

					<div>
						<Select onValueChange={value => formik.setFieldValue("startDate", value)} value={formik.values.startDate}>
							<SelectTrigger className='h-12 bg-[#2a2a2a] border-0 rounded-lg text-gray-300'>
								<SelectValue placeholder='Desired Start Date' />
							</SelectTrigger>
							<SelectContent className='bg-[#2a2a2a] border border-[#9b8b6c]/30'>
								<SelectItem value='immediate'>Immediate</SelectItem>
								<SelectItem value='two-weeks'>In 2 Weeks</SelectItem>
								<SelectItem value='month'>In 1 Month</SelectItem>
							</SelectContent>
						</Select>
						{showError("startDate")}
					</div>

					<div>
						<Select onValueChange={value => formik.setFieldValue("employmentType", value)} value={formik.values.employmentType}>
							<SelectTrigger className='h-12 bg-[#2a2a2a] border-0 rounded-lg text-gray-300'>
								<SelectValue placeholder='Full-Time/Part-Time' />
							</SelectTrigger>
							<SelectContent className='bg-[#2a2a2a] border border-[#9b8b6c]/30'>
								<SelectItem value='full-time'>Full-Time</SelectItem>
								<SelectItem value='part-time'>Part-Time</SelectItem>
							</SelectContent>
						</Select>
						{showError("employmentType")}
					</div>
				</div>
			</div>
		</>
	);

	const renderSecondPage = () => (
		<>
			<div className='space-y-6'>
				<h2 className='text-2xl font-semibold text-white'>Experience & Skills</h2>
				<div className='space-y-4'>
					<div>
						<RadioGroup className='flex gap-6' value={formik.values.hasExperience} onValueChange={value => formik.setFieldValue("hasExperience", value)}>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='yes' id='yes' className='border-[#9b8b6c] text-[#9b8b6c] data-[state=checked]:bg-[#9b8b6c]' />
								<Label htmlFor='yes' className='text-white'>
									Yes
								</Label>
							</div>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='no' id='no' className='border-[#9b8b6c] text-[#9b8b6c] data-[state=checked]:bg-[#9b8b6c]' />
								<Label htmlFor='no' className='text-white'>
									No
								</Label>
							</div>
						</RadioGroup>
						{showError("hasExperience")}
					</div>

					<div>
						<Textarea
							placeholder='Do you have previous experience in the restaurant or hospitality industry? Enter Details'
							className='h-32 bg-[#2a2a2a] border-0 rounded-lg text-gray-300 placeholder:text-gray-500 resize-none'
							{...formik.getFieldProps("experienceDetails")}
						/>
						{showError("experienceDetails")}
					</div>

					<div>
						<Textarea
							placeholder='What interests you about working at Plate of Africa?'
							className='h-32 bg-[#2a2a2a] border-0 rounded-lg text-gray-300 placeholder:text-gray-500 resize-none'
							{...formik.getFieldProps("interests")}
						/>
						{showError("interests")}
					</div>

					<div>
						<Textarea
							placeholder='What skills or qualifications do you bring to this position?'
							className='h-32 bg-[#2a2a2a] border-0 rounded-lg text-gray-300 placeholder:text-gray-500 resize-none'
							{...formik.getFieldProps("skills")}
						/>
						{showError("skills")}
					</div>
				</div>
			</div>

			<div className='space-y-6'>
				<h2 className='text-2xl font-semibold text-white'>Availability</h2>
				<div className='space-y-4'>
					<div>
						<div className='flex flex-wrap gap-4'>
							{DAYS_OF_WEEK.map(day => (
								<div key={day} className='flex items-center space-x-2'>
									<Checkbox
										id={day}
										className='border-[#9b8b6c] data-[state=checked]:bg-[#9b8b6c] data-[state=checked]:text-black'
										checked={formik.values.availableDays?.includes(day)}
										onCheckedChange={checked => {
											const currentDays = formik.values.availableDays || [];
											const newDays = checked ? [...currentDays, day] : currentDays.filter(d => d !== day);
											formik.setFieldValue("availableDays", newDays);
										}}
									/>
									<Label htmlFor={day} className='text-white'>
										{day}
									</Label>
								</div>
							))}
						</div>
						{showError("availableDays")}
					</div>

					<div>
						<Textarea
							placeholder='What hours are you available to work?'
							className='h-32 bg-[#2a2a2a] border-0 rounded-lg text-gray-300 placeholder:text-gray-500 resize-none'
							{...formik.getFieldProps("availableHours")}
						/>
						{showError("availableHours")}
					</div>
				</div>
			</div>
		</>
	);

	return (
		<div className='min-h-screen bg-black p-4 flex items-center justify-center'>
			<Card className='w-full max-w-4xl rounded-2xl border border-[#9b8b6c]/30 bg-[#1c1c1c]'>
				<CardHeader className='space-y-3 text-center pt-8 px-8'>
					<CardTitle className='text-4xl font-bold tracking-tight text-white'>APPLICATION FORM</CardTitle>
					<p className='text-gray-400 text-lg'>
						Thank you for your interest in joining the Plate of Africa team. Please complete the form below to apply for a position with us.
					</p>
				</CardHeader>
				<CardContent className='space-y-8 px-8 pb-8'>
					<div className='w-full bg-[#2a2a2a] rounded-full h-2'>
						<div className='h-2 rounded-full bg-gradient-to-r from-[#9b8b6c] to-[#d4c4a1]' style={{width: `${currentPage === 1 ? 33 : 66}%`}} />
					</div>

					<form onSubmit={formik.handleSubmit} className='space-y-8'>
						{currentPage === 1 ? renderFirstPage() : renderSecondPage()}

						<div className='space-y-6 pt-4'>
							<Button
								type='submit'
								className='w-full h-14 bg-gradient-to-r from-[#9b8b6c] to-[#d4c4a1] hover:opacity-90 text-black font-semibold text-lg rounded-lg'
							>
								NEXT
							</Button>
							<p className='text-sm text-gray-400 text-center'>
								All Applications are looked through carefully by our employment staff. Responses are generally given in 5-7 business days after submission of an
								application.
							</p>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
