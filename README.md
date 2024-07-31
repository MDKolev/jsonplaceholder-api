# JSONPlaceholder API
  A project that fetches data from JSONPlaceholder API and displays it in a user-friendly format.

  ## Overview
   ### This project contains the following functionalities:
   - fetching user data from the api
   - sorting the data by the name of the users in ascending or descending order
   - selection of the number of shown users per page
   - clear of the displayed data
   - an error page if an error occur

  ## Getting started
  ### Prerequisites
  Make sure you have Docker installed on your machine. You can download it from [here](https://www.docker.com/products/docker-desktop/).

  ### Pulling the Docker Image
  #### Using VS Code Terminal
   Open your project folder in VS Code.
   Open the terminal in VS Code by navigating to View > Terminal or pressing Ctrl+`.
   Run the Docker commands in the terminal.
  #### Using Command Line Interface (CLI)
   Open a terminal or command prompt on your machine.
   Run the Docker commands in the terminal or command prompt.

  --------------------------------------------------------------------
  
  To run the application, you need to pull the Docker Image from the Docker repository. You can do this using the following command:

  ```
  docker pull mdkolev/placeholder-api:dev
  ```

  ### Running the Docker Container
  Once you have pulled the Image, you can run the Docker container using the following command:
  ```
  docker run -p 32770:5173 placeholder-api:dev
  ```

  ### Accessing the Application
  After running the container, you can access the application in your web browser at:
  ```
  http://localhost:32770
  ```

  ### Removing the Docker Container
  If you want to remove the container, you can use the following command:
  ```
  docker rm placeholder-api:dev
  ```
  --------------------------------------------------------------------
  ## If you encounter any issues, please feel free to open an issue or contact me directly.

  
