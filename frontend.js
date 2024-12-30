function SplitAndCount() {
    let x = document.getElementById('myText').value;
    if(x==""){
        return 0;
    }

    console.log(String(x));
    splited_words = String(x).split(" ");
    keys_map = {};
    for (let i = 0; i < splited_words.length; i++) {
        let word = keys_map[splited_words[i]];
        let count = word ? word : 0;
        keys_map[splited_words[i]] = count + 1;
    }
    
    let sortedObject = Object.fromEntries(
        Object.entries(keys_map).sort(([, a], [, b]) => b - a)
    );
    console.log(sortedObject)
    while(document.getElementById('view').lastElementChild) {
        document.getElementById('view').removeChild(document.getElementById('view').lastChild);
    }
    res = document.createElement("div");
    res.innerHTML = "<br> words count<br>" + JSON.stringify(keys_map);
    res.setAttribute("id", "child");
    document.getElementById('view').appendChild(res);

    code = document.createElement("code");
    code.innerHTML = `
    <br>
    let x = document.getElementById('myText').value;<br>
    console.log(String(x));<br>
    splited_words = String(x).split(" ");<br>
    keys_map = {};<br>
    for (let i = 0; i < splited_words.length; i++) {<br>
        let word = keys_map[splited_words[i]];<br>
        let count = word ? word : 0;<br>
        keys_map[splited_words[i]] = count + 1;}
    <br>
    JSON.stringify(keys_map);
    `;
    code.setAttribute("id", "code");
    document.getElementById('view').appendChild(code);
}
