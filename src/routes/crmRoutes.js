import { runInNewContext } from "vm";
import { addNewContact, getContacts } from "../controllers/crmController";

const routes = app => {
  app.route("/contact")

    .get((req, res, next) => {
      //middleware
      console.log(`Request from: ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)
      next();
    }, getContacts)
     //Post endpoint
    .post(addNewContact);

    app.route("/contact/:contactId")
    .put((req, res) => res.send("PUT request successfull!"))
    .delete((req, res) => res.send("DELETE request successfull!"))

};

export default routes;
