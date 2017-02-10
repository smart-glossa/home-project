/**
 * 
 */
function member(){
var mem="";
mem += "<div>";
mem += "<table>";
mem += "	<tr>";
mem += "		<td>Name<\/td><td><input type=\"text\" id=\"mname\"><\/input><\/td>";
mem += "	<\/tr>";
mem += "	<tr>";
mem += "		<td>Date Of Birth<\/td><td><input type=\"date\" id=\"dob\"><\/input><\/td>";
mem += "    <\/tr>";
mem += "    <tr>";
mem += "    	<td>Mobile Number<\/td><td><input type=\"text\" id=\"mno\"><\/input><\/td>";
mem += "    <\/tr>";
mem += "    <tr>";
mem += "    	<td><\/td>";
mem += "    	<td><button id=\"addSub\">Submit<\/button><\/td>";
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
inco += "		<td>Amount<\/td><td><input type=\"text\" id=\"amount\"><\/input><\/td>";
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
	exp += "		<td>Date<\/td><td><input type=\"date\" id=\"date\"><\/input><\/td>";
	exp += "	<\/tr>";
	exp += "	<tr>";
	exp += "		<td>Member Id<\/td><td><input type=\"text\" id=\"mid\"><\/input><\/td>";
	exp += "	<\/tr>";
	exp += "	<tr>";
	exp += "		<td>Category Name<\/td><td><input type=\"text\" id=\"catename\"><\/input><\/td>";
	exp += "    <\/tr>";
	exp += "    <tr>";
	exp += "    	<td>Description<\/td><td><input type=\"text\" id=\"desc\"><\/input><\/td>";
	exp += "    <\/tr>";
	exp += "    <tr>";
	exp += "    	<td>Amount<\/td><td><input type=\"text\" id=\"amount\"><\/input><\/td>";
	exp += "    <\/tr>";
	exp += "    <tr>";
	exp += "    	<td><\/td>";
	exp += "    	<td><button id=\"sub\">Submit<\/button><\/td>";
	exp += "    <\/tr>";
	exp += "<\/table>";    
	exp += "<\/div>";
	exp += "";
	$(".member")[0].innerHTML=exp;
	}

function report(){
	var rep="";
	rep +="<div>";
	rep +="<table>";
	rep +="<tr>";
	rep +="<td>Monthly report<\/td>";
	rep +="<\/tr>";
	rep +="<tr>";
	rep += "<td><input type=\"text\" id=\"income\" readonly=\"true\"><\/input><\/td>";
	rep += "<td><input type=\"text\" id=\"expense\" readonly=\"true\"><\/input><\/td>";
	rep += "<td><input type=\"text\" id=\"report\" readonly=\"true\"><\/input><\/td>";
	rep +="<\/tr>";
	rep +="<\/table>";
	rep +="<\/div>";
	rep +="";
	$(".member")[0].innerHTML=rep;
}
function dateReport(){
	var repo="";
	repo +="<div>";
	repo +="<table>";
	repo +="<tr>";
	repo +="<td>Date wise report<\/td>";
	repo +="<\/tr>";
	repo +="<tr>";
	repo +="<td><input type=\"date\" id=\"fromdate\"><\/input><\/td>";
	repo +="<td><input type=\"date\" id=\"todate\"><\/input><\/td>";
	repo +="<td><button id=\"cal\">cal<\/button><\/td>";
	repo +="<\/tr>";
	repo +="<\/table>";
	repo +="<\/div>";
    repo += "";
    $(".member")[0].innerHTML=repo;
}