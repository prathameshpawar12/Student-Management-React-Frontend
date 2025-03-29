import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
    let navigate = useNavigate();
    const { id } = useParams();

	const [student, setStudent] = useState({
		firstname: "",
		lastname: "",
		email: "",
		department: "",
	});

	const { firstname, lastname, email, department } = student;

	// ✅ Wrap loadStudent with useCallback to prevent re-creation on every render
	const loadStudent = useCallback(async () => {
		const result = await axios.get(
			`https://student-management-system-spring-production.up.railway.app/api/v1/${id}`
		);
		setStudent(result.data);
	}, [id]); // ✅ Depend only on id

	// ✅ Now useEffect won't trigger infinitely
	useEffect(() => {
		loadStudent();
	}, [loadStudent]);

	const handleInputChange = (e) => {
		setStudent({
			...student,
			[e.target.name]: e.target.value,
		});
	};

	const updateStudent = async (e) => {
		e.preventDefault();
		await axios.put(
			`https://student-management-system-spring-production.up.railway.app/api/v1/update/${id}`,
			student
		);
		navigate("/view-students");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5">Edit Student</h2>
			<form onSubmit={updateStudent}>
				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="firstname">
						First Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="firstname"
						id="firstname"
						required
						value={firstname}
						onChange={handleInputChange}
					/>
				</div>

				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="lastname">
						Last Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="lastname"
						id="lastname"
						required
						value={lastname}
						onChange={handleInputChange}
					/>
				</div>

				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="email">
						Your Email
					</label>
					<input
						className="form-control col-sm-6"
						type="email"
						name="email"
						id="email"
						required
						value={email}
						onChange={handleInputChange}
					/>
				</div>

				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="department">
						Department
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="department"
						id="department"
						required
						value={department}
						onChange={handleInputChange}
					/>
				</div>

				<div className="row mb-5">
					<div className="col-sm-2">
						<button type="submit" className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link to={"/view-students"} className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditStudent;
