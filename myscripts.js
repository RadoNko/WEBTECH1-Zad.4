

function validateInputs() {

    let input_x = document.getElementById("x_input");
    let input_y = document.getElementById("y_input");

    //test input_x
    if (input_x.value.toString().length === 1 && input_x.value.toString().charCodeAt(0) >= 49 && input_x.value.toString().charCodeAt(0) <=57 ){
        input_x.classList.remove("border-danger");
        //test input_y
        if(input_y.value.toString().length === 1 && input_y.value.toString().charCodeAt(0) >= 49 && input_y.value.toString().charCodeAt(0) <=57){
            input_y.classList.remove("border-danger");
            return true;
        }
        else {
            console.log("bad 2. input");
            input_y.classList.add("border","border-danger");
            return false;
        }
    }
    console.log("bad 1. input");
    input_x.classList.add("border","border-danger");
    return false;
}

function generateTable() {
    if (!validateInputs()) return false;
    else {
        console.log("good input");
        let col_number = document.getElementById("x_input").value;
        let row_number = document.getElementById("y_input").value;
        let table_area = document.getElementById("table_area");
        table_area.removeChild(table_area.lastChild);
        let table = document.createElement("table");
        for (let i = 1;i<=row_number;i++){
            let new_row = document.createElement("tr");
            for (let j = 1;j<=col_number;j++){
                let new_col = document.createElement("td");
                let new_val;
                if (j == 1 && i == 1)  new_val = document.createTextNode("X/Y="+(i*j).toString());
                else if (j == 1)  new_val = document.createTextNode("Y="+(i*j).toString());
                else if (i == 1)  new_val = document.createTextNode("X="+(i*j).toString());
                else new_val = document.createTextNode((i*j).toString());

                new_col.appendChild(new_val);
                new_row.appendChild(new_col);
            }
            table.appendChild(new_row);
        }
        table_area.appendChild(table);
        document.getElementById("table").style.visibility = "visible";
    }
}

function closeTable() {
    document.getElementById("table").style.visibility = "hidden";
}