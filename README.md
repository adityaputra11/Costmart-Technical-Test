# Alami-technical-test
Technical test for Alami

## Overview

The preview of this app just like this


<img width="676" alt="Screen Shot 2022-10-17 at 18 51 40" src="https://user-images.githubusercontent.com/24503826/196170172-ee518460-4fe8-414e-8d9e-ce3b0ba62cf5.png">

<h1 align="center">
    Cart List
</h1>

<p align="center">
  Build mobile apps with React.
</p>


## 📋 Requirements

React Native apps may target iOS 12.4 and Android 5.0 (API 21) or newer. You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS. To make this app requirement of my machine using this.

- Node v14.20
- Yarn V1.22.18
- React-native-cli V9.1.3
- Jdk V11
- Android Emulator SDK V29
- IOS Simulator V15.5
- Typescript V4.5.2

if you have problem on instalation make sure all of requirement has already match

## 🎉 Install Cartlist

first of all i am using yarn so install yarn with this command inside this project folder

```yarn install```

## 🎉 Install on Android

for android installation just using this command

```yarn android```

wait until the app launch in emulator or physical devices android, then run metro serve if the server not launch automatically

```yarn start```

if you have problem when synch make sure adb port is availeble for react native metro server

``` adb reverse tcp:8081 tcp:8081```

cheer android app launch

## 🎉 Install on IOS

first you need to install pod

```npx pod install ``` or using ```cd ios && pod install ```

then this command to launch via simulator ios

```yarn ios```

ios app will launch automatically, run metro serve if the server not launch automatically

```yarn start```


## 📖 Documentation

This project provide all of task, all of task mark as this (/** Task ...*/) in this project

This project already using Atomic Design and Typescript


![atomic-design-stages](https://user-images.githubusercontent.com/24503826/196173750-70c622ca-c29c-416f-8264-7e3504b17e39.jpeg)

