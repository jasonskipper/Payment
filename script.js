function testLength(value, length) {
  if(value.length == length) return true;
  else {
    return false;
  }
}

function testNumber(value) {
  return !isNaN(value);
}

function validateControl(control, name, length) {
  var lengthtest = testLength(control, length);
  if(lengthtest) {
    var numbertest = testNumber(control);
    if(numbertest) {
      return true;
    }
    alert(name + " is not a number.");
    return false;
  } else {
    alert(name + " is not the correct length.");
    return false;
  }
}

function validateCreditCard(value) {
value = value.replace(/\s/g, '');
var creditcardnumbertest = testNumber(value);
if(creditcardnumbertest) {
  const firstdigit = value.charAt(0);
  if(firstdigit == 3 || firstdigit == 4 || firstdigit == 5 || firstdigit == 6) {
    var creditcardlengthtest = testLength(value, 16);
    if(creditcardlengthtest) {
      return true;
    }
    alert(value + " appropriate error message.");
    return false;
  }
  alert(value + " first digit error message.");
  return false;
}
alert(value + " is not a number.");
return false;
}

function validateDate(value) {
  if(document.getElementById('bdaymonth').value > new Date().getMonth()) {
    return true;
  }
  alert("date is less than today's date");
  return false;

}

function validateEmail(value) {
  if(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]+/.test(value)) { // does this work??
    return true;
  }
  alert(value + "invalid email");
  return false;
}

function validateForm() {
  if(
    validateControl(document.getElementById('cvv2cvc'), cvv2cvc, 3) &&
    validateCreditCard(document.getElementById('cardnumber')) &&
    validateDate(document.getElementById('bdaymonth')) &&
    validateEmail(document.getElementById('emailaddress')) &&
    validateState(document.getElementById('states')) &&
    validateControl(document.getElementById('zip'), zip, 5)
  ) {
    alert("Payment Submitted");
    return false;
  }
  alert("payment not submitted")
  return false;
}

function validateState(value) {
  if(document.getElementById("states").options[state.selectedIndex].value == 'Select State'){
    alert("state not selected");
    return false;
  }
  return true;

}
