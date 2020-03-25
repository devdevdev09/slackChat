$(function(){
    init();
});

const init = function(){
    eventInit();
}

const eventInit = function(){
    $("#fileReadBtn").on("click", openTextFile);
}

const openTextFile = function(){
    const input = document.createElement("input");

    input.type = "file";
    input.accept = "text/plain";

    input.onchange = function(e){
        processFile(e.target.files[0]);
    }

    input.click();
}

const processFile = function(file){
    const reader = new FileReader();

    reader.onload = function(){
        output.innerText = reader.result;
    };

    reader.readAsText(file, "utf-8");
}
