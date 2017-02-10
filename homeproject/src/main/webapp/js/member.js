$(document).ready(function(){
	$(document).on("click","#addSub",function(){
		var mname=$("#mname").val();
		var dob=$("#dob").val();
		var mno=$("#mno").val();
		if(mname==""){
			$("#mname").focus().css("outline-color","red");
			return;
		}
		if(dob==""){
			$("#dob").focus().css("outline-color","red");
			return;
		}
		if(mno==""){
			$("#mno").focus().css("outline-color","red");
			return;
		}
		var url="/homeproject/Home?operation=addMember&mname="+mname+"&dob="+dob+"&mno="+mno;
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			alert("Successfully Added");
		}).fail(function(result){
			alert("Please Check Deatils");
		})
	});
	$(document).on("click","#getAll",function(){
		var url = "/homeproject/Home?operation=getAll";
		$.ajax({
			url : url,
			type : 'POST'
		})
		.done(function(result) {
			var array = JSON.parse(result);
			var table = "<table class='memTab'>";
			table += "<tr><th>SNo</th><th>Name</th><th>DateOfBirth</th><th>MObileNumber</th></tr>";
			for (i = 0; i < array.length; i++) {
				var a=1;
				
            table += "<tr class='row'>";
			table += "<td class='data'>"+ a + "</td>";
			table += "<td class='data'>"+ array[i].name+ "</td>";
			table += "<td class='data'>"+ array[i].dob+ "</td>";
			table += "<td class='data'>"+ array[i].mobilenumber+ "</td>";
			
			table += "</tr>";
			a++;
          }
			table += "</table>";
			$('.member')[0].innerHTML = table;
		});
	})
	
	$(document).on("click","#add",function(){
		var id=$("#id").val();
		var date=$("#date").val();
		var desc=$("#desc").val();
		var amount=$("#amount").val();
		if(id==""){
			$("#id").focus().css("outline-color","red");
			return;
		}
		if(date==""){
			$("#date").focus().css("outline-color","red");
			return;
		}
		if(desc==""){
			$("#desc").focus().css("outline-color","red");
			return;
		}
		if(amount==""){
			$("#amount").focus().css("outline-color","red");
			return;
		}
		var url="/homeproject/Home?operation=addIncome&id="+id+"&date="+date+"&desc="+desc+"&amount="+amount;
		
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			alert("Successfully Added");
			
		}).fail(function(result){
			alert("Error Accours");
		})
	});
	
	$(document).on("click","#updat",function(){
		var id=$("#id").val();
		var date=$("#date").val();
		var desc=$("#desc").val();
		var amount=$("#amount").val();
		if(id==""){
			$("#id").focus().css("outline-color","red");
			return;
		}
		if(date==""){
			$("#date").focus().css("outline-color","red");
			return;
		}
		if(desc==""){
			$("#desc").focus().css("outline-color","red");
			return;
		}
		if(amount==""){
			$("#amount").focus().css("outline-color","red");
			return;
		}
		var url="/homeproject/Home?operation=updateIncome&id="+id+"&date="+date+"&desc="+desc+"&amount="+amount;
		
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			alert("Update Successfully");
			
		}).fail(function(result){
			alert("Error Accours");
		})
	});
	
	$(document).on("click","#allIncome",function(){
		var url = "/homeproject/Home?operation=allIncome";
		$.ajax({
			url : url,
			type : 'POST'
		})
		.done(function(result) {
			var array = JSON.parse(result);
			var table = "<table class='memTab'>";
			table += "<tr><th>SNo<th>Name</th><th>Date</th><th>Description</th><th>Amount</th></tr>";
			for (i = 0; i < array.length; i++) {
				var a=0;
				a++;
			table += "<tr class='row'>";
			table += "<td class='data'>"+ a + "</td>";
			table += "<td class='data'>"+ array[i].name+ "</td>";
			table += "<td class='data'>"+ array[i].date+ "</td>";
			table += "<td class='data'>"+ array[i].description+ "</td>";
			table += "<td class='data'>"+ array[i].amount+ "</td>";
			table += "</tr>";
          }
			table += "</table>";
			$('.member')[0].innerHTML = table;
		});
	})
	
	$(document).on("click","#sub",function(){
		var date=$("#date").val();
		var mid=$("#mid").val();
		var catename=$("#catename").val();
		var amount=$("#amount").val();
		var desc=$("#desc").val();
		if(date==""){
				$("#date").focus().css("outline-color","red");
		}
		if(mid==""){
			$("#mid").focus().css("outline-color","red");
			return;
		}
		if(catename==""){
			$("#catename").focus().css("outline-color","red");
			return;
		}
		if(desc==""){
			$("#desc").focus().css("outline-color","red");
			return;
		}
	    if(amount==""){
	       $("#amount").focus().css("outline-color","red");
	       return;
        }
		var url="/homeproject/Home?operation=addExpense&date="+date+"&mid="+mid+"&catename="+catename+"&desc="+desc+"&amount="+amount;
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			alert("Successfully Added");
		}).fail(function(result){
			alert("Please Check Deatils");
		})
	});
	$(document).on("click","#allExpense",function(){
		var url = "/homeproject/Home?operation=allExpense";
		$.ajax({
			url : url,
			type : 'POST'
		})
		.done(function(result) {
			var array = JSON.parse(result);
			var table = "<table class='memTab'>";
			table += "<tr><th>Sno</th><th>Date</th><th>Name</th><th>CategoryName</th><th>Description</th><th>Amount</th></tr>";
			for (i = 0; i < array.length; i++) {
				var a=0;
				a++;
		    table += "<tr class='row'>";
		    table += "<td class='data'>"+a+ "</td>";
			table += "<td class='data'>"+ array[i].date+ "</td>";
			table += "<td class='data'>"+ array[i].name+ "</td>";
			table += "<td class='data'>"+ array[i].categoryname+ "</td>";
			table += "<td class='data'>"+ array[i].description+ "</td>";
			table += "<td class='data'>"+ array[i].amount+ "</td>";
			table += "</tr>";
          }
			table += "</table>";
			$('.member')[0].innerHTML = table;
		});
	})
	$(document).on("click","#rep",function(){
		var url="/homeproject/Home?operation=report";
		$.ajax({
			url:url,
			type:'POST'
		})
		.done(function(result){
			var array=JSON.parse(result);
			var income=array.amount;
			var expense=array.expense;
		    var balance=income-expense;
		    $("#income").val(income);
		    $("#expense").val(expense);
		    $("#report").val(balance);
			
		})
	})
	$(document).on("click","#cal",function(){
		var fromdate=$("#fromdate").val();
		var todate=$("#todate").val();
		var url="/homeproject/Home?operation=dateReport&fromdate="+fromdate+"&todate="+todate;
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			var array=JSON.parse(result);
			var table="<table class='memTab'>"
				table +="<tr><th>Income</th><th>Expense</th><th>Balance</th>"
			
				var amount=array.amount;
				var date=array.date;
				var bal=amount-date;	
			table +="<tr class='row'>";
			table +="<td class='data'>" + amount+ "</td>";
			table +="<td class='data'>" + date + "</td>";
			table +="<td class='data'>" + bal + "</td>";
			table +="</tr>";
			
			table +="</table>";
			$(".repo")[0].innerHTML = table;
		});
		
	});
	
});