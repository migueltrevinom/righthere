package modules.example;

import spark.Request;
import spark.Response;

public class ExampleController {

    public static String renderHelloWorld(Request req, Response res){
        System.out.print("in renderHelloWorld");
        return "HelloWorld";
    }
}
