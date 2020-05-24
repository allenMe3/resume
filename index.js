var script=document.createElement("script"); 
script.type="text/javascript"; 
script.src="jquery.js"; 
function qq() {
    alert("本人手机：18278454149  QQ：756440239")
}
$(document).ready(function(){
    $(".enter").hide()
})
$(document).ready(function(){
    $(".center").click(function(){
        $(".center").hide();
        $("body").css("background-image","none");
        $(".enter").show();
        $(".dian").addClass("dianj")
    })
});