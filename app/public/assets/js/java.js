
$("#infoSubmit").on("click", function(event) {
    event.preventDefault();
    console.log("i work");


    let email = $("#customerEmail").val().trim();
    let address = $("#customerAddress").val().trim();
    let name = $("#customerName").val();
    let number = $("#customerNumber").val().trim();
    let bill = $("#customerBill").val().trim();

    let customer = {
        address: address,
        email: email,
        name: name,
        number: number,
        bill: bill
    }
    console.log(customer);

    // $.post("/api/new", customer).then(function(){
    //     console.log("success");
    // });

    $.post("/api/new", customer).then(function(){
        console.log("success");
    });

    $("#customerEmail").val("");
    $("#customerAddress").val("");
    $("#customerName").val("");
    $("#customerNumber").val("");
    $("#customerBill").val("");

});