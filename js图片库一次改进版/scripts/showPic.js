function showPic(whichpic){
    var source = whichpic.getAttribute("href");
        var placeholder = document.getElementById("placeholder");
        placeholder.setAttribute("src",source);
            var text =whichpic.getAttribute("title");
            var description = document.getElementById("description");//获取目标
            description.firstChild.nodeValue = text;
}