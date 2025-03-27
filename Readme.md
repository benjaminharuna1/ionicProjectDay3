# Ionic React Profile & Posts App

This is an **Ionic React** application that demonstrates the use of **Context API**, **useState**, **useEffect**, and **Ionic Secure Storage** to manage user profiles and fetch posts from an external API.

## 🚀 Features
- **Profile Management**: Users can enter and update their name and age.
- **Global State Management**: Uses **Context API** to share profile data across the app.
- **Data Persistence**: Stores profile data using **Ionic Secure Storage**.
- **Posts Fetching**: Retrieves posts from **JSONPlaceholder API** and displays the first 10.
- **Modern Styling**: Centralized CSS for a sleek UI.

## 🛠️ Installation & Setup

### 1️⃣ Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS)
- **Ionic CLI** (`npm install -g @ionic/cli`)

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/benjaminharuna1/ionicProjectDay3.git
cd ionicProjectDay3
```

### 3️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Run the App
```sh
ionic serve
```
This will start a local development server.

## 📌 Project Structure
```
/src
│── components/         # Reusable UI components
│── context/            # Context API for Profile Management
│── pages/              # Profile & Posts pages
│── theme/              # Centralized CSS for styling
│── App.tsx             # Main Ionic App component
│── main.tsx            # Entry point for the application
```

## 🏗️ How It Works

### 🔹 Profile Management
- The **ProfileContext** stores user data globally.
- If no stored data exists, an editable form is shown.
- Data is saved using **Ionic Secure Storage**.

### 🔹 Fetching Posts
- **useEffect** fetches posts from JSONPlaceholder API.
- Only the **first 10 posts** are displayed.
- Uses **Axios** for API calls.

## 🖌️ Styling
- A single **formStyles.css** is used for centralized styling.
- Forms are **centered**, labels have spacing, and buttons are styled for a modern look.

## 🔥 Technologies Used
- **Ionic React**
- **React Hooks (useState, useEffect, useContext)**
- **Context API**
- **Ionic Secure Storage**
- **Axios**
- **JSONPlaceholder API**

## 🤝 Contributing
Feel free to fork the repo and submit PRs for improvements!

## 📝 License
MIT License. Feel free to use and modify as needed.

