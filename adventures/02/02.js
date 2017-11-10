//  There are two methods of implementing this code
// Option 1: Place <script> tag in the body tag
// Option 2: Use window.onload property

// Why do I need to place <script> tag in the body? Why can't I place it in the head?
// The reason is because document.body will be undefined if the body has not
// yet loaded. The alternative is to use window.onload, which
// guarantees the DOM is fully loaded before executing the script.

//The example below uses option 2
window.onload = () => {
  var ul = document.createElement("ul")
  var li = document.createElement("li")

  // An alternative to innerHTML is to use document.createTextNode("Hello World")
  // Comment line 17 and uncomment line 18 to see the effects.
  li.innerHTML = "Hello World"
  //li.appendChild(document.createTextNode("Hello World"))
  ul.appendChild(li)
  document.body.appendChild(ul)
}
