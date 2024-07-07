const form = document.getElementById('user-info')
const basicSalaryInput = document.getElementById('basic-salary')
const benefits = document.getElementById('benefits')

    
    if (tempTaxablePay > 24000) {
        incomeTax += 2400
        tempTaxablePay -= 24000
    } else {
        incomeTax += Math.round(tempTaxablePay * 0.1)
        return incomeTax
    }

    if (tempTaxablePay > 32333) {
        incomeTax += 2083
        tempTaxablePay -= 8333
    } else {
        incomeTax += Math.round(tempTaxablePay * 0.25)
        return incomeTax
    }

    if (tempTaxablePay > 500000) {
        incomeTax += 140300
        tempTaxablePay -= 467667
    } else {
        incomeTax += Math.round(tempTaxablePay * 0.3)
        return incomeTax
    }

    if (tempTaxablePay > 300000) {
        incomeTax += 97500
        tempTaxablePay -= 300000
    } else {
        incomeTax += Math.round(tempTaxablePay * 0.325)
        return incomeTax
    }

    incomeTax += Math.round(tempTaxablePay * 0.35)
    return incomeTax


function salaryInRange(grossSalary, min, max) {
    if (grossSalary >= min && grossSalary <= max) {
        return true
    } else {
        return false
    }
}

const getNhifDeduction = (grossSalary) => {
    let nhifRate
    if (grossSalary > 99999) {
        return (nhifRate = 1700)
    }

    
    const nhifRanges = {
        '0 - 5999': 150,
        '6000 - 7999': 300,
        '8000 - 11999': 400,
        '12000 - 14999': 500,
        '15000 - 19999': 600,
        '20000 - 24999': 750,
        '25000 - 29999': 850,
        '30000 - 34999': 900,
        '35000 - 39999': 950,
        '40000 - 44999': 1000,
        '45000 - 49999': 1100,
        '50000 - 59999': 1200,
        '60000 - 69999': 1300,
        '70000 - 79999': 1400,
        '80000 - 89999': 1500,
        '90000 - 99999': 1600,
    }

        if (salaryRangeCheck) {
            nhifRate = nhifRanges[key]
        }
    }

    return nhifRate


function getHousingLevy(salary) {
    const housingLevy = salary * 0.015
    return housingLevy.toFixed(2)
}

function calculateNetSalary(salary) {
    const nhifRate = getNhifDeduction(salary)
    const housingLevy = getHousingLevy(salary)


    if (salary >= 3000) {
        const incomeTax = getIncomeTax(taxablePay)
        const paye = getPaye(incomeTax, nhifRate)
        const payAfterTax = taxablePay - paye
        const netPay = payAfterTax - nhifRate - housingLevy
        console.log(
            `Salary: ${salary}.\nTaxable income: ${taxablePay}.\nIncome tax: ${incomeTax}.\nNHIF rate: ${nhifRate}.\nPAYE: ${paye}.\nPay after tax: ${payAfterTax}.\nHousing levy: ${housingLevy}.\nNet pay: ${netPay}`
        )
    }
}

form.addEventListener('calculate', (e) => {
    e.preventDefault()
    const grossSalaryInput =
        parseInt(basicSalaryInput.value) + parseInt(benefits.value)
    calculateNetSalary(grossSalaryInput)
})