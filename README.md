# JavaScript DOM & Events – Answers to Questions

## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

###  `getElementById(id)`

* Selects **one single element** by its id.
* Returns a single element object.
* Since IDs are unique, it always returns at most one element.

```js
document.getElementById("header");
```

### 🔹 `getElementsByClassName(className)`

* Selects **all elements** with the given class name.
* Returns a **live HTMLCollection** (updates automatically if DOM changes).

```js
document.getElementsByClassName("card");
```

### 🔹 `querySelector(selector)`

* Selects the **first element** that matches a CSS selector.
* More flexible because it supports any CSS selector.

```js
document.querySelector(".card");
```

### 🔹 `querySelectorAll(selector)`

* Selects **all matching elements** based on a CSS selector.
* Returns a **static NodeList** (does NOT update automatically).

```js
document.querySelectorAll(".card");
```



## 2. How do you create and insert a new element into the DOM?

### Step 1: Create the element

```js
const newDiv = document.createElement("div");
```

### Step 2: Add content or attributes

```js
newDiv.textContent = "Hello World!";
newDiv.className = "box";
```

### Step 3: Insert it into the DOM

```js
document.body.appendChild(newDiv);
```

### Other insertion methods:

* `append()`
* `prepend()`
* `before()`
* `after()`
* `insertBefore()`

Example:

```js
parentElement.append(newDiv);
```

---

## 3. What is Event Bubbling? And how does it work?

### 🔹 Event Bubbling

Event Bubbling is a mechanism in JavaScript where an event starts from the **target element** and then bubbles up to its parent elements until it reaches the root (`document`).

### Example:

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

If you click the button:

1. The button’s event runs first.
2. Then the div’s event runs.
3. Then it continues up the DOM tree.

### Order:

**Child → Parent → Grandparent → Document**

Event bubbling is the default behavior in JavaScript events.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

### 🔹 Event Delegation

Event Delegation is a technique where you attach a **single event listener to a parent element** to handle events for its child elements using event bubbling.

### Example:

```js
document.getElementById("parent").addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked");
  }
});
```

### ✅ Why is it useful?

* Improves performance (fewer event listeners).
* Works for dynamically added elements.
* Cleaner and more maintainable code.
* Reduces memory usage.

---

## 5. What is the difference between `preventDefault()` and `stopPropagation()`?

### 🔹 `preventDefault()`

* Prevents the default browser behavior.
* Example: Prevent a form from submitting.

```js
event.preventDefault();
```

Example:

```js
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Stops form submission
});
```

---

### 🔹 `stopPropagation()`

* Stops the event from bubbling up (or capturing down).
* Prevents parent elements from receiving the event.

```js
event.stopPropagation();
```







* New elements are created using `createElement()` and inserted using methods like `appendChild()`.
* Event Bubbling moves events upward in the DOM.
* Event Delegation uses bubbling to handle events efficiently.
* `preventDefault()` stops default behavior, while `stopPropagation()` stops event flow.

