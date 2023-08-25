let titleP = document.getElementById("titlePreview");
let articleP = document.getElementById("articlePreview");
let input1 = document.getElementById("titleText");
let input2 = document.getElementById("articleText");
let password = document.getElementById("password");
let tableName = "News Articles";


function previewText(inputType) {
    let previewType = document.getElementById(inputType);
  
    if(inputType == "titlePreview") {
        previewType.innerHTML = titleText.value;
    }

    if(inputType == "articlePreview") {
        previewType.innerHTML = articleText.value;
    }
}

async function enterText() {
    if(password.value == "4321") {
        let time = ((new Date()).toISOString()).toLocaleString('zh-TW');
        const { count, error } = await _supabase.from(tableName).select('*', { count: 'exact', head: true });
        if(count > 5) {
        count = 5;
        }
        const { error1 } = await _supabase.from(tableName).insert({ id: count+1, title: titleText.value, contents: articleText.value, date:time});
    }
}

