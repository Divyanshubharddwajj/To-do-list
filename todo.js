let taskinput = document.querySelector('#taskinput');
let addbtn = document.querySelector('#addbtn');
let taskdata = "";
let taskArray = [];



taskinput.addEventListener('input', function (dets) {

    taskdata = dets.target.value;
    // console.log(taskdata);

});

function addtask() {

    let clutter = "";
    taskArray.forEach(function (elem, idx) {
        clutter += `<div class="taskname" data-id="${idx}">
                <ul>
                    <li data-id="${idx}">${elem.tkname}</li>
                </ul>
                <div class="optionbtn">
                    <input type="checkbox" class="taskcheck" data-id="${idx}">
                    <button class="deletebtn" data-id="${idx}"><i class="ri-delete-bin-6-fill"></i></button>
                </div>

            </div>`
    })

    document.querySelector('.tasklist').innerHTML = clutter;



}

function addbtnfn() {

    addbtn.addEventListener('click', function (e) {

        if (taskdata !== "") {

            let duplicatetask = taskArray.some((task) => {
                return taskdata === task.tkname;
            })

            if (!duplicatetask) {
                taskArray.push({
                    tkname: taskdata,
                    ischecked: false,
                });
            }
            taskinput.value = "";
            taskdata = "";


            addtask();
            taskstatus();
            document.querySelector('.tasklist').style.setProperty('display', 'flex', 'important');
            document.querySelector('.taskstatus').style.setProperty('display', 'flex', 'important');
        }



    });
}

function addtaskEbtn() {

    document.body.addEventListener('keydown', function (keypress) {

        if (keypress.key === "Enter" && taskdata !== "") {
            addbtn.click();

        }
    })
}

function checkbox() {

    let tasklist = document.querySelector('.tasklist');

    tasklist.addEventListener('click', function (dets) {

        if (dets.target.className === "taskcheck") {

            document.querySelectorAll('li').forEach(function (li, idx) {

                if (li.dataset.id === dets.target.dataset.id) {

                    if (taskArray[dets.target.dataset.id].ischecked === true) {
                        li.style.textDecoration = "none";
                        taskArray[dets.target.dataset.id].ischecked = false;

                    }
                    else {
                        li.style.textDecoration = "line-through";
                        taskArray[dets.target.dataset.id].ischecked = true;

                    }

                }

                taskstatus();

            });


        } else if (dets.target.className === "deletebtn") {

            let alltaskname = document.querySelectorAll('.taskname');

            alltaskname.forEach(function (taskname, idx) {

                if (taskname.dataset.id === dets.target.dataset.id) {

                    if (taskArray[dets.target.dataset.id].ischecked === true) {

                        taskArray.splice(dets.target.dataset.id, 1);
                        console.log(taskArray);
                    }
                    else {
                        taskArray.splice(dets.target.dataset.id, 1);
                        console.log(taskArray);
                    }

                }

            });

            addtask();
            taskstatus();

        }



    })
}


function taskstatusfn() {

    let complete = 0;
    let pending = 0;
    let totaltask = 0;

    taskArray.forEach(function (task) {

        if (task.ischecked) {
            complete++;
        }

    });

    totaltask = taskArray.length;
    pending = taskArray.length - complete;

    return [totaltask, complete, pending];


}


function taskstatus() {

    let v1 = taskstatusfn();

    document.querySelector('.taskstatus').innerHTML = `<h3 id="totaltask">Total tasks : <span>${v1[0]}</span></h3>
            <h3 id="completestatus">Completed : <span>${v1[1]}</span></h3>
            <h3 id="pendingstatus">Pending : <span>${v1[2]}</span></h3>`

}





addtask();
addbtnfn();
checkbox();
addtaskEbtn();
taskstatusfn();
taskstatus();










