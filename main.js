function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {

    let tax
    let ptkp = 50000000

    if (marriageStatus == "Menikah") {
        ptkpChildCount = dependentChildrenCount*15000000
        ptkp += ptkpChildCount+10000000
    } else if (marriageStatus == "Cerai") {

        if (dependentChildrenCount > 0) {
            ptkpChildCount = dependentChildrenCount*15000000
            ptkp += ptkpChildCount+20000000
        }
    }

    annualIncome -= ptkp

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