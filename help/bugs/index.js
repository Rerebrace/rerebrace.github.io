let bugsLogsHolder = document.getElementById("feedbackLogs");
let bugName = document.getElementById("name");
let bugText = document.getElementById("bugs");
let bugVersion = document.getElementById("version");
let tableName = "Bugs";
let nameVar = "";
let textVar = "";
let contents = "";

async function enterText() {
    console.log(bugName.value);
    console.log(bugText.value);

    const { count, error } = await _supabase.from(tableName).select('*', { count: 'exact', head: true });
    const { error1 } = await _supabase.from(tableName).insert({ id: count+1, name: bugName.value, contents: bugText.value, version: bugVersion.value});

    bugName.value = "";
    bugText.value = "";
    bugVersion.value = "";
}



async function retrieveFeedbackLogs() {
    
    const { data, error } = await _supabase.from(tableName).select();
    const { count, error1 } = await _supabase.from(tableName).select('*', { count: 'exact', head: true });
    let currentNumber = 1;
    
    feedbackLogsHolder.innerHTML = "";
    console.log(data);
    for(let i = 0; i < count; i++) {
        for(let j = 0; j < count; j++) {
            if(data[j]["id"] == currentNumber) {
                nameVar = data[j]["name"];
                textVar = data[j]["contents"];

                feedbackLogsHolder.insertAdjacentHTML("afterbegin", '<tr><td class="firstelement tableelement" width="25%"></td><td class="secondelement tableelement" width="75%"></td></tr>');
                let namePlace = document.getElementsByClassName("firstelement");
                namePlace[namePlace.length-i-1].insertAdjacentText("beforeend", nameVar);
                let textPlace = document.getElementsByClassName("secondelement");
                textPlace[textPlace.length-i-1].insertAdjacentText("beforeend", textVar);
                console.log(contents);
                currentNumber+=1;
                break;
            }
        }
    }
    feedbackLogsHolder.insertAdjacentHTML("afterbegin", '<tr><th class="tableelement" width="25%">Name</td><th class="tableelement" width="75%">Feedback</td></tr>');
}

retrieveBugsLogs();

const intervalID = setInterval(retrieveFeedbackLogs, 1000);
