package com.smartglossa.homeproject;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;



public class HomeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String operation = request.getParameter("operation");
		if (operation.equals("addMember")) {
			int mid = Integer.parseInt(request.getParameter("mid"));
			String mname = request.getParameter("mname");
			String dob = request.getParameter("dob");
			String mno = request.getParameter("mno");
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				home.addMember(mid, mname, dob, mno);
				result.put("status", 1);

			} catch (Exception e) {
				result.put("status", 0);
				e.printStackTrace();

			}
			response.getWriter().print(result);

		} else if (operation.equals("updateMember")) {
			int mid = Integer.parseInt(request.getParameter("mid"));
			String mname = request.getParameter("mname");
			String dob = request.getParameter("dob");
			String mno = request.getParameter("mno");
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				home.updateMember(mid, mname, dob, mno);
				result.put("status", 1);
			} catch (Exception e) {
				result.put("status", 0);
				e.printStackTrace();

			}
			response.getWriter().print(result);
		}
		else if(operation.equals("deleteMember")){
			int mid=Integer.parseInt(request.getParameter("id"));
			JSONObject result=new JSONObject();
			try {
				HomeClass home=new HomeClass();
				home.deleteMember(mid);
				result.put("status",1);
				
			} catch (Exception e) {
				result.put("status",0);
				e.printStackTrace();

			}
			
			response.getWriter().print(result);
		}
		else if(operation.equals("getOne")){
			int mid=Integer.parseInt(request.getParameter("id"));
			JSONObject result=new JSONObject();
			try {
				HomeClass home=new HomeClass();
				result=home.getOne(mid);
				
			} catch (Exception e) {
				e.printStackTrace();

			}
			response.getWriter().print(result);
		}
		
		else if(operation.equals("getAll")){
			JSONArray result=new JSONArray();
			try {
				HomeClass home=new HomeClass();
				result=home.getAll();
			} catch (Exception e) {
			   e.printStackTrace();

			}
			response.getWriter().print(result);
		}
		else if(operation.equals("addSalary")){
			int mid=Integer.parseInt(request.getParameter("id"));
			String salary=request.getParameter("salary");
			JSONObject result=new JSONObject();
			try {
				HomeClass home=new HomeClass();
				home.addSalary(mid, salary);
				result.put("status",1);
				
				
			} catch (Exception e) {
				result.put("status",0);
				e.printStackTrace();

			}
			response.getWriter().print(result);
		}
		else if(operation.equals("updateSalary")){
			int mid=Integer.parseInt(request.getParameter("id"));
			String salary=request.getParameter("salary");
			JSONObject result=new JSONObject();
			try {
				HomeClass home=new HomeClass();
				home.addSalary(mid, salary);
				result.put("status",1);
				
			} catch (Exception e) {
				result.put("status",0);
				e.printStackTrace();

			}
			response.getWriter().print(result);
		}
		
		else if(operation.equals("deleteSalary")){
			int mid=Integer.parseInt(request.getParameter("id"));
			JSONObject result=new JSONObject();
			try {
				HomeClass home=new HomeClass();
				home.deleteSalary(mid);
				result.put("status",1);
				
			} catch (Exception e) {
				result.put("status",0);
				e.printStackTrace();

			}
			response.getWriter().print(result);
			
		}
		
		else if(operation.equals("oneSalary")){
			int mid=Integer.parseInt(request.getParameter("id"));
			JSONObject result=new JSONObject();
			try {
				HomeClass home=new HomeClass();
				result=home.oneSalary(mid);
				
			} catch (Exception e) {
				e.printStackTrace();

			}
			response.getWriter().print(result);
		}
		else if(operation.equals("allSalary")){
		    JSONArray result=new JSONArray();
		    try {
		    	HomeClass home=new HomeClass();
		    	result=home.allSalary();
				
			} catch (Exception e) {
				e.printStackTrace();
			}
		    response.getWriter().print(result);
		}
		else if(operation.equals("addExpense")){
			int exid=Integer.parseInt(request.getParameter("exid"));
			String name=request.getParameter("name");
			String catename=request.getParameter("catename");
			String amount=request.getParameter("amount");
			String desc=request.getParameter("desc");
			JSONObject result=new JSONObject();
			try {
				HomeClass home=new HomeClass();
				home.addExpense(exid, name, catename, amount, desc);
		        result.put("status", 1);		
			} catch (Exception e) {
              result.put("status", 0);
              e.printStackTrace();
			}
			response.getWriter().println(result);
		}
		else if(operation.equals("updateExpense")){
			int exid=Integer.parseInt(request.getParameter("exid"));
			String name=request.getParameter("name");
			String catename=request.getParameter("catename");
			String amount=request.getParameter("amount");
			String desc=request.getParameter("desc");
			JSONObject result=new JSONObject();
			try {
				HomeClass home=new HomeClass();
				home.updateExpense(exid, name, catename, amount, desc);
				result.put("status",1);
			} catch (Exception e) {
				result.put("status",0);
				e.printStackTrace();

			}
			response.getWriter().println(result);
		}
		else if(operation.equals("deleteExpense")){
			int exid=Integer.parseInt(request.getParameter("exid"));
			JSONObject result=new JSONObject();
			try {
				HomeClass home=new HomeClass();
				home.deleteExpense(exid);
				result.put("status",1);
				
			} catch (Exception e) {
				result.put("status",0);
 
			}
			response.getWriter().print(result);
		}
		else if(operation.equals("expenseOne")){
			int exid=Integer.parseInt(request.getParameter("exid"));
			JSONObject result=new JSONObject();
			try {
				HomeClass home=new HomeClass();
				result=home.expenseOne(exid);
				
				
			} catch (Exception e) {
				result.put("status",0);

			}
			response.getWriter().print(result);
		}
		else if(operation.equals("expenseAll")){
			JSONArray result=new JSONArray();
			try {
				HomeClass home=new HomeClass();
				result=home.expenseAll();
				
				
			} catch (Exception e) {
			

			}
			response.getWriter().print(result);
			
		}
		
	}     


		
	}


