function add_event() {
    let table = document.getElementById('table1');
    let length = table.rows.length;
    console.log(length);
    let new_row = table.insertRow(length);
    console.log(new_row);

    let new_name = new_row.insertCell(0);
    let new_phone = new_row.insertCell(1);
    let new_operation = new_row.insertCell(2);

    new_name.innerHTML = 'none name';
    new_phone.innerHTML = 'none phone';
    new_operation.innerHTML = '<button onclick="edit_event(this)">编辑</button><button onclick="delete_event(this)">删除</button>'
}


function delete_event(button) {
    let now_row = button.parentNode.parentNode;
    now_row.parentNode.removeChild(now_row);
}

function edit_event(button) {
    let now_row = button.parentNode.parentNode;
    let name = now_row.cells[0];
    let phone = now_row.cells[1];

    // let new_name = prompt("输入你的名字");
    // if (new_name == '' || new_name == null)
    //     delete_event(button);
    // name.innerHTML = new_name;
    // let new_phone = prompt("输入你的电话");
    // if (new_phone == '' || new_phone == null)
    //     delete_event(button);
    // phone.innerHTML = new_phone;
    let new_name = prompt("输入你的名字");
    if (new_name !== null && new_name !== '')
        name.innerHTML = new_name;

    let new_phone = prompt("输入你的电话");
    if (new_phone !== null && new_phone !== '')
        phone.innerHTML = new_phone;
}

