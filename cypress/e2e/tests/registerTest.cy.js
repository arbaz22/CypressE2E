import { registerPage } from "../../pages/registerpage";

const registerObj=new registerPage();

import registerData from "../../fixtures/registerData.json";



describe('register test',()=>{

    it('register test',()=>{
        registerObj.openURL();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterEmail(registerData.email);
        registerObj.enterTelephone(registerData.telephone);
        registerObj.enterPassword(registerData.password);
        registerObj.selectCheckBox()
        registerObj.clickContinue()


    })
})