<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %> 
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>To Do List</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/style.css">
</head>
<body>
	<ul>
	  	<li><a class="active" href="list">To Do List</a></li>
	</ul>

	<div class="container">
	    <div class="todotable">
	        <table>
	            <tr>
	                <th>To Do</th>
	                <th>Date</th>
	            </tr>
	            <c:forEach items = "${todo_items}" var = "item" varStatus="loop">
					<tr>
						<td>${loop.index+1}. ${item.getItem()}  </td>
						<td>${item.getDateStr()}</td>
					</tr>
				</c:forEach>
	            
            </table>
		</div>
	</div>
</body>
</html>
