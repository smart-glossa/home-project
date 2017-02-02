/**
 * 
 */
function member(){
var mem="";
mem += "<div>";
mem += "<table>";
mem += "	<tr>";
mem += "		<td>Member Id<\/td><td><input type=\"text\" id=\"mid\"><\/input><\/td>";
mem += "	<\/tr>";
mem += "	<tr>";
mem += "		<td>Name<\/td><td><input type=\"text\" id=\"mname\"><\/input><\/td>";
mem += "	<\/tr>";
mem += "	<tr>";
mem += "		<td>Date Of Birth<\/td><td><input type=\"date\" id=\"dob\"><\/input><\/td>";
mem += "    <\/tr>";
mem += "    <tr>";
mem += "    	<td>Mobile Number<\/td><td><input type=\"number\" id=\"mno\"><\/input><\/td>";
mem += "    <\/tr>";
mem += "    <tr>";
mem += "    	<td><\/td>";
mem += "    	<td><button id=\"addSub\">Submit<\/button><button id=\"update\">Update<\/button><\/td>";
mem += "    <\/tr>";
mem += "<\/table>";    
mem += "<\/div>";
mem += "";
$(".member")[0].innerHTML=mem;
}
function income(){
var inco="";
inco += "<div>";
inco += "<table>";
inco += "	<tr>";
inco += "		<td>Member Id<\/td><td><input type=\"text\" id=\"id\"><\/input><\/td>";
inco += "	<\/tr>";
inco += "	<tr>";
inco += "		<td>Date<\/td><td><input type=\"date\" id=\"date\"><\/input><\/td>";
inco += "	<\/tr>";
inco += "	<tr>";
inco += "		<td>Description<\/td><td><input type=\"text\" id=\"desc\"><\/input><\/td>";
inco += "	<\/tr>";
inco += "	<tr>";
inco += "		<td>Amount<\/td><td><input type=\"num\" id=\"amount\"><\/input><\/td>";
inco += "	<\/tr>";
inco += "	<tr>";
inco += "    	<td><\/td>";
inco += "    	<td><button id=\"add\">Submit<\/button><button id=\"updat\">Update<\/button><\/td>";
inco += "    <\/tr>";
inco += "<\/table>";
inco += "<\/div>";
inco += "";
$(".member")[0].innerHTML=inco;
}

function expense(){
	var exp="";
	exp += "<div>";
	exp += "<table>";
	exp += "	<tr>";
	exp += "		<td>Expense Id<\/td><td><input type=\"text\" id=\"exid\"><\/input><\/td>";
	exp += "	<\/tr>";
	exp += "	<tr>";
	exp += "		<td>Date<\/td><td><input type=\"date\" id=\"date\"><\/input><\/td>";
	exp += "	<\/tr>";
	exp += "	<tr>";
	exp += "		<td>Name<\/td><td><input type=\"text\" id=\"name\"><\/input><\/td>";
	exp += "	<\/tr>";
	exp += "	<tr>";
	exp += "		<td>Category Name<\/td><td><input type=\"text\" id=\"catename\"><\/input><\/td>";
	exp += "    <\/tr>";
	exp += "    <tr>";
	exp += "    	<td>Amount<\/td><td><input type=\"number\" id=\"amount\"><\/input><\/td>";
	exp += "    <\/tr>";
	exp += "    <tr>";
	exp += "    	<td>Description<\/td><td><input type=\"text\" id=\"desc\"><\/input><\/td>";
	exp += "    <\/tr>";
	exp += "    <tr>";
	exp += "    	<td><\/td>";
	exp += "    	<td><button id=\"sub\">Submit<\/button><button id=\"upda\">Update<\/button><\/td>";
	exp += "    <\/tr>";
	exp += "<\/table>";    
	exp += "<\/div>";
	exp += "";
	$(".member")[0].innerHTML=exp;
	}

function report(){
	var rep="";
	rep += "<input type=\"number\" id=\"amount\" readonly=\"true\"><\/input>";
	rep += "<img src=\"images\/sub.png\"><\/img>";
	rep += "<input type=\"number\" id=\"expense\" readonly=\"true\"><\/input>";
	rep += "<img src=\"images\/equ.png\">";
	rep += "<input type=\"number\" id=\"report\" readonly=\"true\"><\/input>";
	rep += "";
$(".member")[0].innerHTML=rep;
}