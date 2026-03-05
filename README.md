# JavaScript DOM & Events

This file contains simple answers about DOM selection and event handling in JavaScript.

---

## 1. Difference Between DOM Selection Methods

* **getElementById()**: Selects one element using its unique ID and returns a single element.
* **getElementsByClassName()**: Selects all elements with a specific class name and returns a live HTMLCollection that updates when the DOM changes.
* **querySelector()**: Selects the first element that matches a CSS selector.
* **querySelectorAll()**: Selects all elements that match a CSS selector and returns a static NodeList.

---

## 2. How to Create and Insert an Element

To create and insert a new element into the DOM:

1. Create the element using JavaScript.
2. Add content, text, or attributes to it.
3. Insert it into the desired position in the DOM using methods like append or appendChild.

---

## 3. What is Event Bubbling?

Event bubbling is a behavior in JavaScript where an event starts from the target element and then moves up through its parent elements until it reaches the document.

---

## 4. What is Event Delegation?

Event delegation is a technique where a single event listener is added to a parent element to handle events for its child elements using event bubbling.

It is useful because:

* It improves performance.
* It works for dynamically added elements.
* It keeps the code cleaner and easier to manage.

---

## 5. Difference Between preventDefault() and stopPropagation()

* **preventDefault()** stops the default browser action for an event.
* **stopPropagation()** stops the event from propagating (bubbling) to parent elements.





* New elements are created using `createElement()` and inserted using methods like `appendChild()`.
* Event Bubbling moves events upward in the DOM.
* Event Delegation uses bubbling to handle events efficiently.
* `preventDefault()` stops default behavior, while `stopPropagation()` stops event flow.

