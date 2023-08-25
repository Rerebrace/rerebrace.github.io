let articleHolder = document.getElementById("articleHolder");
let tableName = "News Articles";
let contents = "";
let titleVar = "";
let textVar = "";
let dateVar = "";


async function retrieveArticles() {
    
    const { data, error } = await _supabase.from(tableName).select();
    const { count, error1 } = await _supabase.from(tableName).select('*', { count: 'exact', head: true });
    let currentNumber = count;
    let repeatCount = count;

    if(repeatCount > 11) {
        repeatCount = 10;
    }

    console.log(data);
    for(let i = 0; i < repeatCount; i++) {
        for(let j = 0; j < count; j++) {
            if(data[j]["id"] == currentNumber) {
                titleVar = data[j]["title"];
                textVar = data[j]["contents"];
                dateVar = data[j]["date"];
                contents += '<div class="column2"><div class="grouping"><h3 class="plaintext">' + titleVar + ': ' + dateVar + '</h3><p class = "plaintext">' + textVar + '</p></div></div>';
                console.log(contents);
                currentNumber-=1;
                articleHolder.innerHTML = contents;
                break;
            }
        }
    }    
}

retrieveArticles();
