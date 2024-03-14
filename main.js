const express = require("express");
const trackingService = require("./services/tracking-service");
const app = express();
const port = 3010;

let trackingServiceInstance;

app.post("/api/track", (req, res) => {
  // TODO handle params
  trackingServiceInstance.actions.track({
    userId: "dd088692-154f-4e72-8a9c-d2bc796f6134",
    eventName: "CLICKED_ADD_TO_CART",
    eventType: "click",
  });

  res.send("Tracking has been processed");
});
app.get("/api", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  trackingServiceInstance = trackingService.init({
    apiKey: "2dgQEezs8dG75XIdX4M9KxMz32B",
    dataPlaneUrl: "http://localhost:8080",
  });
  console.log(`Example app listening on port ${port}`);
});
