package routes;

import static spark.Spark.port;

public class RouteConfig {


    public RouteConfig() {
        port(8181);
        new Api();
        new Web();
    }

}
