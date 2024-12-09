//import { login } from '../airbnb_training/demo_project_basetest.cy';
import { login } from '../../pages/login';
import { Helper } from '../../pages/helper';
import { Helper_performance_tab } from '../../pages/helper_performance_tab';
import { Helper_recruitment_tab } from '../../pages/Helper_recruitment_tab';
require('@cypress/xpath');

const logInData = new login();
const helperData =new Helper();
const performanceData = new Helper_performance_tab();
const recruitmentData = new Helper_recruitment_tab();

describe("Scenario-1", () =>{  
    beforeEach(() => {
        // Call the login method to log in to the application
      logInData.loginpage(); 
      });

     // First scenario
      it("Report-Tab-under-PIM", () => {

        cy.fixture("PIMtab.json").then((PIMdataset)=>{
        // Navigate to the PIM Button
        helperData.navigatePIMButton(PIMdataset.pimvalidationtext);
        helperData.navigateReportHeader(PIMdataset.reportheadervalidationtext);
        helperData.addReport(PIMdataset.addreportvalidationtext);
        helperData.newReportDetails(PIMdataset.reportname, 
          PIMdataset.displayfieldgroupoption, 
          PIMdataset.displayfieldoption);
        helperData.validatingCreatedReport(PIMdataset.searchreportname,
          PIMdataset.selectreportname);
        })
    });

    // Second scenario
    it("Performance-TAB", () => {

      cy.fixture("performance_tab.json").then((Performancedataset)=>{
      // Navigate to perfromance Tab
      performanceData.navigateToPerformanceTab(Performancedataset.performancevalidationtext);
      performanceData.navigateToEmployeeTracker(Performancedataset.employeetrackervalidation);
      performanceData.searchEmployee(Performancedataset.searchemployeename);
      performanceData.viewEmployee(Performancedataset.viewemployee);
      })
    });

    // Third Scenario
    it("Recruitment-TAB", () => {

      cy.fixture("recruitment_tab.json").then((Recruitmentdataset)=>{
      // Navigate to perfromance Tab
      recruitmentData.navigateToRecruitmentTab(Recruitmentdataset.recruitmentvalidationtext, 
          Recruitmentdataset.addcandidatevalidationtext);
      recruitmentData.addFirstCandidate(Recruitmentdataset.firstname, Recruitmentdataset.firstsurname, 
        Recruitmentdataset.vaccancysearch, Recruitmentdataset.emailidinput)
      recruitmentData.addsecondCandidate(Recruitmentdataset.secondname, Recruitmentdataset.secondsurname,
        Recruitmentdataset.secondvaccancysearch,Recruitmentdataset.secondemailidinput)
      recruitmentData.addthirdCandidate(Recruitmentdataset.thirdname, Recruitmentdataset.thirdsurname,
        Recruitmentdataset.thirdvaccancysearch, Recruitmentdataset.thirdemailidinput)
      recruitmentData.searchCreatedCandidate(Recruitmentdataset.searchcandidatename, 
        Recruitmentdataset.selectcandidatename)
      })
    });
});
