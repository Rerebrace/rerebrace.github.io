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

    contents += '<tr><th class="tableelement">Name</td><th class="tableelement">Feedback</td></tr>';

    console.log(data);
    for(let i = 0; i < count; i++) {
        for(let j = 0; j < count; j++) {
            if(data[j]["id"] == currentNumber) {
                nameVar = data[j]["name"];
                textVar = data[j]["contents"];
                contents += '<tr><td class="tableelement">' + nameVar + '</td><td class="tableelement">' + textVar + '</td></tr>';
                console.log(contents);
                currentNumber-=1;
                feedbackLogsHolder.innerHTML = contents;
                break;
            }
        }
    }    
}

retrieveFeedbackLogs();

setInterval(retrieveFeedbackLogs(), 1000);
