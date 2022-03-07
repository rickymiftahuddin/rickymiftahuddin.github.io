function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {

    let tax
    let pkp = 50000000
    annualIncome -= pkp

    if (annualIncome>0 && annualIncome<=200000000) {
        tax = annualIncome*.1
    } else if(annualIncome>0 && annualIncome<=450000000) {
        tax = annualIncome*.15
    } else if(annualIncome>0 && annualIncome>450000000){
        tax = annualIncome*.2
    } else {
        tax = 0
    }


    console.log(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount)
    return tax
}