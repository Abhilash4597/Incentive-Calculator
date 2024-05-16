// script.js
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

function resetForm() {
  document.getElementById("monthlySalary").value = "";
  document.getElementById("totalGTV").value = "";
  document.getElementById("incentivePercentage").value = "";
  document.getElementById("targetCrossed").checked = false;
  document.getElementById("result").innerText = "";
}

function login() {
  const employeeId = document.getElementById("employeeId").value;
  const errorElement = document.getElementById("error");

  if (!employees[employeeId]) {
    errorElement.innerText = "Invalid Employee ID. Please enter a valid Employee ID.";
    return;
  }

  localStorage.setItem('employeeId', employeeId);
  window.location.href = `index.html?employeeId=${employeeId}`;
}
