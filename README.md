
# Personal Finance Management Tool

A responsive and intuitive tool designed to help you track expenses, manage savings, and visualize your financial data.

---

## 📝 Project Overview

This personal finance management web application streamlines the process of managing budgets, tracking expenses, and monitoring savings. The application focuses on security, usability, and scalability, providing a complete solution for personal financial management.

---

### 🌟 Key Features

- **Expense Tracking**: Log and categorize your expenses quickly and efficiently.
- **Budget Management**: Track your daily, weekly, or monthly budgets in real time.
- **Savings Overview**: Monitor savings to meet financial goals.
- **Responsive UI**: Designed using Figma and implemented with Angular for a seamless and engaging user experience.
- **Secure Data Storage**: Uses MongoDB for robust and secure data management.
- **User Authentication**: Implements role-based access control to ensure user privacy.
- **Scalable Architecture**: Built with Express.js for scalable and efficient backend functionality.

---

## 💻 Technologies Used

- **Frontend**: Angular  
- **Backend**: Express.js  
- **Database**: MongoDB  
- **Design Tool**: Figma  

---

## 🔗 Backend API Endpoints

The backend, powered by Express.js, offers a comprehensive set of API endpoints to manage your financial data. Below is a list of key endpoints and their purposes:

### **Income Management**
- `POST /addIncome`: Add income data to the budget.
- `POST /addCash`: Add cash to the system.

### **Expense Management**
- `POST /addExpense`: Log an expense.

### **Savings and Owing**
- `POST /addSaving`: Add a savings entry.
- `POST /addOwing`: Record an owing or debt entry.

### **Data Retrieval**
- `GET /getBudget`: Retrieve the overall budget details.
- `GET /getAmount`: Fetch the available cash and card balance.
- `GET /getExpense`: Get detailed expense data.
- `GET /getSavings`: Retrieve saved amounts.
- `GET /getOwing`: Fetch owing (debts) information.

### **Error Handling**
Each endpoint includes error handling to ensure smooth operation and provides detailed error messages in case of failure (e.g., `500 Internal Server Error`).

---

## 📅 Development Timeline

- **June 2024 – July 2024**  
  - Designed the application using Figma.  
  - Developed a responsive frontend with Angular.  
  - Built backend APIs with Express.js.  
  - Integrated MongoDB for secure and scalable data storage.  

---

## 🛠️ Installation and Setup

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/yourusername/finance-management-tool.git
   ```

2. **Navigate to the project directory**:  
   ```bash
   cd finance-management-tool
   ```

3. **Install backend dependencies**:  
   ```bash
   npm install
   ```

4. **Start the backend server**:  
   ```bash
   npm start
   ```

5. **Navigate to the Angular frontend directory**:  
   ```bash
   cd frontend
   ```

6. **Install frontend dependencies**:  
   ```bash
   npm install
   ```

7. **Run the frontend**:  
   ```bash
   ng serve
   ```

8. **Access the application**:  
   Open your browser and go to `http://localhost:4200`.

---


## 🤝 Contribution

Contributions are welcome! If you’d like to contribute:

1. **Fork the repository**.  
2. **Create a feature branch**:  
   ```bash
   git checkout -b feature-name
   ```

3. **Commit your changes**:  
   ```bash
   git commit -m "Add feature"
   ```

4. **Push to the branch**:  
   ```bash
   git push origin feature-name
   ```

5. **Submit a pull request**.
