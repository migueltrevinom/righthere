package routes;

import static spark.Spark.get;

public class Web {

    public Web() {

        init();
    }

    private void init() {

        get("/", (req, response) -> {
            response.status(200);
            response.type("text/html");
            response.redirect("index.html");
            return null;
        });

    }
}


