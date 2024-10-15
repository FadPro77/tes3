const studentRepository = require("../repositories/students");
const { imageUpload } = require("../utils/image-kit");
const { NotFoundError, InternalServerError } = require("../utils/request");

exports.getStudents = (name, nickName, bachelor) => {
  return studentRepository.getStudents(name, nickName, bachelor);
};

exports.getStudentById = (id) => {
  const student = studentRepository.getStudentById(id);
  if (!student) {
    throw new NotFoundError("Student is Not Found!");
  }

  return student;
};

exports.createStudent = async (data, file) => {
  //upload file
  if (file?.profilePicture) {
    data.profilePicture = await imageUpload(file.profilePicture);
  }

  ///create the data
  return studentRepository.createStudent(data);
};

exports.updateStudent = async (id, data, profilePicture) => {
  // Find if the student exists or not (validate the data)
  const existingStudent = studentRepository.getStudentById(id);
  if (!existingStudent) {
    throw new NotFoundError("Student is Not Found!");
  }

  // Handle profile picture if it exists
  if (profilePicture) {
    // Use the imageUpload utility to upload the image to ImageKit
    const profilePictureUrl = await imageUpload(profilePicture);

    // Add the profile picture URL to the data
    data.profilePicture = profilePictureUrl;
  }

  // Update the student data
  const updatedStudent = await studentRepository.updateStudent(id, data);
  if (!updatedStudent) {
    throw new InternalServerError("Failed to update student!");
  }

  return updatedStudent;
};

exports.deleteStudentById = (id) => {
  // find student is exist or not (validate the data)
  const existingStudent = studentRepository.getStudentById(id);
  if (!existingStudent) {
    throw new NotFoundError("Student is Not Found!");
  }

  // if exist, we will delete the student data
  const deletedStudent = studentRepository.deleteStudentById(id);
  if (!deletedStudent) {
    throw new InternalServerError(["Failed to delete student!"]);
  }

  return deletedStudent;
};
