function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);

    const resultDiv = document.getElementById("result");
    resultDiv.className = "";

    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
        resultDiv.textContent = "Please enter valid weight and height.";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const bmiRounded = bmi.toFixed(2);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
        resultDiv.classList.add("underweight");
    } else if (bmi < 25) {
        category = "Normal";
        resultDiv.classList.add("normal");
    } else if (bmi < 30) {
        category = "Overweight";
        resultDiv.classList.add("overweight");
    } else {
        category = "Obese";
        resultDiv.classList.add("obese");
    }

    resultDiv.textContent = `Your BMI is ${bmiRounded} (${category})`;
}
