let listProduct = ['IPHONE 11', 'SAMSUNG S22', 'IPHONE 13', 'NOKIA 1103'];
function showProduct() {
    let danhSach = '';
    for (let i = 0; i < listProduct.length; i++) {
        danhSach += `<tr>
            <td>${i + 1}</td>
            <td>${listProduct[i]}</td>
            <td><button onclick="blockEdit(${i})" class="btn btn-secondary">Edit</button></td>
            <td><button onclick="delProduct(${i})" class="btn btn-secondary">Delete</button></td>
        </tr>`
        document.getElementById("products").innerHTML = i + 1 + ' products'
    }
    document.getElementById("tableProduct").innerHTML = danhSach;

}
function addProduct() {
    let newProduct = document.getElementById('newProduct').value;
    console.log(newProduct)
    if (newProduct == '') { }
    else {
        listProduct.push(newProduct);
        showProduct();
    }
    document.getElementById('classAdd').style.display = 'none';
}
function blockAdd() {
    document.getElementById('classAdd').style.display = 'block';
}
function delProduct(index) {
    let x = prompt("bạn có đồng ý xóa product này(yes or no)");
    if (x == 'yes') {
        listProduct.splice(index, 1);
    }
    showProduct();
}

function blockEdit(index) {
     document.getElementById('classEdit').style.display = 'block';
     let text = `<input type="text" id="editProduct" class="text">
     <input type="button" value="Change" onclick="editProduct(${index})" class="btn btn-secondary">`;
    document.getElementById('classEdit').innerHTML=text;
}
function editProduct(index) {
    let x = document.getElementById('editProduct').value;
    listProduct[index] = x;
    document.getElementById('classEdit').style.display = 'none';
    showProduct();
}

showProduct();