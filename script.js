let book_name = document.getElementById("book-name");
let author_name = document.getElementById("author-name");
let book_id = document.getElementById("book-id");
let submit_btn = document.getElementById("submit-btn");
let sucess = document.getElementById("sucess");
let close = document.getElementById("close");
let tbody = document.getElementById("tbody");

submit_btn.addEventListener("click", show);
close.addEventListener("click", close_alert);

function show(e) {
    e.preventDefault();
    if (book_name.value == '' || author_name.value == '' || book_id.value == '') {
        alert_show();
    }
    else {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.classList.add("bg-gray-100", "px-3", "bg-gray-100", "px-3", "border-b", "border-black");
        td1.textContent = book_name.value;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.classList.add("bg-gray-100", "px-3", "bg-gray-100", "px-3", "border-b", "border-black");
        td2.textContent = author_name.value;
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.classList.add("bg-gray-100", "px-3", "bg-gray-100", "px-3", "border-b", "border-black");
        td3.textContent = book_id.value;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        let deleteBtn = document.createElement("button");
        td4.classList.add("bg-gray-100", "px-3", "bg-gray-100", "px-3", "border-b", "border-black", "text-center", "cursor-pointer");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", function () {
            tr.remove();
        });
        td4.appendChild(deleteBtn);
        tr.appendChild(td4);


        tbody.appendChild(tr);
        book_name.value = ''; author_name.value = ''; book_id.value = ''

        sucess_show();
    }

}
function sucess_show() {
    document.querySelector(".sucess").classList.remove("hidden");
    setTimeout(() => {
        close_alert();
    }, 3000);
}

function alert_show() {
    document.querySelector(".alert").classList.remove("hidden");
    setTimeout(() => {
        close_alert();
    }, 3000);
}


function close_alert() {
    document.querySelector(".alert").classList.add("hidden");
    document.querySelector(".sucess").classList.add("hidden");

}