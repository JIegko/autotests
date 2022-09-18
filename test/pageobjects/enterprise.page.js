const Page = require('./page');

class EnterprisePage extends Page {

    get enterpriseBtn () {
        return $('header [href="/enterprise"]');
    }

    get freeTrialBtn () {
        return $('[class="btn-mktg mr-0 mr-sm-2"]');
    }

    get enterpriseCloudBtn () {
        return $('//*[@id="js-pjax-container"]/div/div[2]/div/div/div[1]/a/div/div');
    }

    get enterpriseServerBtn () {
        return $('//*[@id="js-pjax-container"]/div/div[2]/div/div/div[2]/a/div/div');
    }

    get checkBoxPreferences () {
        return $('[id="all_emails"]');
    }

    get inputNameServ () {
        return $('[id="contact_request_name"]');
    }
    get inputCompanyServ () {
        return $('[id="contact_request_organization_name"]');
    }
    get inputEmailServ () {
        return $('[id="contact_request_email"]');
    }
    get inputPhoneServ () {
        return $('[id="contact_request_phone"]');
    }

    get radioBtnGCloud () {
        return $('[id="contact_request_instance_type_gcp"]');
    }

    get radioBtnYes () {
        return $('[id="questions_yes"]');
    }

    get questionsList () {
        return $('[id="questions-list"]');
    }
    
    get checkBoxAccept () {
        return $('[id="contact_request_agreed_to_terms"]');
    }
 
    async addValueName() {
        await this.inputNameServ.addValue('MyName');
    };

    async addValueCompany() {
        await this.inputCompanyServ.addValue('My Company');
    };

    async addValueEmail() {
        await this.inputEmailServ.addValue('testEmail123@company.com');
    };
 
    async addValuePhoneNumb() {
        await this.inputPhoneServ.addValue('+381231231230');
    };

    async addQuestionText() {
        await this.questionsList.addValue('Can U give me more days free trial of Enterprise Server?');
    };
}

module.exports = new EnterprisePage();

