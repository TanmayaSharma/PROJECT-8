
var guest=[];
function Submit()
{
    var name=document.getElementById("ABCD").value;
    guest.push(name);
    document.getElementById("H4").innerHTML=guest;

}
function hahah()
{
    var Easter=guest.join("<br>");
    document.getElementById("H100").innerHTML=Easter;
}