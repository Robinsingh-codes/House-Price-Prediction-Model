### Project Description
# House Price Prdiction Model
House price Prediction model is a model using sklearn and linear regression using banglore home prices dataset from kaggle.com to predict the price for given inputs of location, Sqft size of house, Number of bhk, Number of Bathrooms. Provides the sellers with a better model to predict the price of their house according to the area the house resides in.
During model building we will cover almost all data science concepts such as data load and cleaning, outlier detection and removal, feature engineering, dimensionality reduction, grid search cv for hyper parameter tunning, k fold cross validation.
Data Science and data analytics can be used in many ways in the Real estate market. The main purpose of using data science in real estate is to collect datasets from multiple sources and extract useful information from them, Humans are not able to analyze such Big data, unlike algorithms.
Technologies used: Python, NumPy, sk-learn, Flask, matplotlib, etc.
# Features : 
• Easily predict the price of house.
• Auto update all the locations of dataset to drop down list options in html form for user experience.
• Simple and good user interface.
• Great UI/UX
• Area wise categorization
• Data cleaning and outlier detection in dataset.


# What is House Price Prediction Model?
Predicting house prices can help to determine the selling price of a house of a particular region and can help people to find the right time to buy a home.
House price Prediction model is a model using sklearn and linear regression using banglore home prices dataset from kaggle.com to predict the price for given inputs of location, Sqft size of house, Number of bhk, Number of Bathrooms. Provides the sellers with a better model to predict the price of their house according to the area the house resides in.
In this task on House Price Prediction using machine learning, our task is to use data from the Bangalore census to create a machine learning model to predict house prices in the area. The data includes features such as population, median income, and median house prices for each block group in Banaglore.
Our machine learning model should learn from this data and be able to predict the median house price in any neighbourhood, given all other metrics.
A machine learning project on House Price prediction with Python. Let’s start by importing the necessary Python libraries and the dataset.
The main focus of the house price prediction model is to predict the price for the every user requirement to predict the price of home during selling or purchasing. Provides the sellers with a better model to predict the price of their house according to the area of the house.
Use of the Random Forest regression algorithm to predict the price of the house. We’ll begin by loading the data. Since we’re using an inbuilt dataset, we’ll be calling the load_boston function from the sklearn.datasets module. We load the data into the data variable.
Once the data is loaded, we separate the data and target attributes of the data variable. We store them in variables data and target, respectively. Once we have the data and target values in 2 different variables, we can divide the data into two parts: the testing data and training data.
This means that the model has learned the training data so well that it cannot generalize new data points. Once we have the dataset split into training and testing sets, we can pre-process the data. Pre-processing involves scaling the values and converting the categorical values into numerical values.
 
We have gone through how to implement the entire machine learning pipeline, and we have an intuitive understanding of machine learning algorithms. The larger the dataset gets, the more complex each of the mentioned steps gets. Therefore, using this as a base will help while you build your knowledge of machine learning pipelines.


# Benefits of House Price prediction model based web application:
Data Science, Machine Learning and data analytics can be used in many ways in the Real estate market. The main purpose of using data science in real estate is to collect datasets from multiple sources and extract useful information from them, Humans are not able to analyze such Big data, unlike algorithms. Benefits of Data Science in Real Estate: 

•	Reduces Risks : with the help of predictive analytics company can use it to estimate the overall condition like its ages, deconstruction history, owner information. the company can provide their customer with up-to-date information so it increases their satisfaction from working with them.
•	Calculate the price: precise cost calculation in real estate is time-consuming, how the Machine learning algorithm can use for the estimate the price of properties with the help of historical data.
•	Data-driven decision: Machine learning open many opportunities for the business. just feed the algorithm with data and it will process it to help you make the right decision.
•	Marketing strategy: with the help of customer information company can plan their future marketing strategy according to customer needs.
•	Improved decision-making : A house price prediction website can provide valuable information to real estate agents and investors, allowing them to make more informed decisions about buying or selling properties.
•	Better pricing : By providing accurate predictions of future house prices, a house price prediction website can help property owners set more realistic prices for their homes, which can lead to faster sales and higher profits.
•	Increased transparency : A house price prediction website can provide valuable insights into the real estate market, helping buyers and sellers understand the factors that influence property values and make more informed decisions.
•	More efficient market : By providing accurate and up-to-date information about property values, a house price prediction website can help streamline the real estate market, making it easier for buyers and sellers to find properties that match their needs and budget.
•	Greater accessibility : A house price prediction website can provide information to a wide audience, making it easier for people to access the information they need to make informed decisions about buying or selling properties. This can be particularly beneficial for people who live in areas where access to real estate information is limited.
Real life example: American online real estate database company Zillow has used data science in the real estate market.


# Process of Building a Web Application
To build a notes app using architecture components, the developer would need to follow these steps:
1.	Data Gathering: The first step is typical data science work where we take a data set from Kaggle called ‘Bengaluru House price data’ .
2.	Data cleaning : We will perform some extensive data cleaning work on it to ensure that it gives accurate results during prediction.
3.	This jupyter notebook entitled ‘RealEstatePricePredictor.ipynb’ is where we perform all the data science related work. Our dataset requires a lot of work in terms of data cleaning. Data cleaning where we drop empty rows and remove unnecessary columns that won’t help in prediction.
4.	Feature Engineering which is the process of extracting useful and important information from the dataset that will contribute the most towards a successful prediction.
5.	Handling outliers: Outliers are anomalies that cause an enormous amount of damage to data and prediction. There is a lot of things to understand from the dataset logically to detect and remove these outliers. In the end, the original dataset which had almost 13000 rows and 9 columns are reduced to almost 7000 rows and 5 columns.
6.	Machine Learning: The final data obtained is subjected to a machine learning model. We will mainly use K-fold Cross Validation and GridSearchCV technique to perform hyper parameter tuning to obtain the best algorithm and parameters for the model.Turns out linear regression model gives the best results for our data with a score above 80% which is not bad. Now, our model needs to be exported into a pickle file (Bengaluru_House_Data.pickle) which converts python objects into a character stream. Also, we need to export the locations(columns) into a json(columns.json) file to be able to interact with it from the frontend.
7.	Server : The server.py file will be responsible for handling the routes for fetching the location names and predicting the house price. It also gets the form data from the front end and feeds it to the util.py. These routes can be tested using Postman app.
Flask is a small and lightweight Python web framework that provides useful tools and features that make creating web applications in Python easier. It gives developers flexibility and is a more accessible framework for new developers since you can build a web application quickly using only a single Python file. Flask is also extensible and doesn’t force a particular directory structure or require complicated boilerplate code before getting started.
Step 1 : Installing Flask - you’ll activate your Python environment and install Flask using the pip package installer.
Step 2 : Creating a Base Application - This server.py file will serve as a minimal example of how to handle HTTP requests. Inside it, I’ll import the Flask object, and create a function that returns an HTTP response.
Step 3 : Using HTML templates- Currently your application only displays a simple message without any HTML. Web applications mainly use HTML to display information for the visitor, so you’ll now work on incorporating HTML files in your app, which can be displayed on the web browser. i.e. search http://127.0.0.1:5000/predict_home_price.
8.	Util.py : The util.py file is the main brains behind the back end. It has a function to load the JSON and pickle file. This file takes the form data from server.py and uses the model to predict the estimated price of the property.
It helps in providing functionality to server.py and interacting with the pickle file of cleaned and processed data.
9.	Frontend application: The front end is made up of simple HTML, CSS and JavaScript. The user can select the number of square feet area, BHK, bathrooms and location in the form and hit on ‘ESTIMATE’ button to get the estimated price. The JavaScript file is responsible for interacting with both the backend flask server routes and the frontend HTML. It gets the form data filled by the user and calls the function that uses the prediction model and renders the estimated price in lakhs rupees (1 lakh = 100000).
A webform, web form or HTML form on a web page allows a user to enter data that is sent to a server for processing. Forms can resemble paper or database forms because web users fill out the forms using checkboxes, radio buttons, or text fields. To takes user input at runtime and successfully processing for producing the respective output we use HTML forms for the purpose.
Overall, building a web app using architecture components involves setting up the development environment, creating a new project, designing the front end 's user interface, defining the data model, implementing the model 's core functionality, using the Data Science architecture components, testing and debugging the app, and publishing it.
 
A house price prediction model is a type of machine learning model that can predict the future value of a house based on historical data and other factors. These models are often used by real estate agents and investors to help determine the potential value of a property and make informed decisions about buying or selling. To create a house price prediction model, you would need to gather a large dataset of historical house prices and other relevant information, such as the size of the property, its location, and any other features that may affect its value. You would then use this data to train a machine learning model, such as a decision tree or a neural network, to learn the relationships between the different factors and predict future house prices.
A house price prediction web application is a tool that allows users to enter information about a property, such as its location, size, and features, and receive a prediction of its future value. This type of application can be useful for real estate agents and investors who want to make informed decisions about buying or selling properties. To create a house price prediction web application, you would need to develop a user interface that allows users to enter the relevant information about a property, and connect it to a machine learning model that has been trained to predict house prices. The model would use the information provided by the user to make a prediction, and the web application would display the results to the user.
To build a house price prediction model, you would need to follow these steps:
•	Gather a large dataset of historical house prices and other relevant information, such as the size of the property, its location, and any other features that may affect its value. This data should include information about properties that have been sold in the past, as well as properties that are currently on the market.
•	Clean and preprocess the data to ensure that it is in a format that can be easily used by a machine learning model. This may involve removing missing or irrelevant data, normalizing numerical values, and encoding categorical variables.
•	Split the data into a training set and a test set. The training set will be used to train the model, while the test set will be used to evaluate its performance.
•	Select a machine learning algorithm and train it on the training set. This step involves choosing the type of model, such as a decision tree or a neural network, and setting the model's hyperparameters to optimize its performance.
•	Evaluate the model's performance on the test set and fine-tune the model if necessary. This step may involve adjusting the model's hyperparameters or using a different algorithm to improve its accuracy.
•	Once the model is performing well on the test set, you can use it to make predictions on new data, such as properties that are currently on the market. These predictions can help real estate agents and investors make informed decisions about buying or selling properties.
