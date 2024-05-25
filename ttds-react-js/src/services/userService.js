import axios from "axios";
const rootApi = "http://localhost:5050/database";
//Create
//Login
//Fetch-Users
//Updated-Users
export async function createUser(firstName, lastName, email, password) {
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    const response = await axios.post(rootApi + "/create-user", body); //Asynchronous
    alert(response.data);
    return response;
  }
export async function createUser2(body) {
  const response = await axios.post(rootApi + "/create-user", body); //Asynchronous
  alert(response.data);
  return response;
}
export async function loginUser(email, password) {
  const buildQuery = rootApi + `/login?em=${email}&ps=${password}`;
  try {
    const response = await axios.get(buildQuery);
    if (response.status === 200) {
      alert("Sign in was successful");
    } else {
      alert("Invalid Sign In");
    }
    return response;
  } catch (err) {
    alert(err);
  }
}
export function loginUser2(email, password) {
  const buildQuery = rootApi + `/login?em=${email}&ps=${password}`;
  axios.get(buildQuery).then((e)=>{
    console.log(e)
  }).catch((err)=>{
    alert(err)
  })
//   if (response.status === 200) {
//     alert("Sign in was successful");
//   } else {
//     alert("Invalid Sign In");
//   }
//   return response;
}
export async function fetchUsers() {
  const response = await axios.get(rootApi + "/fetch-users");
  return response.data;
}
export async function updateUser(email) {}
