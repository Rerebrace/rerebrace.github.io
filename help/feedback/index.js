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
    const { error1 } = await _supabase.from(tableName).insert({ id: count + 1, name: feedbackName.value, contents: feedbackText.value });

    feedbackName.value = "";
    feedbackText.value = "";
}



async function retrieveFeedbackLogs() {

    const { data, error } = await _supabase.from(tableName).select();
    const { count, error1 } = await _supabase.from(tableName).select('*', { count: 'exact', head: true });
    let currentNumber = count;

    feedbackLogsHolder.innerHTML = "";
    console.log(data);

    data.reverse()
    data.forEach(element => {
        nameVar = element["name"];
        textVar = element["contents"];

        feedbackLogsHolder.insertAdjacentHTML("beforeend", '<tr><td class="firstelement tableelement"></td><td class="secondelement tableelement"></td></tr>');
        let namePlace = document.getElementsByClassName("firstelement");
        namePlace[namePlace.length - 1].insertAdjacentText("beforeend", nameVar);
        let textPlace = document.getElementsByClassName("secondelement");
        textPlace[textPlace.length - 1].insertAdjacentText("beforeend", textVar);
        console.log(contents);
    });
    feedbackLogsHolder.insertAdjacentHTML("afterbegin", '<tr><th class="tableelement">Name</td><th class="tableelement">Feedback</td></tr>');
}

//use data for each not for loops this is quicker
retrieveFeedbackLogs();

const intervalID = setInterval(retrieveFeedbackLogs, 1000);
