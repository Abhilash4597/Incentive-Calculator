// Define the employees object with employee IDs as keys and names as values
const employees = {
  "SQY34376": "Jyoti Tanaji Gaikwad",
  "SQY37649": "Ziyauddin Nawab",
  "SQY37850": "Omkar Ajit Mahajan",
  "SQY38282": "Vishaka Vitthal Mirashi",
  "SQY38765": "Kangule Sachin Devrao",
  "SQY39232": "Siddharth Dnyaneshwar Kamble",
  "SQY41207": "Rohit Sarjerao Sargar",
  "SQY41942": "Harish Valmik Marathe",
  "SQY43163": "Shubham Bharat Ghodke",
  "SQY44180": "Gopinath Satish Tupe",
  "SQY44281": "Sudarshan Adinath Ankamwar",
  "SQY44845": "Priyanka Bhimrao Kamble",
  "SQY44933": "Jayesh Vivek Muthal",
  "SQY45777": "Rahul Pramod Kamble",
  "SQY45990": "Aishwarya Ashok Jogalekar",
  "SQY46004": "Animit Sengar",
  "SQY46027": "Digvijay Jitendra Deshmukh",
  "SQY46049": "Jayesh Bharat Jadhav",
  "SQY46069": "Levina Manoj Pittalwar",
  "SQY46093": "Nilesh Diliprao Talekar",
  "SQY46106": "Pratik Nitin Bhongale",
  "SQY46112": "Rahul Rajesh Bhate",
  "SQY46113": "Rajnish Maroti Rathod",
  "SQY46125": "Sakshi Anil Vishwakarma",
  "SQY46135": "Shreya Nemeshwar Kotpalliwar",
  "SQY46148": "Sujal Singh",
  "SQY46192": "Avishkar Anil Bedre",
  "SQY46218": "Sandesh Sanjay Kunjir",
  "SQY46343": "Adarsh Vasant Waghmare",
  "SQY46370": "Balaji Umesh Kale",
  "SQY46444": "Nachiket Ankush Waghere",
  "SQY46472": "Prasad Pandharinath Lohakare",
  "SQY46488": "Rajita Narsingrao Nanna",
  "SQY46523": "Shivshankar Sharnappa Herkar",
  "SQY46531": "Siddharth Rajesh Kasbe",
  "SQY46537": "Suraj Sanjay Artamwar",
  "SQY46538": "Suyash sudesh Shendurkar",
  "SQY46568": "Namrata Janrao Ingle",
  "SQY47289": "Amol Babasaheb Kamble",
  "SQY47358": "Amarnath Khushalrao Bhume",
  "SQY47374": "Chavan Shubham Santosh",
  "SQY47377": "Harshal Gopinath Pawar",
  "SQY47380": "Jit Bahadur Thapa",
  "SQY47382": "Kritika Mishra",
  "SQY47405": "Nrasinha Govindrao Utikar",
  "SQY47450": "Saurabh Gajanan Datir",
  "SQY47461": "Shreyash Sanjay Chavhan",
  "SQY47466": "Shubham Balasaheb Pasalkar",
  "SQY47488": "Tejas Narendra Bijwe",
  "SQY47493": "Vaishnavi Ganesh Kamble",
  "SQY47515": "Rishikesh Ritesh Tiwari",
  "SQY47565": "Kalbhor Prathamesh Tukaram",
  "SQY47639": "Ankita Ajit Powar",
  "SQY47686": "Rushikesh Ramprasad Somwanshi"
};


// Function to validate the employee ID format
function validateEmployeeId(employeeId) {
  return employees.hasOwnProperty(employeeId);
}

// Function to handle the login process
function login() {
  const employeeId = document.getElementById("employeeId").value;
  const errorElement = document.getElementById("error");

  // Validate the employee ID format
  const regex = /^[A-Z]{3}\d{5}$/; // Regex pattern for employee ID format (e.g., SQY46960)
  if (!regex.test(employeeId)) {
    errorElement.innerText = "Invalid Employee ID format. Please enter a valid Employee ID (e.g., SQY12345).";
    return;
  }

  // Validate employee ID against the employees object
  if (!validateEmployeeId(employeeId)) {
    errorElement.innerText = "Unauthorized Employee ID. Please enter a valid Employee ID.";
    return;
  }

  // Redirect to the calculator page with the employee ID as a query parameter
  window.location.href = `calculator.html?employeeId=${employeeId}`;
}

// Function to handle the reset form button click
function resetForm() {
  // Reset all input fields to their default values
  document.getElementById("monthlySalary").value = "";
  document.getElementById("totalGTV").value = "";
  document.getElementById("incentivePercentage").value = "";
  document.getElementById("targetCrossed").checked = false;
  document.getElementById("result").innerText = "";
}

// Function to calculate the total incentive
function calculateIncentive() {
  const monthlySalary = parseFloat(document.getElementById("monthlySalary").value) || 0;
  const totalGTV = parseFloat(document.getElementById("totalGTV").value) || 0;
  const incentivePercentage = parseFloat(document.getElementById("incentivePercentage").value) || 0;
  const targetCrossed = document.getElementById("targetCrossed").checked;

  const quarterlySalary = monthlySalary * 3;
  const targetRevenue = quarterlySalary * 5;

  const totalIncentiveFromGTV = totalGTV * (incentivePercentage / 100);

  let totalIncentive = 0;

  if (targetCrossed) {
    totalIncentive = totalIncentiveFromGTV * 0.4;
  } else {
    if (totalIncentiveFromGTV <= targetRevenue) {
      totalIncentive = totalIncentiveFromGTV * 0.05;
    } else {
      const baseIncentive = targetRevenue * 0.05;
      const additionalIncentive = (totalIncentiveFromGTV - targetRevenue) * 0.4;
      totalIncentive = baseIncentive + additionalIncentive;
    }
  }

  document.getElementById("result").innerText = `The total incentive is: ${totalIncentive.toFixed(2)}`;
}

