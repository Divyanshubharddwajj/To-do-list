let taskinput = document.querySelector('#taskinput');
let addbtn = document.querySelector('#addbtn');
let taskdata = "";
let taskArray = [];

taskinput.addEventListener('change', function (dets) {
    taskdata = dets.target.value;

});

function addtask() {

    document.querySelector('.tasklist').style.display = "flex";

    let clutter = "";
    taskArray.forEach(function (elem, idx) {
        clutter += `<div class="taskname" id="${idx}">
                <ul>
                    <li id="${idx}">${elem}</li>
                </ul>
                <div class="optionbtn">
                    <input type="checkbox" class="taskcheck" id="${idx}">
                    <button class="deletebtn" id="${idx}"><i class="ri-delete-bin-6-fill"></i></button>
                </div>

            </div>`
    })

    document.querySelector('.tasklist').innerHTML = clutter;
}

function addbtnfn() {

    addbtn.addEventListener('click', function (e) {
        taskArray.push(taskdata);

        addtask();

    });
}

function checkbox() {

    let tasklist = document.querySelector('.tasklist');

    let check = false;

    tasklist.addEventListener('click', function (dets) {

        if (dets.target.className === "taskcheck") {

            document.querySelectorAll('li').forEach(function (li, idx) {

                if (li.id === dets.target.id) {

                    if (check === true) {
                        li.style.textDecoration = "capitalize";
                        check = false;
                    }
                    else {
                        li.style.textDecoration = "line-through";
                        check = true;
                    }

                }

            });




        }

        else if (dets.target.className === "deletebtn") {

            let alltaskname = document.querySelectorAll('.taskname');

            alltaskname.forEach(function (taskname, idx) {

                if (taskname.id === dets.target.id) {

                    taskArray = taskArray.filter(function (val, idx) {

                        if (idx !== Number(taskname.id)) {
                            return true;

                        }


                    });
                    console.log(taskArray);

                }

            });

            addtask();


        }




    })
}


addtask();
addbtnfn();
checkbox();











