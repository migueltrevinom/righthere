package routes;

import static spark.Spark.get;

public class Web {

    public Web() {
        init();
    }

    private void init() {

        get("/", (req, res) -> "web route");

    }
}


