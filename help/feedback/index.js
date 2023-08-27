let feedbackName = document.getElementById("name");
let feedbackText = document.getElementById("feedback");
let tableName = "Feedback";

async function enterText() {
    console.log(name.value);
    console.log(feedback.value);

    const { count, error } = await _supabase.from(tableName).select('*', { count: 'exact', head: true });
    const { error1 } = await _supabase.from(tableName).insert({ id: count+1, name: feedbackName.value, contents: feedbackText.value});
}
