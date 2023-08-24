let oneone = document.getElementById("11downloads");
let onetwo = document.getElementById("12downloads");
let onethree = document.getElementById("13downloads");
let twozero = document.getElementById('20downloads');
let tablename = "Download Numbers";
let idone = "download1.1"
let idtwo = "download1.2"
let idthree = "download1.3"
let rowname = "downloads"

async function updateDownloads(whichdoc) {

    const { data, error } = await _supabase.from(tablename).select()

    let thisvar = document.getElementById(whichdoc);
    if (whichdoc == "11downloads") {
        for (let i = 0; i < 3; i++) {
            if (data[i]['id'] === idone) {
                console.log(data[i])
                let newhere = data[i][rowname] +1
                const { error1 } = await _supabase.from(tablename).update({ downloads: newhere }).eq('id', idone)
                thisvar.innerHTML = `Version 1.1 - ${newhere} Downloads`;
            }
        }
    }
}

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("preview").innerHTML = x;
}

async function firstload() {
    twozero.innerHTML = 'Version 2.0';// - 0 Downloads';
    onetwo.innerHTML += `Version 1.2 - 0 Downloads`;
    oneone.innerHTML += `Version 1.1 - 0 Downloads`;
    onethree.innerHTML += `Version 1.3 - 0 Downloads`;

    const { data, error } = await _supabase.from(tablename).select('')
    for (let i = 0; i < 3; i++) {
        if (data[i]['id'] === idone) {
            console.log(data[i])
            let newhere = data[i][rowname]
            oneone.innerHTML = `Version 1.1 - ${newhere} Downloads`;
        }
        if (data[i]['id'] === idtwo) {
            console.log(data[i])
            let newhere = data[i][rowname]
            onetwo.innerHTML = `Version 1.2 - ${newhere} Downloads`;
        }
        if (data[i]['id'] === idthree) {
            console.log(data[i])
            let newhere = data[i][rowname]
            onethree.innerHTML = `Version 1.3 - ${newhere} Downloads`;
        }
    }
}



firstload();
