package com.pluralsight;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/todo/*")
public class ToDoServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private ArrayList<String> todoItems;
       
    public ToDoServlet() {
        super();
        todoItems = new ArrayList<String>();
        todoItems.add("Do laundry");
        todoItems.add("Call Ann on her birthday");
        todoItems.add("Go out to eat with Mom");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("todo_items", todoItems);
        RequestDispatcher dispatcher = request.getRequestDispatcher("/ToDoList.jsp");
        dispatcher.forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
