function answerLoader(element, id) {
    var httpRequest;

    const elementToPut = element;

    makeRequest();

    function makeRequest(){
        httpRequest = new XMLHttpRequest();

        if(!httpRequest){
            alert("ERROR: Cannot create XMLHTTP instance.");
            return false;
        }

        httpRequest.onreadystatechange = loadQuestion;

        httpRequest.open('GET', 'content/questions/text_' + id + '.txt');
        httpRequest.send();
    }

    function loadQuestion(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                elementToPut.innerHTML = httpRequest.responseText;
            }else{
                alert("There was a problem with loading question.");
            }
        }
    }

};

export default answerLoader;