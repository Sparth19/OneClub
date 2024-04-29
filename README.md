# React Native Stock Market App

This is a mobile application built with React Native and TypeScript that provides live stock market data from the RapidAPI Gainer API. Users can search for stocks and view details, as well as swipe to buy using a slide animation implemented with PanResponder and Animated from React Native.

## Features

- Fetches live stock market data from RapidAPI's Gainer API
- Allows users to search for stocks
- Displays stock details including price, volume, and percentage change
- Implements swipe to buy feature with slide animation using PanResponder and Animated
- Utilizes local push notifications for important updates using Notifee

## Installation

    1. Clone this repository to your local machine.
    2. Navigate to the project directory.
    3. Run npm install to install dependencies.
    4. Run pod install in ios directory to install cocoapods.
    5. Replace <YOUR_RAPIDAPI_KEY> in the api.ts file with your RapidAPI key.
    6. Run npx react-native run-android to start the Android app.
    7. Run npx react-native run-ios to start the iOS app.

## Usage/Examples

- On the login screen you can give any valid credentials.
- On the home screen, view the list of gainer stocks fetched from the RapidAPI Gainer API.
- Scroll up and use the search bar to search for specific stocks by name or symbol.
- Swipe right on a stock card to buy the stock using the slide animation.
- View stock details by tapping on a stock card.

## Tech Stack

- React Native
- TypeScript
- React navigation
- Redux toolkit
- RapidAPI
- Notifee
