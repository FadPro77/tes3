const studentService = require("../services/students");
const { successResponse } = require("../utils/response");

exports.getStudents = (req, res, next) => {
  // Call the usecase or service
  const data = studentService.getStudents(
    req.query?.name,
    req.query?.nickName,
    req.query?.bachelor
  );
  successResponse(res, data);
};

exports.getStudentById = (req, res, next) => {
  // Get the id from params
  const { id } = req.params;

  // Get student by id
  const data = studentService.getStudentById(id);
  successResponse(res, data);
};

exports.createStudent = async (req, res, next) => {
  // Convert to student data format
  const requestBody = {
    ...req.body,
    address: {
      province: req.body["address.province"],
      city: req.body["address.city"],
    },
    education: {
      bachelor: req.body["education.bachelor"],
    },
  };
  delete requestBody["address.province"];
  delete requestBody["address.city"];
  delete requestBody["education.bachelor"];

  // Create the new student
  const data = await studentService.createStudent(requestBody, req.files);
  successResponse(res, data);
};

exports.updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const requestBody = {
      ...req.body,
      address: {
        province: req.body["address.province"],
        city: req.body["address.city"],
      },
      education: {
        bachelor: req.body["education.bachelor"],
      },
    };
    delete requestBody["address.province"];
    delete requestBody["address.city"];
    delete requestBody["education.bachelor"];

    let profilePicture;
    if (req.files && req.files.profilePicture) {
      profilePicture = req.files.profilePicture;
    }

    // Call the service function to update the student data
    const updatedStudent = await studentService.updateStudent(
      id,
      requestBody,
      profilePicture
    );
    successResponse(res, updatedStudent);
  } catch (error) {
    next(error); // Pass any errors to the error handler
  }
};

exports.deleteStudentById = (req, res, next) => {
  // Get the id from params
  const { id } = req.params;
  const data = studentService.deleteStudentById(id);
  successResponse(res, data);
};
