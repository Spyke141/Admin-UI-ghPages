// Fetching given api endpoint using async await

const API_url =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

async function FetchUser({ setUsers, setIsChecked }) {
  try {
    const res = await fetch(API_url);
    const data = await res.json();
    setUsers(data);
    setIsChecked(new Array(data.length).fill(false));
  } catch (error) {
    console.log("Error :", error);
  }
}

export default FetchUser;
