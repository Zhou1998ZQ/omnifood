const postalCodeReg = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/
const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const cardReg = /\b\d{16}\b/
const cvvReg = /^\d{3}$/
const expiryDateReg = /^(0[1-9]|1[0-2])\/[0-9]{2}$/


function checkEmail() {
    const emailValue = $('#inputEmail4').val()
    if (!emailReg.test(emailValue)) {
        $('#inputEmail4').prev().css('display', 'block')
        return false
    } else {
        $('#inputEmail4').prev().css('display', 'none')
        return true
    }
}


function checkAddress() {
    const inputAddress = $('#inputAddress').val()
    if (!inputAddress.trim()) {
        $('#inputAddress').prev().css('display', 'block')
        return false
    } else {
        $('#inputAddress').prev().css('display', 'none')
        return true
    }
}
function checkCardholder() {
    const inputCardholder = $('#cardholder').val()
    if (!inputCardholder.trim()) {
        $('#cardholder').prev().css('display', 'block')
        return false
    } else {
        $('#cardholder').prev().css('display', 'none')
        return true
    }
}

function checkExpiryDate() {
    const date = $('#expiryDate').val()
    if (!expiryDateReg.test(date)) {
        $('#expiryDate').prev().css('display', 'block')
        return false
    } else {
        $('#expiryDate').prev().css('display', 'none')
        return true
    }
}

function checkCity() {
    const inputCity = $('#inputCity').val()
    if (!inputCity.trim()) {
        $('#inputCity').prev().css('display', 'block')
        return false
    } else {
        $('#inputCity').prev().css('display', 'none')
        return true
    }
}

function checkCVV() {
    const cvv = $('#CVV').val()
    if (cvv.trim().length != 3) {
        $('#CVV').prev().css('display', 'block')
        return false
    } else {
        $('#CVV').prev().css('display', 'none')
        return true
    }
}

function checkPostalCode() {
    const postalCode = $('#postalCode').val()
    if (!postalCodeReg.test(postalCode)) {
        $('#postalCode').prev().css('display', 'block')
        return false
    } else {
        $('#postalCode').prev().css('display', 'none')
        return true
    }
}

function checkCardNumber() {
    let cardNumber = $('#cardNumber').val()
    let noSpaceCardNumber = cardNumber.replace(/\s/g, "")
    console.log(noSpaceCardNumber)
    if (!cardReg.test(noSpaceCardNumber)) {
        $('#cardNumber').prev().css('display', 'block')
        return false
    } else {
        $('#cardNumber').prev().css('display', 'none')
        return true
    }
}


function generateOrderNumber() {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let orderNumber = "";

    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        orderNumber += characters.charAt(randomIndex);
    }

    orderNumber = orderNumber.match(/.{1,4}/g).join("-");

    return orderNumber;
}


function getTimeRangeToNextMonth() {
    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}/${month}/${day}`;
    };

    const fromDate = formatDate(today);
    const toDate = formatDate(nextMonth);

    return `From ${fromDate} To ${toDate}`;
}


function getOrderPlan(amount) {
    if (amount == 300) {
        return 'STARTER $300 / Month'
    } else if (amount == 600) {
        return 'COMPLETE $600 / Month'
    } else if (amount == 799) {
        return 'LUXURY $799 / Month'
    }
}