package com.pluralsight;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.time.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/todo/*")
public class ToDoServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private ArrayList<ToDoItem> todoItems;
    
    public ToDoServlet() {
        super();
        todoItems = new ArrayList<ToDoItem>();
        todoItems.add( new ToDoItem("Workout", LocalDate.now()) );
        todoItems.add( new ToDoItem("Laundry", LocalDate.now()) );
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getPathInfo();
        
        if (action.equals("/insert")) {
            insertNewItem(request, response);
        }
        else {
            listAllItems(request, response);
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
    
    private void listAllItems(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("todo_items", todoItems);
        RequestDispatcher dispatcher = request.getRequestDispatcher("/ToDoList.jsp");
        dispatcher.forward(request, response);
    }
    
    private void insertNewItem(HttpServletRequest request, HttpServletResponse response) {
        // TO DO
    }
}
