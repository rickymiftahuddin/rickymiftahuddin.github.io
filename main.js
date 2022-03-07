function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {

    let tax
    let ptkp = 50000000


    if (marriageStatus == "Menikah") {
        ptkpChildCount = dependentChildrenCount*15000000
        ptkp += ptkpChildCount+10000000
    } else if (marriageStatus == "Cerai" || marriageStatus == "Lajang") {
        if (dependentChildrenCount > 0) {
            ptkpChildCount = dependentChildrenCount*15000000
            ptkp += ptkpChildCount+20000000
        }
    }

    const pkp = annualIncome-ptkp
    if (pkp<=0) {
        pkp=0
    }

    let tax1 = pkp*.1
    let tax2 = (pkp-200000000)*.2
    let tax3 = (pkp-200000000-250000000)*.3

    if (tax1<=0) {
        tax1 = 0
    }
    if (tax2<=0) {
        tax2 = 0
    }
    if (tax3<=0) {
        tax3 = 0
    }

    tax = tax1+tax2+tax3

    console.log(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount)
    return tax
}
