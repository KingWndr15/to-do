const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and Body Parser
const corsOptions = {
  origin: 'http://localhost:8080',  // Update with your Vue.js app's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Initialize Firebase Admin SDK
const serviceAccount = require('./to-do-d2029-firebase-adminsdk-s02d5-002ec032fb.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://to-do-d2029.firebaseio.com',
});

// Firebase Firestore
const db = admin.firestore();
const todosCollection = db.collection('todos');

// Route to fetch and display todos
app.get('/api/todos', async (req, res) => {
  try {
    const snapshot = await todosCollection.get();
    const todos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json({ todos });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to add a new todo (POST request)
app.post('/api/todos', async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const newTodo = { title, completed: false };
    const docRef = await todosCollection.add(newTodo);

    // Send the newly created todo as the response
    res.status(201).json({ id: docRef.id, ...newTodo });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete a todo by ID
app.delete('/api/todos/:id', async (req, res) => {
  try {
    const todoId = req.params.id;

    if (!todoId) {
      return res.status(400).json({ error: 'Todo ID is required' });
    }

    await todosCollection.doc(todoId).delete();

    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to update a todo's completion status by ID
app.patch('/api/todos/:id', async (req, res) => {
  try {
    const todoId = req.params.id;
    const { completed } = req.body;

    if (!todoId) {
      return res.status(400).json({ error: 'Todo ID is required' });
    }

    await todosCollection.doc(todoId).update({ completed });

    res.status(200).json({ message: 'Todo updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
