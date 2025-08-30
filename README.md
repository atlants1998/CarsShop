# 🚗 User & Car Management API

A simple API for managing users and cars. Easily display all users, add new users, and list cars via HTTP endpoints.

---

## 🌐 API Endpoints

### 1. Display All Users

**GET**  
`http://localhost:8000/JdKdhJuC/?api_key=12345612300&action=display_all_users`

- **Description:** Returns a list of all users.
- **Response Example:**
```json
[
  {"user_name": "ahmed", "age": 25},
  {"user_name": "sara", "age": 30}
]
```

---

### 2. Add User

**GET**  
`http://localhost:8000/JdKdhJuC/?api_key=12345612300&action=add_user&user_name=ahmed&age=25`

- **Parameters:**
  - `user_name` (string): Name of the user
  - `age` (integer): Age of the user
- **Description:** Adds a new user with the specified name and age.
- **Response Example:**
```json
{"success": true, "message": "User added successfully."}
```

---

### 3. List Cars

**GET**  
`http://localhost:8000/JdKdhJuC/?api_key=12345612300&action=List_Cars`

- **Description:** Returns a list of all cars.
- **Response Example:**
```json
[
  {"car_model": "Toyota Camry", "year": 2020},
  {"car_model": "Honda Accord", "year": 2019}
]
```

---

## 🔑 Authentication
All endpoints require an `api_key` parameter. Example: `api_key=12345612300`

---

## 📦 Usage
1. Start your server: `node index.js` (or your server command)
2. Access endpoints in your browser or via tools like Postman or curl.

---

## 💡 Example curl Requests
```sh
# Display all users
curl "http://localhost:8000/JdKdhJuC/?api_key=12345612300&action=display_all_users"

# Add a user
curl "http://localhost:8000/JdKdhJuC/?api_key=12345612300&action=add_user&user_name=ahmed&age=25"

# List cars
curl "http://localhost:8000/JdKdhJuC/?api_key=12345612300&action=List_Cars"
```

---

## 📝 License
MIT

---

## ✨ Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📧 Contact
For questions, contact [your-email@example.com](mailto:your-email@example.com)
