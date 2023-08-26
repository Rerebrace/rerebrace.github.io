let titleP = document.getElementById("titlePreview");
let articleP = document.getElementById("articlePreview");
let input1 = document.getElementById("titleText");
let input2 = document.getElementById("articleText");
let yourPassword = document.getElementById("password");
let yourEmail = document.getElementById("email");
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
    console.log(yourEmail.value);
    console.log(yourPassword.value);
    const { data, error } = await _supabase.auth.signInWithPassword({email: yourEmail.value, password: yourPassword.value,});
    let time = ((new Date()).toISOString()).toLocaleString('zh-TW');
    const { count, error1 } = await _supabase.from(tableName).select('*', { count: 'exact', head: true });
    const { error2 } = await _supabase.from(tableName).insert({ id: count+1, title: titleText.value, contents: articleText.value, date:time});
}

