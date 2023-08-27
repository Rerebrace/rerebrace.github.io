let feedbackLogsHolder = document.getElementById("feedbackLogs");
let feedbackName = document.getElementById("name");
let feedbackText = document.getElementById("feedback");
let tableName = "Feedback";
let nameVar = "";
let textVar = "";
let contents = "";

async function enterText() {
    console.log(feedbackName.value);
    console.log(feedbackText.value);

    const { count, error } = await _supabase.from(tableName).select('*', { count: 'exact', head: true });
    const { error1 } = await _supabase.from(tableName).insert({ id: count+1, name: feedbackName.value, contents: feedbackText.value});

    feedbackName.value = "";
    feedbackText.value = "";
}



async function retrieveFeedbackLogs() {
    
    const { data, error } = await _supabase.from(tableName).select();
    const { count, error1 } = await _supabase.from(tableName).select('*', { count: 'exact', head: true });
    let currentNumber = count;
    
    contents = "";
    contents += '<tr><th class="tableelement">Name</td><th class="tableelement">Feedback</td></tr>';

    console.log(data);
    for(let i = 0; i < count; i++) {
        for(let j = 0; j < count; j++) {
            if(data[j]["id"] == currentNumber) {
                nameVar = data[j]["name"];
                textVar = data[j]["contents"];

                <!--feedbackLogsHolder.insertAdjacentHTML("beforeend", '<tr><td class="tableelement">');
                feedbackLogsHolder.insertAdjacentText("beforeend", nameVar);
                feedbackLogsHolder.insertAdjacentHTML("beforeend", '</td><td class="tableelement">');
                feedbackLogsHolder.insertAdjacentText("beforeend", textVar);
                feedbackLogsHolder.insertAdjacentHTML("beforeend", </td></tr>);-->

                <!--contents += '<tr><td class="firstelement" class="tableelement"></td><td class="secondelement" class="tableelement"></td></tr>';
                feedbackLogsHolder.innerHTML = contents;-->

                feedbackLogsHolder.insertAdjacentHTML("afterbegin", '<tr><td class="firstelement" class="tableelement"></td><td class="secondelement" class="tableelement"></td></tr>')
                let namePlace = document.getElementsByClass("firstelement");
                namePlace.insertAdjacentText("beforeend", nameVar);
                let textPlace = document.getElementsByClass("secondelement");
                textPlace.insertAdjacentText("beforeend", textVar);
                
                <!--contents += '<tr><td class="tableelement">' + nameVar + '</td><td class="tableelement">' + textVar + '</td></tr>';-->
                console.log(contents);
                currentNumber-=1;
                idNumber += 2;
                break;
            }
        }
    }    
}

retrieveFeedbackLogs();

const intervalID = setInterval(retrieveFeedbackLogs, 1000);
