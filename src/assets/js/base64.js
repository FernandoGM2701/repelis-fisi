var base64Simple;

function getBase64Simple(){
    return base64Simple;
}

function convertToBase64Simple(variable) {
    var selectedFile = document.getElementById(variable).files;
    if (selectedFile.length > 0) {
        var fileToLoad  = selectedFile[0];

        var fileReader = new FileReader();
        var base64;
        fileReader.onload = function (fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result;
            base64Simple = base64;
        };

        fileReader.readAsDataURL(fileToLoad);
    }
}