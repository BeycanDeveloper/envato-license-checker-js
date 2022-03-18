class EnvatoLicenseChecker {
    
    static bearer;

    static verifyURL = 'https://api.envato.com/v3/market/author/sale/';

    /**
     * To add the token you created through Envato.
     * 
     * @param {String} token
     * @return void
     */
    static setBearerToken(token)
    {
        this.bearer = token;
    }

    /**
      * The method where you can fetch the purchase data of the purchase code you entered
      * 
      * @param {String} code
      * @return {Object}
      */
    static async getPurchaseData(code)
    {
        let url = this.verifyURL + '?code=' + code;

        let options = {
            headers: new Headers({
                'Content-type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.bearer,
            }),
        };

        return await fetch(url, options)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;  
        }).catch(function (err) {
            console.warn('Something went wrong.', err);
            return false;
        });
    }
    
    /**
      * It checks the validity of the purchase code you entered and returns true false.
      * 
      * @param {String} code
      * @return {Boolean}
      */
    static async check(code)
    {
        let purchaseData = await this.getPurchaseData(code); 

        if ( 
            false === purchaseData || 
            typeof purchaseData != 'object' ||
            typeof purchaseData.error != 'undefined' ||
            typeof purchaseData.sold_at == 'undefined'
        ) {
            return false;
        }
        
        if (
            purchaseData.supported_until == "" ||
            purchaseData.supported_until != null
        ) {
            return purchaseData;  
        }
        
        return false;
    }
}

module.exports = EnvatoLicenseChecker;