What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById gets only one element, while getElementsByClassName Gets many elements (a list). querySelector Gets the first element that matches a CSS selector and querySelectorAll Gets all elements that match a CSS selector.

How do you create and insert a new element into the DOM?

Answer: with the use of  document.createElement() to create a new HTML element. after that Use appendChild() or append() to add it inside another element.

What is Event Bubbling and how does it work?

Answer: Event bubbling is how events move (or "bubble up") through the HTML elements when you interact with them — like clicking a button. When you click on a child element, the event first happens on that element, then bubbles up to its parent, then to the grandparent, and so on… all the way to the top (<body> → <html> → document).

What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a technique where you add one event listener to a parent element to handle events for its child elements — even if the children are added later. This is very useful because of its usefulness like you can make you work so dynamic and supper fast.

What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() Stops the browser's default behavior for an event while stopPropagation() Stops the event from bubbling up to parent elements.