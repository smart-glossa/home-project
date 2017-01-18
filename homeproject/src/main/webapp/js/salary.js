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
function salary(){
var sal="";
sal += "<div>";
sal += "<table>";
sal += "	<tr>";
sal += "		<td>Member Id<\/td><td><input type=\"text\" id=\"id\"><\/input><\/td>";
sal += "	<\/tr>";
sal += "	<tr>";
sal += "		<td>Salary<\/td><td><input type=\"text\" id=\"sal\"><\/input><\/td>";
sal += "	<\/tr>";
sal += "	<tr>";
sal += "    	<td><\/td>";
sal += "    	<td><button id=\"add\">Submit<\/button><button id=\"updat\">Update<\/button><\/td>";
sal += "    <\/tr>";
sal += "<\/table>";
sal += "<\/div>";
sal += "";
$(".sal")[0].innerHTML=sal;
}

function expense(){
	var exp="";
	exp += "<div>";
	exp += "<table>";
	exp += "	<tr>";
	exp += "		<td>Expense Id<\/td><td><input type=\"text\" id=\"exid\"><\/input><\/td>";
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
	exp += "    	<td>Description<\/td><td><input type=\"number\" id=\"desc\"><\/input><\/td>";
	exp += "    <\/tr>";
	exp += "    <tr>";
	exp += "    	<td><\/td>";
	exp += "    	<td><button id=\"sub\">Submit<\/button><button id=\"updat\">Update<\/button><\/td>";
	exp += "    <\/tr>";
	exp += "<\/table>";    
	exp += "<\/div>";
	exp += "";
	$(".expense")[0].innerHTML=exp;
	}

