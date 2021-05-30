function empty() {


    var r = confirm("Do you want to reset fields ?");
    if (r == true) {
        document.querySelector('#name').value = "";
        document.querySelector('#surname').value = "";
        document.querySelector('#city').value = "";
    }
}