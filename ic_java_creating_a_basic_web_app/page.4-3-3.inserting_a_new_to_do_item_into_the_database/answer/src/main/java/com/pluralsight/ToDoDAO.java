package com.pluralsight;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import java.util.ArrayList;

public class ToDoDAO {
    private Connection jdbcConnection;
    
    public ToDoDAO(Connection connection)
    {
      jdbcConnection = connection;
    }

    public ArrayList<ToDoItem> listAllItems() {
        ArrayList<ToDoItem> todoList = new ArrayList<>();

        String sql = "SELECT * FROM todo";

        try {
            Statement statement = jdbcConnection.createStatement();
    
            ResultSet resultSet = statement.executeQuery(sql);

            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String item = resultSet.getString("item");
                String dateStr = resultSet.getString("date");

                ToDoItem todoItem = new ToDoItem(id, item, dateStr);
                todoList.add(todoItem);
            }

            resultSet.close();
            
            statement.close();
          } catch (SQLException e) {
            e.printStackTrace();
          }
          return todoList;
      }
    
    public void insertTodo(ToDoItem todoItem)  {
        String sql = "INSERT INTO todo (item, date) VALUES (?, ?)";

        try {
            PreparedStatement statement = jdbcConnection.prepareStatement(sql);
            statement.setString(1, todoItem.getItem());
            statement.setString(2, todoItem.getDate().toString());

            statement.executeUpdate();
            statement.close();
        } catch (SQLException e) {
                e.printStackTrace();
        }
    }
}
