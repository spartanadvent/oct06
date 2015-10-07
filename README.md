#Gamestore Inventory JS App -
#### v.006

##User Interface Design Reference
<http://geekwise.github.io/geekwise.js.edc.sept09/user_interface_design_reference.html>


##Todo
* <s>capitalize inventory</s>
* <s>Add touchstart event for mobile tap</s>
* <s>Change the load state for the `Add Item` to have the background state.</s>
* <s>Remove all logic from html</s>
* <s>mouse out on list to hide minus</s>
* <s>touchstart>tap>near minus>hide minus</s>
* <s>style>readable background>Dark/light text>oam display>light/dark text.</s> #julian
* <s>Check if game is already in the list</s>
* <s>touchstart > touchswipe</s> #vison/#julian/#Eric
* Borders, change, colors, css 
* <s>converting functions to new and normal layout</s> #julian
* <s>meta tag viewport width=device-width-->mobile responsive</s> #Eric
* <s>css --> Class names for UI/UX</s> #julian
    * <s>alert</s>
    * <s>active</s>
    * <s>hover</s>
    * <s>added</s>
    * <s>selected</s>
* <s>add to documentation</s> #Eric
* <s>display "Alert prompt" - name of game and already added in seperate div</s> #vinson
* touchswipe vertical - down to add list item on longer list
* CSS --> tighten up style
* Disable Alerts --> console.log (errors)
* Add game --> Visible Dark
    * "ADD GAME" UI/UX -->  Bevel button shadow
* doubletap/click --> change/update_name
    * update "game updates"

# List to incorperate for final project
* variables
* functions
* annonymous functions
* operators
* conditions/
    * if/else, switch/case
* console/ DOM/ Dynamic DOM
* loops/while
* Arrays
* int/ date / string
* events
* listeners
* elements


##Colors

<http://1drv.ms/1Kjlajv>

![sept28 whiteboard](http://i.imgur.com/QcfgxNWm.jpg?1)


##Future Features To Add
* Feature Name: Swipe to delete
	* find native JS via MDN
	* <https://developer.mozilla.org/en-US/docs/Web/API/Touch_events>
* 

> find a function or native JS example
> to allow a swipe to delete the inventory item.

#Bugs
* multi-popups on swipe 
* when space, it adds <li>
* imput box, cut off on mobile size device
* mouseout > addgame > name of game > button jumps right #Tom

#Fixed Bugs
* trim white space For "ADDNEWGAME" (--SORRY--)c(SORRY)
* prevent empty & null values for "ADD GAME" 
* adjusted the imput box for mobile so would not be cut off
* mouseout> submit button does not jump right#tom


##Reference Code For Event Listner
```
element.addEventListener(<event-name>, <callback>, <use-capture>);
```
# sept13
