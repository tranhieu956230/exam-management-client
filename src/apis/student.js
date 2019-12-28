import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getStudent = async (page, limit) => {
  const response = await axios.get(`${baseUrl}/student/`, {
    params: {
      page,
      limit
    },
    headers: {
      Authorization: localStorage.getItem("jwt")
    }
  });
  return response["data"];
};

export const createStudent = async (id, name, dob, cls) => {
  const response = await axios.post(
    `${baseUrl}/student/`,
    {
      student_id: id,
      name: name,
      dob: dob,
      student_class: cls
    },
    {
      headers: {
        Authorization: localStorage.getItem("jwt")
      }
    }
  );
  return response["data"];
};

export const createManyStudent = async students => {
  const response = await axios.post(
    `${baseUrl}/student/many`,
    {
      students: students.map(({ id, name, dob, cls }) => ({
        student_id: id.toString(),
        name: name,
        dob: dob,
        student_class: cls
      }))
    },
    {
      headers: {
        Authorization: localStorage.getItem("jwt")
      }
    }
  );
  return response["data"];
};

export const editStudent = async (id, name, dob, cls) => {
  const response = await axios.put(
    `${baseUrl}/student/`,
    {
      student_id: id,
      name: name,
      dob: dob,
      student_class: cls
    },
    {
      headers: {
        Authorization: localStorage.getItem("jwt")
      }
    }
  );
  return response["data"];
};

export const deleteStudent = async ids => {
  const response = await axios.delete(`${baseUrl}/student/`, {
    data: {
      student_ids: ids
    },
    headers: {
      Authorization: localStorage.getItem("jwt")
    }
  });
  return response["data"];
};

export const getClass = async () => {
  const response = await axios.get(`${baseUrl}/class/`, {
    headers: {
      Authorization: localStorage.getItem("jwt")
    }
  });
  return response["data"];
};

export default {
  createStudent,
  getClass,
  getStudent,
  editStudent,
  deleteStudent,
  createManyStudent
};
