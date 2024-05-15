function calculateIncentive() {
    const monthlySalary = parseFloat(document.getElementById('monthlySalary').value) || 0;
    const totalGTV = parseFloat(document.getElementById('totalGTV').value) || 0;
    const incentivePercentage = parseFloat(document.getElementById('incentivePercentage').value) || 0;
    const targetCrossed = document.getElementById('targetCrossed').checked;

    const quarterlySalary = monthlySalary * 3;
    const targetRevenue = quarterlySalary * 5;

    const totalIncentiveFromGTV = totalGTV * (incentivePercentage / 100);

    let totalIncentive = 0;

    if (targetCrossed) {
        // If the target is already crossed, calculate 40% of the total incentive from GTV
        totalIncentive = totalIncentiveFromGTV * 0.40;
    } else {
        if (totalIncentiveFromGTV <= targetRevenue) {
            // If total incentive from GTV is less than or equal to the target, calculate 5% of it
            totalIncentive = totalIncentiveFromGTV * 0.05;
        } else {
            // If total incentive from GTV exceeds the target, calculate 5% up to the target and 40% for the excess
            const baseIncentive = targetRevenue * 0.05;
            const additionalIncentive = (totalIncentiveFromGTV - targetRevenue) * 0.40;
            totalIncentive = baseIncentive + additionalIncentive;
        }
    }

    document.getElementById('result').innerText = `The total incentive is: ${totalIncentive.toFixed(2)}`;
}