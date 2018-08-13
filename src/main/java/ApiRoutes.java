import static spark.Spark.get;
import static spark.Spark.port;

public class ApiRoutes {


    public void init() {
        port(8181);
        get("/hello", (req, res) -> "Hello World");

    }

}
