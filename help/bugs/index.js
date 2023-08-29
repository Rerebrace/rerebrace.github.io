let bugsLogsHolder = document.getElementById("bugLogs");
let bugName = document.getElementById("name");
let bugText = document.getElementById("bugText");
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



async function retrieveBugsLogs() {
    
    const { data, error } = await _supabase.from(tableName).select();
    const { count, error1 } = await _supabase.from(tableName).select('*', { count: 'exact', head: true });
    let currentNumber = 1;
    
    bugsLogsHolder.innerHTML = "";
    console.log(data);
    for(let i = 0; i < count; i++) {
        for(let j = 0; j < count; j++) {
            if(data[j]["id"] == currentNumber) {
                nameVar = data[j]["name"];
                textVar = data[j]["contents"];
                versionVar = data[j]["version"];
                bugsLogsHolder.insertAdjacentHTML("afterbegin", '<tr><td class="firstelement tableelement" width="25%"></td><td class="secondelement tableelement" width="50%"></td><td class="thirdelement tableelement" width="50%"></td></tr>');
                let namePlace = document.getElementsByClassName("firstelement");
                namePlace[namePlace.length-i-1].insertAdjacentText("beforeend", nameVar);
                let textPlace = document.getElementsByClassName("secondelement");
                textPlace[textPlace.length-i-1].insertAdjacentText("beforeend", textVar);
                let versionPlace = document.getElementsByClassName("thirdelement");
                versionPlace[versionPlace.length-i-1].insertAdjacentText("beforeend", versionVar);
                console.log(contents);
                currentNumber+=1;
                break;
            }
        }
    }
    bugsLogsHolder.insertAdjacentHTML("afterbegin", '<tr><th class="tableelement" width="25%">Name</td><th class="tableelement" width="50%">Feedback</td><th class="tableelement" width="25%">Version</td></tr>');
}

retrieveBugsLogs();

const intervalID = setInterval(retrieveBugsLogs, 1000);
