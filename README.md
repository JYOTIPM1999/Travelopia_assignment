
# Travelopia Assignment

This is a MERN Stack project for users to record their travel details. Technologies used to build this project are React.js,ReactDOM, Node.Js, Express.Js, MongoDB and for CSS I have used Chakra UI and Chakra Template.


## Various Screens

 - [Homepage/ Landing page](https://travelopia.vercel.app/)
 - [Details page/ Submission page](https://travelopia.vercel.app/details)


## API Reference

#### Get all items

```http
  GET /api/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/getData` | `string` | **Required**. https://travelopia-29rz.onrender.com/traveller/getData |

#### Post items

```http
  POST /api/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/register`      | `string` | **Required**. https://travelopia-29rz.onrender.com/traveller/register |



## Glimps of Travelopia web app

#### Home page/ Registration page


![Homepage](https://res.cloudinary.com/dehubjbqm/image/upload/v1680689216/Homepage_svmnuo.png)


#### Successfully registered


![success](https://res.cloudinary.com/dehubjbqm/image/upload/v1680689225/success_ga5kvc.png)

#### Fill details error


![Fill Error](https://res.cloudinary.com/dehubjbqm/image/upload/v1680689225/Fill_jglg3i.png)


#### Email must contain @gmail.com error


![Fill Error](https://res.cloudinary.com/dehubjbqm/image/upload/v1680689224/email_jartg1.png)


#### Exiting User error


![Fill Error](https://res.cloudinary.com/dehubjbqm/image/upload/v1680689225/exist_xjvx2q.png)


#### Details page with Tabular


![Fill Error](https://res.cloudinary.com/dehubjbqm/image/upload/v1680689225/table_y12rz9.png)


#### Details page with Card 


![Fill Error](https://res.cloudinary.com/dehubjbqm/image/upload/v1680689224/card_arwtps.png)
## Features

- Users can submit form data with their name, email, place, No of Travellers, Budget per person and Total Budget.
- The form data is stored in a MongoDB database and can be retrieved using an API endpoint.
- There is a details page that displays all the existing form submissions.
- Responsive for every system


## Tech Stack

**Client:** ReactJS, Chakra UI, Chakra Template, React-router-dom

**Server:** Node.Js, Express.Js, MongoDB


## Deployment

To deploy this project run

```bash
  vercel
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY for getting data= https://travelopia-29rz.onrender.com/traveller/getData`

`API_KEY for submitting data= https://travelopia-29rz.onrender.com/traveller/register`

I. Clone the project from the GitHub repository.

II. Navigate to the project directory using the terminal.

III. Install the necessary dependencies by running the command npm install in both the backend and frontend directories.

IV. Create a .env file in the backend directory and add the following environment variables:

PORT=<PORT_NUMBER>

URI=<MONGODB_CONNECTION_URL>

Replace <PORT_NUMBER> with the desired port number for the Backend server and <MONGODB_CONNECTION_URL> with the connection URL for your MongoDB database.

V. Start the Backend server by running the command "npm run serve" in the backend directory.

VI. Start the Frontend server by running the command "npm start" in the frontend directory.

VII. The Frontend server will start on port 3000, and you can access it on your browser using the URL http://localhost:3000

