//import { PIMButton,reportHeader,addReport,reportName,searchReport, searchReportButton, displayField,
  //  displayFieldgroup,displayFieldAdd } from "../airbnb_training/locators.cy"; 
require('@cypress/xpath')

const listbox = "[role=listbox]>div>span";
const PIMButton = "//a[contains(@href,'Pim')]"
const PIMValidation = ".oxd-text.oxd-text--h5.oxd-table-filter-title"
const reportHeader = ".//a[normalize-space()='Reports']";
const reportHeaderValidation = ".oxd-text.oxd-text--h5.oxd-table-filter-title"
const addReport = "button[class='oxd-button oxd-button--medium oxd-button--secondary']";
const addReportValidation = ".oxd-text.oxd-text--h6.orangehrm-main-title"
const reportName = '//label[text()="Report Name"]//parent::div//following-sibling::div//descendant::input';
const displayFieldgroup='//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[1]/div/div[2]/div/div/div[1]'
const displayField='//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[2]/div[1]/div[2]/div/div/div[1]'
const displayFieldAdd= '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[2]/div[2]/div[2]/button/i'
const searchReport= "input[placeholder='Type for hints...']"
const searchReportButton= 'button[type="submit"]'
const submit = "button[type='submit']"


// Helper class for PIM TAB
export class Helper {
    
    navigatePIMButton(validationPIM){
        cy.wait(3000)
        cy.xpath(PIMButton).click();
        cy.get(PIMValidation).should('have.text', validationPIM )
        cy.wait(3000)
    }

    navigateReportHeader(validationReport){
        cy.wait(3000)
        cy.xpath(reportHeader).click();
        cy.get(reportHeaderValidation).should('have.text', validationReport)
        cy.wait(3000)
    }

    addReport(validationAddReport){
        cy.wait(3000)
        cy.get(addReport).should('be.visible').click({force:true});
        cy.get(addReportValidation).should('have.text', validationAddReport)
        cy.wait(3000)
    }

    newReportDetails(newReportName, displayFieldGroupOption, displayFieldOption){
        cy.xpath(reportName).type(newReportName)
        cy.xpath(displayFieldgroup).click() //Selecting the display field Group
        cy.contains(displayFieldGroupOption).click() // selecting the personal as a option
        cy.xpath(displayField).click()// Selecting the display field
        cy.contains(displayFieldOption).click()
        cy.xpath(displayFieldAdd).click() // Add a displayfield 
        cy.get(submit).click() // submit to create a report
        cy.wait(3000)
    }

    validatingCreatedReport(searchReportName, selectReportName){
        cy.xpath(reportHeader).click()
        cy.xpath(reportName).type(searchReportName)
        cy.get(listbox).each((element)=>{
            if((element.text().trim() == selectReportName)){
            cy.wrap(element).click();
            }
        });
        // Search that Reports name by click search button
        cy.get(searchReportButton).should('be.visible').click({force:true});
        cy.wait(3000)
    }
}