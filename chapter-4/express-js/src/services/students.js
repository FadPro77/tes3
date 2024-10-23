const studentRepository = require("../repositories/students");
const { imageUpload } = require("../utils/image-kit");
const { NotFoundError, InternalServerError } = require("../utils/request");

exports.getStudents = async (name, nickName) => {
  return studentRepository.getStudents(name, nickName);
};

exports.getStudentById = async (id) => {
  const student = await studentRepository.getStudentById(id);
  if (!student) {
    throw new NotFoundError("Student is Not Found!");
  }

  return student;
};

exports.createStudent = async (data, file) => {
  // Upload file to image kit
  if (file?.profile_picture) {
    data.profile_picture = await imageUpload(file.profile_picture);
  }

  // Create the data
  return studentRepository.createStudent(data);
};

exports.updateStudent = async (id, data, file) => {
  // find student is exist or not (validate the data)
  const existingStudent = studentRepository.getStudentById(id);
  if (!existingStudent) {
    throw new NotFoundError("Student is Not Found!");
  }

  // replicated existing data with new data
  data = {
    ...existingStudent, // existing Student
    ...data,
  };

  // Upload file to image kit
  if (file?.profile_picture) {
    data.profile_picture = await imageUpload(file.profile_picture);
  }

  // if exist, we will update the student data
  const updatedStudent = studentRepository.updateStudent(id, data);
  if (!updatedStudent) {
    throw new InternalServerError(["Failed to update student!"]);
  }

  return updatedStudent;
};

exports.deleteStudentById = async (id) => {
  // Find student by id (async)
  const existingStudent = await studentRepository.getStudentById(id);
  if (!existingStudent) {
    throw new NotFoundError("Student is Not Found!");
  }

  // If the student exists, delete the student (async)
  const deletedStudent = await studentRepository.deleteStudentById(id);
  if (!deletedStudent) {
    throw new InternalServerError(["Failed to delete student!"]);
  }

  // Return the deleted student data
  return existingStudent;
};
