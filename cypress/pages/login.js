require ('@cypress/xpath')

const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
const userName = "input[placeholder='Username']"
const passWord = "input[placeholder='Password']"
const submit = "button[type='submit']"

export class login 
{
    loginpage()
    {
        cy.visit(url);
        cy.fixture("login.json").then((dataset)=>{
        cy.get(userName).type(dataset.username);
        cy.get(passWord).type(dataset.password);
        cy.get(submit).click();
        })
    }
}