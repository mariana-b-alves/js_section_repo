/*Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

In other words, the event starts at the "lowest element" (such as a link, a button, etc..) and it goes all the way up to the DOM

This is the default behavior of events on elements unless you stop the propagation.*/

/*Independentemente de onde tenha declarado o evento, o botão/link é SEMPRE o que está mais abaixo na hierarquia*/


/*--------------------------------------------------------------*/

/*Event capturing is the first phase of the event propagation model in the Document Object Model (DOM) of browsers. It allows you to intercept and handle events at an earlier stage in the propagation process.

It's when an event is triggered on its outermost element first (that is, the document), and it's "captured" all the way down to its innermost element (usually a link or a button, but it's supposed to be the last element).

The capturing phase is optional, and not all events use it. When you attach an event listener to an element, you can specify whether you want to capture the event during the capturing phase by providing a third parameter to the addEventListener method. If the third parameter is set to true, the event listener will be triggered during the capturing phase; otherwise, it will be triggered during the bubbling phase (default).*/

function showElement(evt) {
  console.log('Target:', evt.target);
  console.log('Current Target:', evt.currenntTarget);
  console.log('---------------------------')
  console.log(evt)
  /* debugger; */
  /* alert(this.innerHTML); */

  alert(this.innerHTML);
  evt.stopPropagation();
  
}

/* el = document.getElementById("list");   // <<< el is reused and not defined
el.addEventListener('click', showElement, false);*/

el = document.getElementById("item");
el.addEventListener('click', showElement, false); 

/* el = document.getElementById("link");
el.addEventListener('click', showElement, false); */


el = document.getElementById("list2");
el.addEventListener('click', showElement, true);

el = document.getElementById("item2");
el.addEventListener('click', showElement, true);

el = document.getElementById("link2");
el.addEventListener('click', showElement, true);