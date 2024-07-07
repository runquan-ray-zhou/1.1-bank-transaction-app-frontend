Yo! This is the frontend!

Standard Goals

1. [x]Create GitHub repositories for both the front-end and the back-end applications, one for each app, and upload your code to it. **Do not Clone this repo, create 2 new ones!**
1. [ ]Your front-end repository should have a `readme.md` file with setup instructions for your application.
1. [ ]Both the front-end and back-end applications should be successfully deployed to the web.
   - Your readme should also include links to your back-end GitHub repository, both of your deployed URLs
4. [x]Your server should incorporate at least one model for transactions that, at minimum, includes:
   - `id` - A unique number for each item
     - `item_name`- string - the name of the transaction (ie: income, savings, cat food, etc.)
     - `amount` -number - the amount of the transaction
     - `date`- string - the date should be a simple string. As a bonus activity, use the date object and date input field and format it to be human-readable
     - `from` - string - who this transaction was with (ie. employer, bank, pet store, grocery store, etc)
     - `category` - string - what category does this fall into (income, savings, pets, food, etc)
1. [x]A route exists to create new transactions.
1. [x]A route exists to read all transactions.
1. [x]A route exists to read a single transaction.
1. [x]A route exists to update a single transaction.
1. [x]A route exists to delete a single transaction.
1. [x]An appropriate "Not Found" response is given when a route is requested that does not match the created routes.
1. [x]Each Route has appropriate error handling using `if/else` or `try/catch` blocks.
11. [x]All pages should include the same navigation bar, which includes the name of the application and a button to create a new transaction.
1. [x]You should have an Index page that presents all of the transactions in your model.
1. [ ]After clicking on a single transaction, you should be brought to a Show page which includes more detailed information about the specific transaction.
1. [x]When the button in the navigation bar to create a new transaction is clicked, you should be brought to a new page that includes a form to create a new transaction.
1. [x]Forms should be properly labeled and the `type` of inputs should be properly set. For example, an input that requires a `number` should have type `number`, not `text`.
1. [x]When a new transaction form is submitted, the transaction should be created in the backend and the user should be brought to that new transaction's Show page.
1. [x]On the transaction's Show page, there should be a button to edit the current transaction. When clicked, the user is brought to a form page with data already filled in that can be edited.
1. [x]When an edited transaction form is submitted, the transaction should be edited in the backend and the user should be brought to that edited transaction's Show page.
1. [x]On the transaction's Show page, there should be a button to delete the current show page. When clicked it should delete the transaction and navigate you to the index page
1. [x]Using the transaction's data, perform a calculation that can be performed on the front-end application and displayed to the user on the Index page. For example, the bank account total should be visible. In addition to the total, the CSS should change based on the value - use a greenish color if the bank account total is above 100, use a yellowish color if the bank account total is between 0 and 100 and a reddish color if the bank account total is less than 0. You can change the background or text or both.

Stretch Goals

- [x]Make `categories` a `select` HTML element on the new/edit forms to allow the user to choose from a pull-down menu from the available categories, and allow for the addition of new categories to the options menu.
- [x]Display the bank account total in the nav bar (or similar component that is visible on all views), instead of just on the index page.
- [ ]Add helpful errors to users when they try to create or edit items with invalid data
- [x]Use the date object for the date, instead of just a string. Be sure to format it on the front-end to make it human-readable. Try using the `date` input type as well.
- [x]Use a checkbox, separate input or similar strategy to allow the user to select whether the transaction is a deposit or withdrawal. If it is a withdrawal, make sure the value subtracts and deposit values add. By default, your user would have be entering values that are positive or negative.
- [ ]Create a fake user login, similar to the example given in the official[ React Router GitHub Repository](https://github.com/remix-run/react-router/tree/dev/examples/auth), and allow viewing/updating transactions by a user.
- [ ]Add a library like [chartjs](https://www.chartjs.org) or [D3](https://www.chartjs.org) to provide visualizations the budget app.