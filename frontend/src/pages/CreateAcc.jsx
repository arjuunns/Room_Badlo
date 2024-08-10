import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Example() {
  const boyshostel = [
    "Amritam Hall (Previously known as Hostel-B)",
    "Prithvi Hall (Previously known as Hostel-C)",
    "Neeram Hall (Previously known as Hostel-D)",
    "Vyan Hall (Previously known as Hostel-H)",
    "Tejas Hall (Previously known as Hostel-J)",
    "Ambaram Hall (Previously known as Hostel-K)",
    "Viyat Hall (Previously known as Hostel-L)",
    "Anantam Hall (Previously known as Hostel-M)",
    "Vyom Hall (Previously known as Hostel-O)",
  ];

  const girlshostel = [
    "Vasudha Hall - Block E (Previously known as Hostel-E)",
    "Vasudha Hall - Block G (Previously known as Hostel-G)",
    "Ira Hall (Previously known as Hostel-I)",
    "Ananta Hall (Previously known as Hostel-N)",
    "Hostel-PG",
  ];

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    hostel: "",
    gender: "", // Add a gender field
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(userData);
  }

  function formsubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    alert(JSON.stringify(userData, null, 2)); // Use JSON.stringify for displaying the user data
  }

  // Function to get the appropriate hostel list based on gender
  function getHostelList() {
    if (userData.gender === "boy") {
      return boyshostel;
    } else if (userData.gender === "girl") {
      return girlshostel;
    }
    return [];
  }

  return (
    <>
      <div className="flex min-h-screen bg-[#111827] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://th.bing.com/th/id/OIP.n2VmWyddGYbb3oXWYCqF5wHaHa?rs=1&pid=ImgDetMain"
            className="mx-auto h-20 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Create a new Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={formsubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={handleChange}
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1d2432] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  onChange={handleChange}
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1d2432] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-white"
              >
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  required
                  onChange={handleChange}
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1d2432] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select Gender</option>
                  <option value="boy">Boy</option>
                  <option value="girl">Girl</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="hostel"
                className="block text-sm font-medium leading-6 text-white"
              >
                Current Hostel
              </label>
              <div className="mt-2">
                <select
                  id="hostel"
                  name="hostel"
                  required
                  onChange={handleChange}
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1d2432] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select Hostel</option>
                  {getHostelList().map((hostel, index) => (
                    <option key={index} value={hostel}>
                      {hostel}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p
            className="mt-10 text-center text-sm text-gray-500"
            onClick={Navigate("/createaccount")}
          >
            already a member?
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
