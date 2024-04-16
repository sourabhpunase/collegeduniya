
# CollegeDuniyaAssignment

## Introduction
The CollegeCard component serves as a versatile tool for displaying and managing college data. It utilizes React hooks like useState, useEffect, useRef, and useCallback to handle state management, data fetching, and optimizing performance.

At its core, it fetches college data from a JSON file and dynamically renders it in a table format, allowing users to search, sort, and paginate through the data. The useState hook manages various states such as the list of colleges, search term, sorting options, page number, and loading status.

To ensure efficient data loading and infinite scrolling, it utilizes the useEffect hook to fetch data asynchronously and sets up an IntersectionObserver using useRef and useCallback to detect when the user scrolls to the bottom of the page, triggering the loading of more data.

For sorting functionality, the component dynamically sorts the displayed colleges based on the selected sorting option using the handleSort function, which updates the sorting criteria and order.

Additionally, it provides a search input field to filter colleges based on the entered search term using the handleSearch function.

Overall, the CollegeCard component combines the power of React hooks to create a seamless and interactive user experience for exploring college data.

## Demo
A live demo of the application can be accessed [here](https://serene-figolla-45eb5d.netlify.app/).

## Technologies Used

- React
-
- Tailwind CSS

- React-Toastify

## Features

The CollegeCard component is a robust and feature-rich tool designed to efficiently present and manage college data. It leverages a combination of React hooks, including useState, useEffect, useRef, and useCallback, to offer a dynamic and responsive user experience.

One of its key features is its ability to fetch college data from a JSON file and display it in a structured table format. Users can easily navigate through the data, thanks to built-in pagination functionality that loads additional colleges as the user scrolls down the page.

The component provides seamless sorting capabilities, allowing users to arrange the displayed colleges based on various criteria such as college ranking, name, course fees, placement, and user reviews. Sorting is implemented using the handleSort function, which dynamically updates the sorting criteria and order based on user interaction.

To facilitate efficient data retrieval and improve performance, the component employs asynchronous data fetching using the useEffect hook. Additionally, it utilizes an IntersectionObserver setup, managed through useRef and useCallback, to detect when the user reaches the end of the page, triggering the loading of more colleges.

Users can further refine their search using the integrated search input field, which filters colleges based on the entered search term. This functionality, powered by the handleSearch function, enables users to quickly find colleges of interest within the dataset.

Overall, the CollegeCard component offers a comprehensive set of features, seamlessly combining data presentation, navigation, sorting, and search functionalities to deliver an intuitive and user-friendly experience for exploring college information.

## Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the dependencies.

## Setup
1. Configure environment variables if necessary.
2. Set up a MongoDB database and ensure it is accessible.
3. Configure Google OAuth for user authentication if needed.
4. Make any necessary adjustments to the code, such as updating API endpoints or configuring additional features.

## Running the Application
1. Once the setup is complete, run `npm start` to start the application.
2. The application will be accessible at the specified URL or port (usually `http://localhost:3000`).

## Additional Information
- For troubleshooting or assistance, please contact the project maintainer.
- Known issues and updates will be documented in the repository's issue tracker and changelog.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
