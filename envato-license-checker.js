const verifyURL = 'https://api.envato.com/v3/market/author/sale/';

const state = {
    bearer: '',
};

function setBearerToken(token) {
    state.bearer = token;
}

async function getPurchaseData(code) {
    let url = verifyURL + '?code=' + code;

    let options = {
        headers: new Headers({
            'Content-type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer ' + state.bearer,
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

async function check(code)
{
    let purchaseData = await getPurchaseData(code); 

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

module.exports = {
    check,
    setBearerToken,
    getPurchaseData
};