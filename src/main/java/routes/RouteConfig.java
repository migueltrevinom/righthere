package routes;

import spark.Spark;

import static spark.Spark.port;

public class RouteConfig {


    public RouteConfig() {
        port(8181);
        Spark.staticFileLocation("/public");
        new Api();
        new Web();
    }

}
