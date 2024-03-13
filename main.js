const express = require("express");
const trackingService = require("./services/tracking-service");
const app = express();
const port = 3000;

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
  trackingServiceInstance = trackingService.init({ apiKey: '2dXSIsvMJuqxwHiN9uZI1F60OU6', dataPlaneUrl: "https://planityolsixtq.dataplane.rudderstack.com" });
  console.log(`Example app listening on port ${port}`);
});
