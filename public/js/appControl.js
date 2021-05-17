let isPromo = false;
let isPromoUpd = false;

document.addEventListener('DOMContentLoaded', onDOMLoaded())

function reloadPage(){
    setTimeout(window.reloadPage(), 1000)
}

function onDOMLoaded() {
    let reqProducts = setRequestHttp(
        "GET",
        "/products",
        function (e) {
            loadIdAutoComplete(e.target.response)
        },
        function(e) {
            loadIdAutoComplete([{_id: 'ERROR: REFRESH PAGE'}])
        })
    reqProducts.send()
};
function getElementValue(element) {
    return document.getElementById(element).value
}

function updateProduct() {
    let id = getElementValue('autocompleteid')
    let newName = getElementValue('nameUpd')
    let newPrice = getElementValue('priceUpd')
    let newDescr = getElementValue('ratingUpd')
    let newPromoUpd = document.getElementById('isPromoUpd').checked
    let newPriceCutOffUpd = getElementValue('priceCutOffUpd')
    let newFinalPrice = getElementValue('finalPriceUpd')
    let data = `{
        "name": "${newName}",
        "price": ${newPrice},
        "description": "${newDescr}",
        "isPromo": ${newPromoUpd},
        "priceCutOff": ${newPriceCutOffUpd},
        "finalPrice": ${newFinalPrice}
    }`
    let httpReq = setRequestHttp(
        "PATCH",
        "/products/"+id,
        function(e){console.log(e)},
        function(e){console.log(e)})

    httpReq.setRequestHeader("Accept", "application/json");
    httpReq.setRequestHeader("Content-Type", "application/json");
    httpReq.send(data)

}

function checkIfPromotionalPrice() {
    isPromo = document.getElementById('isPromo').checked;
    isPromoUpd = document.getElementById('isPromoUpd').checked;
    if (isPromo) {
        document.getElementById('promoInputs').classList.remove('inputDisplayNone')
        document.getElementById('promoInputs').classList.add('inputDisplayBlock')
    } else {
        document.getElementById('promoInputs').classList.add('inputDisplayNone')
        document.getElementById('promoInputs').classList.remove('inputDisplayBlock')
    }
}

function updateFinalPrice() {
    let price = parseFloat(getElementValue('price'))
    let cutOff = getElementValue('priceCutOff')
    let finalPrice = getElementValue('finalPrice')
    let priceUpd = parseFloat(getElementValue('priceUpd'))
    let cutOffUpd = getElementValue('priceCutOffUpd')
    let finalPriceUpd = getElementValue('finalPriceUpd')
    try {
        finalPrice = price * (1 - cutOff/100)
    } catch (e) {
        console.log(e)
    }
    try {
        finalPriceUpd = priceUpd * (1 - cutOffUpd/100)
    } catch (e) {
        console.log(e)
    }
    document.getElementById('finalPriceUpd').value = finalPriceUpd.toFixed(2)
    document.getElementById('finalPrice').value = finalPrice.toFixed(2)
}

function fixTwoDecimals() {
    let price = parseFloat(getElementValue('price'))
    let priceUpd = parseFloat(getElementValue('priceUpd'))
    if (price > 1000000) {
        price = 1000000
    }
    if (priceUpd > 1000000) {
        priceUpd = 1000000
    }
    document.getElementById('priceUpd').value = priceUpd.toFixed(2)
    document.getElementById('price').value = price.toFixed(2)
}

function updateCutOff() {
    let cutOffValue = parseFloat(getElementValue('priceCutOff'))
    let cutOffValueUpd = parseFloat(getElementValue('priceCutOffUpd'))
    if (cutOffValue < 0) {
        cutOffValue = 0
    } else if (cutOffValue > 100) {
        cutOffValue = 100
    }
    if (cutOffValueUpd < 0) {
        cutOffValueUpd = 0
    } else if (cutOffValueUpd > 100) {
        cutOffValueUpd = 100
    }
    document.getElementById('priceCutOffUpd').value = cutOffValueUpd.toFixed(2)
    document.getElementById('priceCutOff').value = cutOffValue.toFixed(2)
}

function loadIdAutoComplete(data) {
    let elems = document.querySelectorAll('#autocompleteid');
    let mapData = data.map(function(item) {
        return [item['_id'], null]
    })
    let dataIds = Object.fromEntries(mapData)
    console.log(data, mapData, dataIds)
    let options = {
        data: dataIds,
        minLength: 0
    }
    console.log(M)
    console.log(window.M)
    let instances = M.Autocomplete.init(elems, options);

    console.log(instances)
}

function getProductById() {
    let id = getElementValue('autocompleteid')
    if (id.length > 20) {
        let httpReq = setRequestHttp(
            "GET",
            "/products/" + id,
            function (e) {
                let data = e.target.response
                document.getElementById('nameUpd').value = data.name
                document.getElementById('priceUpd').value = data.price
                document.getElementById('descriptionUpd').value = data.description
                document.getElementById('ratingUpd').value = data.rating
                document.getElementById('isPromoUpd').checked = data.isPromo
                document.getElementById('priceCutOffUpd').value = data.priceCutOff
                document.getElementById('finalPriceUpd').value = data.finalPrice
            },
            function (e) {
                console.log(e)
            })
        httpReq.send()
    }

}

function setRequestHttp(method, url, onload, onError){
    let httpReq = new XMLHttpRequest();
    httpReq.responseType = 'json'
    httpReq.open(method, url, true)
    httpReq.onload = onload
    httpReq.onerror = onError
    return httpReq
}
