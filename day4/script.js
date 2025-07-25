// Problem:
// working on an invoice management system. You have a list of invoice numbers and you need to format them by adding a prefix "INV-" to each.

let invoices = [1001, 1002, 1003, 1004];
let updateInvoices=invoices.map((n) =>{ 
    return 'INV-'+n;
})
console.log(updateInvoices);

