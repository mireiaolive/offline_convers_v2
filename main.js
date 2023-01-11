"use strict";
const bizSdk = require("facebook-nodejs-business-sdk");
const Content = bizSdk.Content;
const CustomData = bizSdk.CustomData;
const DeliveryCategory = bizSdk.DeliveryCategory;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;

const access_token =
    "EAAKf8qJ4GsIBALWVDoij1uBgsXhZBoFzqdXAwlF7TlyyF6BUiGq5L4OmsDr8F4Oc2BEvpUguMV9j3a59tD0GF0Fg2ZBOifO35F2udDpYO8JZBhq1Dl7OXP2jKPff5mXilMz1s6ZAJfZB7SjAZBGVGSEKZBgH6mGVwFLZAaH2ZAxIG9ch0aWyin30j253VK44xTFMZD";
const pixel_id = 2919800498130478;
const api = bizSdk.FacebookAdsApi.init(access_token);

let current_timestamp = Math.floor(new Date() / 1000);

const userData = new UserData()
    .setEmails(["joe@eg.com"])
    .setPhones(["12345678901", "14251234567"])
    // It is recommended to send Client IP and User Agent for Conversions API Events.
    .setClientIpAddress(request.connection.remoteAddress)
    .setClientUserAgent(request.headers["user-agent"])
    .setFbp("fb.1.1558571054389.1098115397")
    .setFbc("fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890");

const content = new Content()
    .setId("product123")
    .setQuantity(1)
    .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);

const customData = new CustomData()
    .setContents([content])
    .setCurrency("usd")
    .setValue(123.45);

const serverEvent = new ServerEvent()
    .setEventName("Purchase")
    .setEventTime(current_timestamp)
    .setUserData(userData)
    .setCustomData(customData)
    .setEventSourceUrl("http://jaspers-market.com/product/123")
    .setActionSource("website");

const eventsData = [serverEvent];
const eventRequest = new EventRequest(access_token, pixel_id).setEvents(
    eventsData
);

eventRequest.execute().then(
    (response) => {
        console.log("Response: ", response);
    },
    (err) => {
        console.error("Error: ", err);
    }
);
