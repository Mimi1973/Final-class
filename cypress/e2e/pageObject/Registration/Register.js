
 //it('passes', () => {
  
 // cy.visit('http://shop.icraftsoft.net:8095/')
  //cy.visit('https://example.cypress.io')


class Register{


    registerButton(){
      //return  cy.get('.login-form-2 > form > .form-group > .btnSubmit');
      return cy.get("input[type='submit']")

    }
    usernames(){

        return cy.get(":nth-child(2) > .form-control");
    }
     emails(){

        return  cy.get(':nth-child(3) > .form-control');
     }
    submitButton(){

     //return cy.get('.btnSubmit')
     return cy.get("input[type='submit']");
     
   
    }
    //info(){

    //  return cy.get(':nth-child(2) > .text-white');
          
  //  }
  }

export default Register;