require('@cypress/xpath')

const listbox_performance_tab = "[role=listbox]>div>span"
const performanceTab = "//a[contains(@href,'Performance')]"
const employeeTrackerheader= ".//a[normalize-space()='Employee Trackers']"
const employeeSearch= '//label[text()="Employee Name"]//parent::div//following-sibling::div//descendant::input'
const searchEmployee= ".//button[@type='submit']"
const viewEmployee= "button[name='view']"
const performanceTabValidation= ".oxd-text.oxd-text--h5.oxd-table-filter-title"
const employeeTrackerheaderValidation = ".oxd-text.oxd-text--h5.oxd-table-filter-title"
const viewEmployeeValidation = ".oxd-text.oxd-text--h5.orangehrm-employee-tracker-list-header"

export class Helper_performance_tab {

    navigateToPerformanceTab(validationPerformanceTab)
    {
        cy.wait(3000)
        cy.xpath(performanceTab).click()
        cy.get(performanceTabValidation).should('have.text', validationPerformanceTab)
        cy.wait(3000)
    }

    navigateToEmployeeTracker(validationEmployeeTracker)
    {
        cy.xpath(employeeTrackerheader).click()
        cy.get(employeeTrackerheaderValidation).should('have.text', validationEmployeeTracker)
        cy.wait(3000)
    }

    searchEmployee(employeeName)
    {
        cy.xpath(employeeSearch).type(employeeName)
        cy.wait(3000)
        cy.get(listbox_performance_tab).click({force:true});     
        cy.xpath(searchEmployee).should('be.visible').click({force:true})

    }

    viewEmployee(employeeView)
    {
         // View the Searched Employee
         cy.wait(3000)
         cy.get(viewEmployee).click()
         cy.get(viewEmployeeValidation).should('have.text', employeeView)
    }
    
}
