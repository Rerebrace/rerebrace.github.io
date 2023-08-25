let articleHolder = document.getElementById("articleHolder");
let tableName = "Download Numbers";



async function retrieveArticles() {
  
    const { data, error } = await _supabase.from(tableName).select();
    const { count, error1 } = await _supabase.from(tableName).select('*', { count: 'exact', head: true });
    let currentNumber = count;
    
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 3; j++) {
            if(data[j]["id"] == currentNumber) {
                articleHolder.innerHTML += <div class="column2"><div class="grouping"><h3 class="plaintext">${data[j]["title"]}: ${data[j]["date"]}</h3><p class = "plaintext">${data[j]["contents"]}</p></div></div>;
                currentNumber--;  
            }
        }
    }
}

retrieveArticles();
