# nodejs-mongo-crud
CRUD service using NodeJS and MongoDB. Week 7 task of I4GxZURI (backend) training.

## Task Description:
Create a Node.js server using any framework of choice (optional) and appropriate folder structure (routes, controllers, models, etc.), which will perform the following functions:<br/>
1. Add a Todo task to a Todo collection<br/>
2. Update a particular Todo task<br/>
3. Delete Todo task<br/>
4. Retrieve all Todo tasks (pagination optional)<br/>

Each Todo document should contain at least the following fields: _id, title, description, timestamp.<br/>

You can use either a local mongoDB instance or a hosted one on any provider of choice.<br/>

Push your code to GitHub and submit your accessible GitHub Link.<br/>

## How to use:
npm i <br />

npm run start

## Endpoints
 1. Add a Todo task to a Todo collection - <br/>URL:http://localhost:3000/task/new METHOD:POST BODY: title, description <br/>
2. Update a particular Todo task- <br/>URL:http://localhost:3000/task/new METHOD:PUT BODY: title, description <br/>
3. Delete Todo task - <br/>URL:http://localhost:3000/task/:id METHOD:DELETE BODY: title, description <br/>
4. Retrieve all Todo tasks - <br/>URL:http://localhost:3000/task/ METHOD:GET <br/>
* Bonus - Retrieve a single task - <br/>URL:http://localhost:3000/task/:id METHOD:GET 
