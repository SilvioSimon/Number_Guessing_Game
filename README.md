# 🎯 Number Guessing Game

## 🧭 Overview

This is a simple browser-based number guessing game written in JavaScript.
The program generates a random number between **1 and 100**, and the user must guess it using an input field.

The application provides real-time feedback on whether the guess is too low, too high, or correct.

---

## 🎮 How It Works

* A random target number is generated at the start:

```js id="a1k9q2"
let zahl = Math.floor(Math.random() * 100) + 1;
```

* The user enters a guess in an input field
* The `check()` function compares the input with the target number
* A message is displayed based on the result

---

## ⚙️ Core Logic

### 🎲 Random Number Generation

A number between **1 and 100** is created using:

```js id="b7p3x1"
Math.floor(Math.random() * 100) + 1;
```

### 🔍 Guess Evaluation Function

```js id="c4m8z9"
function check() {
    let tipp = Number(document.getElementById("guess").value);
    let result = document.getElementById("result");

    if (tipp < zahl) {
        result.innerText = "Zu niedrig";
    } else if (tipp > zahl) {
        result.innerText = "Zu hoch";
    } else {
        result.innerText = "Richtig!";
    }
}
```

---

## 🧩 UI Requirements

The script expects the following HTML elements:

* `input#guess` → user input field
* `div#result` → output display area
* button or trigger calling `check()`

---

## 🖥️ Example Flow

1. User enters a number (e.g. 42)
2. Program compares it with the hidden number
3. Output:

   * 📉 “Zu niedrig” (too low)
   * 📈 “Zu hoch” (too high)
   * 🎉 “Richtig!” (correct)

---

## 🚀 Possible Improvements

* 🔄 Reset button to generate a new number
* 📊 Attempt counter
* ⏱️ Time tracking
* 🎨 UI styling improvements
* 📱 Mobile-friendly layout

---

## 📁 Project Structure

```
.
├── index.html
├── script.js
└── style.css
```

---

## 📜 License

Free to use for learning and personal projects.
