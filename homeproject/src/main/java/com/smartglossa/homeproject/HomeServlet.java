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

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String operation = request.getParameter("operation");
		if (operation.equals("addMember")) {
			String mname = request.getParameter("mname");
			String dob = request.getParameter("dob");
			String mno = request.getParameter("mno");
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				home.addMember(mname, dob, mno);
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
		} else if (operation.equals("deleteMember")) {
			int mid = Integer.parseInt(request.getParameter("id"));
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				home.deleteMember(mid);
				result.put("status", 1);

			} catch (Exception e) {
				result.put("status", 0);
				e.printStackTrace();

			}

			response.getWriter().print(result);
		} else if (operation.equals("getOne")) {
			int mid = Integer.parseInt(request.getParameter("id"));
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				result = home.getOne(mid);

			} catch (Exception e) {
				e.printStackTrace();

			}
			response.getWriter().print(result);
		}

		else if (operation.equals("getAll")) {
			JSONArray result = new JSONArray();
			try {
				HomeClass home = new HomeClass();
				result = home.getAll();
			} catch (Exception e) {
				e.printStackTrace();

			}
			response.getWriter().print(result);
		} else if (operation.equals("addIncome")) {
			int mid = Integer.parseInt(request.getParameter("id"));
			String date = request.getParameter("date");
			String desc = request.getParameter("desc");
			float amount = Float.parseFloat(request.getParameter("amount"));
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				home.addIncome(mid, date, desc, amount);
				result.put("status", 1);

			} catch (Exception e) {
				result.put("status", 0);
				e.printStackTrace();

			}
			response.getWriter().print(result);
		} else if (operation.equals("updateIncome")) {
			int mid = Integer.parseInt(request.getParameter("id"));
			String date = request.getParameter("date");
			String desc = request.getParameter("desc");
			float amount = Float.parseFloat(request.getParameter("amount"));
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				home.updateIncome(mid, date, desc, amount);
				result.put("status", 1);
			} catch (Exception e) {
				result.put("status", 0);
				e.printStackTrace();

			}
			response.getWriter().print(result);
		}

		else if (operation.equals("deleteIncome")) {
			int mid = Integer.parseInt(request.getParameter("id"));
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				home.deleteIncome(mid);
				result.put("status", 1);

			} catch (Exception e) {
				result.put("status", 0);
				e.printStackTrace();

			}
			response.getWriter().print(result);

		}

		else if (operation.equals("oneIncome")) {
			int mid = Integer.parseInt(request.getParameter("id"));
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				result = home.oneIncome(mid);

			} catch (Exception e) {
				e.printStackTrace();

			}
			response.getWriter().print(result);
		} else if (operation.equals("allIncome")) {
			JSONArray result = new JSONArray();
			try {
				HomeClass home = new HomeClass();
				result = home.allIncome();

			} catch (Exception e) {

			}
			response.getWriter().println(result);
		} else if (operation.equals("addExpense")) {
			String date = request.getParameter("date");
			int mid = Integer.parseInt(request.getParameter("mid"));
			String catename = request.getParameter("catename");
			String desc = request.getParameter("desc");
			float amount = Float.parseFloat(request.getParameter("amount"));
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				home.addExpense(date, mid, catename, desc, amount);
				result.put("status", 1);
			} catch (Exception e) {
				result.put("status", 0);
				e.printStackTrace();
			}
			response.getWriter().println(result);
		} else if (operation.equals("updateExpense")) {
			int exid = Integer.parseInt(request.getParameter("exid"));
			String date = request.getParameter("date");
			int mid = Integer.parseInt(request.getParameter("mid"));
			String catename = request.getParameter("catename");
			String desc = request.getParameter("desc");
			float amount = Float.parseFloat(request.getParameter("amount"));
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				home.updateExpense(exid, date, mid, catename, amount, desc);
				result.put("status", 1);
			} catch (Exception e) {
				result.put("status", 0);
				e.printStackTrace();

			}
			response.getWriter().println(result);
		} else if (operation.equals("deleteExpense")) {
			int exid = Integer.parseInt(request.getParameter("exid"));
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				home.deleteExpense(exid);
				result.put("status", 1);

			} catch (Exception e) {
				result.put("status", 0);

			}
			response.getWriter().print(result);
		} else if (operation.equals("expenseOne")) {
			int exid = Integer.parseInt(request.getParameter("exid"));
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				result = home.expenseOne(exid);

			} catch (Exception e) {
				result.put("status", 0);

			}
			response.getWriter().print(result);
		} else if (operation.equals("allExpense")) {
			JSONArray result = new JSONArray();
			try {
				HomeClass home = new HomeClass();
				result = home.allExpense();

			} catch (Exception e) {

			}
			response.getWriter().println(result);

		} else if (operation.equals("report")) {
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				result = home.report();

			} catch (Exception e) {
				e.printStackTrace();
			}
			response.getWriter().print(result);
		} else if (operation.equals("dateReport")) {
			String fromdate = request.getParameter("fromdate");
			String todate = request.getParameter("todate");
			JSONObject result = new JSONObject();
			try {
				HomeClass home = new HomeClass();
				result=home.dateReport(fromdate, todate);

			} catch (Exception e) {
				e.printStackTrace();

			}
			response.getWriter().print(result);
		}

	}

}
