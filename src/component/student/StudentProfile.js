import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentProfile = () => {
	const { id } = useParams();
	const [student, setStudent] = useState({
		firstname: "",
		lastname: "",
		email: "",
		department: "",
	});

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

	return (
		<section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">{`${student.firstname} ${student.lastname}`}</h5>
								<div className="d-flex justify-content-center mb-2">
									<button type="button" className="btn btn-outline-primary">
										Call
									</button>
									<button type="button" className="btn btn-outline-warning ms-1">
										Message
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">First Name</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">{student.firstname}</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">Last Name</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">{student.lastname}</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">Email</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">{student.email}</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">Department</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">{student.department}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StudentProfile;
