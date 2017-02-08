package com.smartglossa.homeproject;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONObject;

public final class HomeClass {
	Connection con = null;
	Statement stat = null;
	ResultSet rs = null;

	public HomeClass() throws ClassNotFoundException, SQLException {
		openConnection();

	}

	public void addMember(String mname, String dob, String mno) throws SQLException {
		try {
			String query = "insert into member(name,dob,mobilenumber) values('" + mname + "','" + dob + "','" + mno
					+ "')";
			stat.execute(query);
		} finally {
			closeConnection();
		}
	}

	public void updateMember(int mid, String mname, String dob, String mno) throws SQLException {
		try {
			String query = "update member set name='" + mname + "',dob='" + dob + "',mobilenumber='" + mno
					+ "'where memberid=" + mid;
			stat.execute(query);

		} finally {
			closeConnection();

		}
	}

	public void deleteMember(int mid) throws SQLException {
		try {
			String query = "delete from member where memberid=" + mid;
			stat.execute(query);

		} finally {
			closeConnection();

		}

	}

	public JSONObject getOne(int mid) throws SQLException {
		JSONObject result = new JSONObject();
		try {
			String query = "select * from member where memberid=" + mid;
			rs = stat.executeQuery(query);
			if (rs.next()) {
				result.put("memberid", rs.getString("memberid"));
				result.put("name", rs.getString("name"));
				result.put("dob", rs.getString("dob"));
				result.put("mobilenumber", rs.getString("mobilenumber"));

			}

		} finally {
			closeConnection();

		}
		return result;

	}

	public JSONArray getAll() throws SQLException {
		JSONArray result = new JSONArray();
		try {
			String query = "select * from member";
			rs = stat.executeQuery(query);
			while (rs.next()) {
				JSONObject obj = new JSONObject();
				obj.put("memberid", rs.getString("memberid"));
				obj.put("name", rs.getString("name"));
				obj.put("dob", rs.getString("dob"));
				obj.put("mobilenumber", rs.getString("mobilenumber"));
				result.put(obj);

			}

		} finally {
			closeConnection();

		}
		return result;

	}

	public void addIncome(int mid, String date, String desc, float amount) throws SQLException {
		try {
			String query = "insert into income(memberid,date,description,amount)values(" + mid + ",'" + date + "','"
					+ desc + "','" + amount + "')";
			stat.execute(query);

		} finally {
			closeConnection();

		}

	}

	public void updateIncome(int mid, String date, String desc, float amount) throws SQLException {
		try {
			String query = "update income set date=" + date + ",description=" + desc + ",amount=" + amount
					+ " where memberid=" + mid;
			stat.execute(query);

		} finally {
			closeConnection();

		}

	}

	public void deleteIncome(int mid) throws SQLException {
		try {
			String query = "delete from income where memberid=" + mid;
			stat.execute(query);

		} finally {
			closeConnection();

		}

	}

	public JSONObject oneIncome(int mid) throws SQLException {
		JSONObject result = new JSONObject();
		try {
			String query = "select * from income where memberid=" + mid;
			rs = stat.executeQuery(query);
			if (rs.next()) {
				result.put("memberid", rs.getString("memberid"));
				result.put("date", rs.getString("date"));
				result.put("description", rs.getString("description"));
				result.put("amount", rs.getFloat("amount"));

			}

		} finally {
			closeConnection();

		}
		return result;

	}

	public JSONArray allIncome() throws SQLException {
		JSONArray result = new JSONArray();
		try {
			String query = "select * from income";
			rs = stat.executeQuery(query);
			while (rs.next()) {
				JSONObject obj = new JSONObject();
				obj.put("date", rs.getString("date"));
				obj.put("description", rs.getString("description"));
				obj.put("amount", rs.getFloat("amount"));
				int mid = rs.getInt("memberid");
				String queryy = "select name from member where memberid=" + mid;
				rs = stat.executeQuery(queryy);
				while (rs.next()) {
					obj.put("name", rs.getString("name"));
					result.put(obj);
				}
			}

		} finally {
			closeConnection();

		}
		return result;

	}

	public void addExpense(String date, int mid, String catename, String desc, float amount) throws SQLException {
		try {
			String query = "insert into expense(date,memberid,categoryname,description,amount)values('" + date + "',"
					+ mid + ",'" + catename + "','" + desc + "','" + amount + "')";
			stat.execute(query);
		} finally {
			closeConnection();

		}

	}

	public void updateExpense(int exid, String date, int mid, String catename, float amount, String desc)
			throws SQLException {
		try {
			String query = "update expense set date='" + date + "',memberid='" + mid + "',categoryname='" + catename
					+ "',description='" + desc + "',amount='" + amount + "' where exid=" + exid;
			stat.execute(query);

		} finally {
			closeConnection();

		}

	}

	public void deleteExpense(int exid) throws SQLException {
		try {
			String query = "delete from expense where exid=" + exid;
			stat.execute(query);

		} finally {
			closeConnection();

		}

	}

	public JSONObject expenseOne(int exid) throws SQLException {
		JSONObject result = new JSONObject();
		try {
			String query = "select * from expense where exid=" + exid;
			rs = stat.executeQuery(query);
			if (rs.next()) {
				result.put("date", rs.getString("date"));
				result.put("mid", rs.getInt("mid"));
				result.put("categoryname", rs.getString("categoryname"));
				result.put("description", rs.getString("description"));
				result.put("amount", rs.getFloat("amount"));

			}

		} finally {
			closeConnection();

		}
		return result;

	}

	public JSONArray allExpense() throws SQLException {
		JSONArray result = new JSONArray();
		try {
			String query = "select * from expense";
			rs = stat.executeQuery(query);
			while (rs.next()) {
				JSONObject obj = new JSONObject();
				obj.put("exid", rs.getString("exid"));
				obj.put("date", rs.getString("date"));
				obj.put("categoryname", rs.getString("categoryname"));
				obj.put("amount", rs.getFloat("amount"));
				obj.put("description", rs.getString("description"));
				int mid = rs.getInt("memberid");
				String queryy = "select name from member where memberid=" + mid;
				rs = stat.executeQuery(queryy);
				while (rs.next()) {
					obj.put("name", rs.getString("name"));
					result.put(obj);

				}
			}

		} finally {
			closeConnection();
		}
		return result;

	}

	public JSONObject report() throws SQLException {
		JSONObject result = new JSONObject();
		try {
			String query = "select sum(amount) from income";
			rs = stat.executeQuery(query);
			if (rs.next()) {
				result.put("amount", rs.getFloat(1));
				String queryy = "select sum(amount) from expense";
				rs = stat.executeQuery(queryy);
				if (rs.next()) {
					result.put("expense", rs.getFloat(1));

				}

			}

		} finally {
			closeConnection();
		}
		return result;

	}

	public JSONObject dateReport(String fromdate, String todate) throws SQLException {
		JSONObject result = new JSONObject();
		try {
			String query = "select sum(amount) from income where date between '" + fromdate + "' and '" + todate + "'";
			rs = stat.executeQuery(query);
			if (rs.next()) {
				result.put("amount", rs.getFloat("sum(amount)"));
				String queryy = "select sum(amount) from expense  where date between '" + fromdate + "' and'" + todate
						+ "'";
				rs = stat.executeQuery(queryy);
				if (rs.next()) {
					result.put("date", rs.getFloat("sum(amount)"));
				}
			}
		} finally {
			closeConnection();

		}
		return result;

	}

	private void openConnection() throws ClassNotFoundException, SQLException {
		Class.forName("com.mysql.jdbc.Driver");
		con = DriverManager.getConnection("jdbc:mysql://" + HomeConstant.MYSQL_SERVER + "/" + HomeConstant.DATABASE,
				HomeConstant.USERNAME, HomeConstant.PASSWORD);
		stat = con.createStatement();

	}

	private void closeConnection() throws SQLException {
		if (con != null) {
			con.close();
		}
		if (stat != null) {
			stat.close();
		}
		if (rs != null) {
			rs.close();
		}

	}

}
