$("#infoSubmit").on("click", function() {
    console.log("i work niggs");
    let email = $("#customerEmail").val();
    let name = $("#customerName").val();
    let number = $("#customerNumber").val();
    let customer = {
        email: email,
        name: name,
        number: number
    }
    console.log(customer)
});