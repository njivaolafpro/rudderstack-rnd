const RudderAnalytics = require("@rudderstack/rudder-sdk-node");

let client;

console.log("client init done");

// TODO add params
const track = ({ userId, eventName, eventType }) => {
	console.log('track()')
  if (!client) {
    throw new Error("Client has not been initialized");
  }
  client.identify({
    userId,
    traits: {
      name: "Alex Keener",
      email: "alex@example.com",
    },
  });

  client.track({
    userId,
    event: "Item Viewed",
    properties: {
      /*revenue: 20.95,
      shippingMethod: "Premium",*/
      index: "item_view",
      event: eventName,
      eventType: eventType,
      objectIds: ["objId1", "objId2"],
    },
  });
};

const init = () => {
  client = new RudderAnalytics("2dXSIsvMJuqxwHiN9uZI1F60OU6", {
    dataPlaneUrl: "https://planityolsixtq.dataplane.rudderstack.com",
  });

  return { actions: { track } };
};

module.exports = { init };
