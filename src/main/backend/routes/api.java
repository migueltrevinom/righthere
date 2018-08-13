package com;

import static spark.Spark.*;



public class ApiRoutes {

    public static void main(String[] args) {
        get("/hello", (req, res) -> "Hello World");
    }

}

