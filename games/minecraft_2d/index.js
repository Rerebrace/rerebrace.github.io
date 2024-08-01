// Made by Hyqerion199 (github.com/hyqerion199)


let onezero = document.getElementById("001downloads");
let tablename = "Minecraft Download Numbers";
let idone = "download0.01"
let rowname = "downloads"

async function updateDownloads(whichdoc) {
    if (localStorage.getItem("downlaoded") === null) {
        const { data, error } = await _supabase.from(tablename).select()

        let thisvar = document.getElementById(whichdoc);
        if (whichdoc == "001downloads") {
            for (let i = 0; i < 1; i++) {
                if (data[i]['id'] === idone) {
                    console.log(data[i])
                    let newhere = data[i][rowname] + 1
                    const { error1 } = await _supabase.from(tablename).update({ downloads: newhere }).eq('id', idone)
                    thisvar.innerHTML = `Version 0.01 - ${newhere} Downloads`;
                }
            }
            localStorage.setItem("downlaoded", "true");
        }
    }
}

async function firstload() {
    onezero.innerHTML += `Version 0.01 - 0 Downloads`;

    
    const { data, error } = await _supabase.from(tablename).select('')

    for (let i = 0; i < 1; i++) {
        if (data[i]['id'] === idone) {
            console.log(data[i])
            let newhere = data[i][rowname]
            onezero.innerHTML = `Version 0.01 - ${newhere} Downloads`;
        }

    }
}



firstload();
