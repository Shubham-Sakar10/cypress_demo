require('@cypress/xpath')

 const listbox = "[role=listbox]>div>span";
 const recruitmentTab= "//a[contains(@href,'Recruitment')]"
 const addCandidateButton= ".oxd-icon.bi-plus.oxd-button-icon"
 const firstName= "input[placeholder='First Name']"
 const secondName= "input[placeholder='Last Name']"
 const vaccancyTab= ".oxd-select-text-input"
 const uploadFileTab=".oxd-file-div > .oxd-icon"
 const emailID= '//label[text()="Email"]//parent::div//following-sibling::div//descendant::input'
 const ShortlistedButton= ".oxd-button--success"
 const searchCandidate= '//label[text()="Candidate Name"]//parent::div//following-sibling::div//descendant::input'
 const valiationRecruitment = ".oxd-text.oxd-text--h5.oxd-table-filter-title"
 const validationAddCandidate = ".oxd-text.oxd-text--h6.orangehrm-main-title"
 const submit = "button[type='submit']"


export class Helper_recruitment_tab{

    navigateToRecruitmentTab(validationRecruitmentText, validationAddCandidateText)
    {
        cy.wait(3000)
        cy.xpath(recruitmentTab).click()
        cy.get(valiationRecruitment).should('have.text', validationRecruitmentText )
        cy.get(addCandidateButton).click()
        cy.wait(4000)
        cy.get(validationAddCandidate).should('have.text', validationAddCandidateText)

    }

    addFirstCandidate(name, surname, vaccancy, inputEmailId )
    {
    cy.wait(3000)
    cy.get(firstName).type(name)// need to pass by testdata
    cy.get(secondName).type(surname)
    cy.get(vaccancyTab).should('be.visible').click({force:true})// vaccancy Tab
    cy.contains(vaccancy).click()
    cy.xpath(emailID).type(inputEmailId)
    cy.get(uploadFileTab).attachFile("candidate-1.txt")
    cy.get(submit).click()
    cy.wait(3000)
    // Shortlisted the Candidate
    cy.get(ShortlistedButton).should('be.visible').click({force:true});
    cy.get(submit).click()// save the shortlisted Candidate
    }

    addsecondCandidate(secondname, secondsurname, secondvaccancy, secondinputEmailId )
    {
    this.navigateToRecruitmentTab("Candidates", "Add Candidate") // Use the navigateToRecruitment Tab method
    cy.wait(3000)
    cy.get(firstName).type(secondname)// need to pass by testdata
    cy.get(secondName).type(secondsurname)
    cy.get(vaccancyTab).should('be.visible').click({force:true})// vaccancy Tab
    cy.contains(secondvaccancy).click()
    cy.xpath(emailID).type(secondinputEmailId)
    cy.get(uploadFileTab).attachFile("candidate-1.txt")
    cy.get(submit).click()
    cy.wait(3000)
    // Shortlisted the Candidate
    cy.get(ShortlistedButton).should('be.visible').click({force:true});
    cy.get(submit).click()// save the shortlisted Candidate
    }

    addthirdCandidate(thirdname, thirdsurname, thirdvaccancy, thirdinputEmailId )
    {
    this.navigateToRecruitmentTab("Candidates", "Add Candidate"),
    cy.wait(3000)
    cy.get(firstName).type(thirdname)// need to pass by testdata
    cy.get(secondName).type(thirdsurname)
    cy.get(vaccancyTab).should('be.visible').click({force:true})// vaccancy Tab
    cy.contains(thirdvaccancy).click()
    cy.xpath(emailID).type(thirdinputEmailId)
    cy.get(uploadFileTab).attachFile("candidate-1.txt")
    cy.get(submit).click()
    cy.wait(3000)
    // Shortlisted the Candidate
    cy.get(ShortlistedButton).should('be.visible').click({force:true});
    cy.get(submit).click()// save the shortlisted Candidate
    }

    searchCreatedCandidate(searchCandidatename, selectCandidatename)
    {
        cy.wait(3000)
        cy.xpath(recruitmentTab).click()
        cy.xpath(searchCandidate).type(searchCandidatename)
        cy.wait(3000)
        cy.get(listbox).click({force:true});
        cy.get(submit).click({force:true})
    }
}