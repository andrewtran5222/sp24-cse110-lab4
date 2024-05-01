function printSum() {
    debugger
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
  }
  
  function calculateSum(num1, num2) {
    result = parseInt(num1) + parseInt(num2);
    return result
  }

  console.log(calculateSum('1', '2'));