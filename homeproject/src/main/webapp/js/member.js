$(document).ready(function(){
	$(document).on("click","#addSub",function(){
		var mid=$("#mid").val();
		var mname=$("#mname").val();
		var dob=$("#dob").val();
		var mno=$("#mno").val();
		if(mid==""){
			$("#mid").focus().css("outline-color","red");
			return;
		}      
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
		var url="/homeproject/Home?operation=addMember&mid="+mid+"&mname="+mname+"&dob="+dob+"&mno="+mno;
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			alert("Successfully Added");
		}).fail(function(result){
			alert("Please Check Deatils");
		})
	});
	$(document).on("click","#update",function(){
		var mid=$("#mid").val();
		var mname=$("#mname").val();
		var dob=$("#dob").val();
		var mno=$("#mno").val();
		if(mid==""){
			$("#mid").focus().css("outline-color","red");
			return;
		}
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
		var url="/homeproject/Home?operation=updateMember&mid="+mid+"&mname="+mname+"&dob="+dob+"&mno="+mno;
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			alert("Update Successfully");
		}).fail(function(result){
			alert("Error accurs");
		})
	
	});
	
	$(document).on("keyup","#mid",function(){
		var mid=$("#mid").val();
		if(mid !=""){
			var url="/homeproject/Home?operation=getOne&id="+mid;
			$.ajax({
				url:url,
				type:'POST'
			}).done(function(result){
				result=JSON.parse(result);
				$("#mname").val(result.name);
				$("#dob").val(result.dob);
				$("#mno").val(result.mobilenumber);
			})
		}
	});
	
	$(document).on("click","#getAll",function(){
		var url = "/homeproject/Home?operation=getAll";
		$.ajax({
			url : url,
			type : 'POST'
		})
		.done(function(result) {
			var array = JSON.parse(result);
			var table = "<table border=2px>";
			table += "<tr><th>MemberId</th><th>Name</th><th>DateOfBirth</th><th>MObileNumber</th></tr>";
			for (i = 0; i < array.length; i++) {
			table += "<tr>";
			table += "<td>"+ array[i].memberid+ "</td>";
			table += "<td>"+ array[i].name+ "</td>";
			table += "<td>"+ array[i].dob+ "</td>";
			table += "<td>"+ array[i].mobilenumber+ "</td>";
			table += "</tr>";
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
	
	$(document).on("keyup","#id",function(){
		var id=$("#id").val();
		if(id !=""){
			var url="/homeproject/Home?operation=oneIncome&id="+id;
			$.ajax({
				url:url,
				type:'POST'
			}).done(function(result){
				result=JSON.parse(result);
				$("#date").val(result.date);
				$("#desc").val(result.description);
				$("#amount").val(result.amount);
			})
		}
	});
	
	$(document).on("click","#allIncome",function(){
		var url = "/homeproject/Home?operation=allIncome";
		$.ajax({
			url : url,
			type : 'POST'
		})
		.done(function(result) {
			var array = JSON.parse(result);
			var table = "<table border=2px>";
			table += "<tr><th>MemberId</th><th>Date</th><th>Description</th><th>Amount</th></tr>";
			for (i = 0; i < array.length; i++) {
			table += "<tr>";
			table += "<td>"+ array[i].memberid+ "</td>";
			table += "<td>"+ array[i].date+ "</td>";
			table += "<td>"+ array[i].description+ "</td>";
			table += "<td>"+ array[i].amount+ "</td>";
			table += "</tr>";
          }
			table += "</table>";
			$('.member')[0].innerHTML = table;
		});
	})
	
	$(document).on("click","#sub",function(){
		var exid=$("#exid").val();
		var date=$("#date").val();
		var name=$("#name").val();
		var catename=$("#catename").val();
		var amount=$("#amount").val();
		var desc=$("#desc").val();
		if(exid==""){
			$("#exid").focus().css("outline-color","red");
			return;
		}      
		if(date==""){
				$("#date").focus().css("outline-color","red");
		}
		if(name==""){
			$("#name").focus().css("outline-color","red");
			return;
		}
		if(catename==""){
			$("#catename").focus().css("outline-color","red");
			return;
		}
		if(amount==""){
			$("#amount").focus().css("outline-color","red");
			return;
		}
	    if(desc==""){
	       $("#desc").focus().css("outline-color","red");
	       return;
        }
		var url="/homeproject/Home?operation=addExpense&exid="+exid+"&date="+date+"&name="+name+"&catename="+catename+"&amount="+amount+"&desc="+desc;
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			alert("Successfully Added");
		}).fail(function(result){
			alert("Please Check Deatils");
		})
	});
	
	$(document).on("click","#upda",function(){
		var exid=$("#exid").val();
		var date=$("#date").val();
		var name=$("#name").val();
		var catename=$("#catename").val();
		var amount=$("#amount").val();
		var desc=$("#desc").val();
		if(exid==""){
			$("#exid").focus().css("outline-color","red");
			return;
		}
		if(date==""){
			$("#date").focus().css("outline-color","red");
		}
		if(name==""){
			$("#name").focus().css("outline-color","red");
			return;
		}
		if(catename==""){
			$("#catename").focus().css("outline-color","red");
			return;
		}
		if(amount==""){
			$("#amount").focus().css("outline-color","red");
			return;
		}
		if(desc==""){
			$("#desc").focus().css("outline-color","red");
			return;
		}
		var url="/homeproject/Home?operation=updateExpense&exid="+exid+"&date="+date+"&name="+name+"&catename="+catename+"&amount="+amount+"&desc="+desc;
		$.ajax({
			url:url,
			type:'POST'
		}).done(function(result){
			alert("Update Successfully");
		}).fail(function(result){
			alert("Error accurs");
		})
	    
	});
	
	$(document).on("keyup","#exid",function(){
		var exid=$("#exid").val();
		if(exid !=""){
			var url="/homeproject/Home?operation=expenseOne&exid="+exid;
			$.ajax({
				url:url,
				type:'POST'
			}).done(function(result){
				result=JSON.parse(result);
				$("#date").val(result.date);
				$("#name").val(result.name);
				$("#catename").val(result.categoryname);
				$("#amount").val(result.amount);
				$("#desc").val(result.description);
			})
		}
	});
	
	$(document).on("click","#allExpense",function(){
		var url = "/homeproject/Home?operation=expenseAll";
		$.ajax({
			url : url,
			type : 'POST'
		})
		.done(function(result) {
			var array = JSON.parse(result);
			var table = "<table border=2px>";
			table += "<tr><th>ExpenseId</th><th>Date</th><th>Name</th><th>CategoryName</th><th>Amount</th><th>Description</th></tr>";
			for (i = 0; i < array.length; i++) {
			table += "<tr>";
			table += "<td>"+ array[i].exid+ "</td>";
			table += "<td>"+ array[i].date+ "</td>";
			table += "<td>"+ array[i].name+ "</td>";
			table += "<td>"+ array[i].categoryname+ "</td>";
			table += "<td>"+ array[i].amount+ "</td>";
			table += "<td>"+ array[i].description+ "</td>";
			table += "</tr>";
          }
			table += "</table>";
			$('.member')[0].innerHTML = table;
		});
	})
	
	
	
	
	
	
	 
	
	
	
	
	
	
})