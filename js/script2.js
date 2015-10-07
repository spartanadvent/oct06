var button;
var text_box;
// var ul; not nessesary
var html_body;
var break_line;
var input
var input_value;
var list_elements;
var list_element;
var current_list_element;
var this_list_element;
var add_list_element;
var update_list_elements;
var ordered_list;
var rename;
var update_button; //updated for global use new button
// var generate_random_color; not nessasary 
// var click_enter;
// var timed_background_change = setInterval(back_change, 1000);
var list_of_colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine','Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed ', 'Indigo ', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen' ];

var current_element;


// function click_enter(){
//       return document.getElementById('input').addEventListener('keydown', function(){    
//          if(event.keyCode === 13) {
//              document.getElementById('button_left').click();       
//     	}
//  	});
// }


function random_color(){
        return list_of_colors[
            Math.floor(
                Math.random()*list_of_colors.length)];

}

function attach_element(element_name){
    
    current_element = document.createElement(element_name);
    document.getElementById('content_container').appendChild(current_element);
}


function add_list_element(){
    current_list_element = document.createElement('li');
    ordered_list.appendChild(current_list_element);
}

function update_list_elements(){
    list_elements = ordered_list.childNodes;
}


function button_code(){
        add_list_element();
        update_list_elements();
        this_list_element = list_elements[(list_elements.length-1)];
        this_list_element.textContent = random_color();
        // input.textContent = random_color();
        this_list_element.style.backgroundColor = this_list_element.textContent;
        this_list_element.id = this_list_element.textContent;
        
    this_list_element.addEventListener('contextmenu',function(event){
            
            this.remove();
            event.preventDefault();
            return false;
        },false);
}


// function back_change() {
    
//     ordered_list.style.backgroundColor = random_color();
// }

    document.addEventListener('DOMContentLoaded', function(){
         
         attach_element('input');
         input = current_element;
         
         attach_element('button');
         button = current_element;
         
         button.textContent = 'Click to Add a Color';
         button.id = 'button_left';
         button.addEventListener('click',function(event) {
             
             attach_element('li');
             
             current_element.textContent = String(random_color());
             current_element.style.backgroundColor = current_element.textContent;
             
             current_element.addEventListener('click',function(event) {
                 this.textContent = input.value;
                 this.style.backgroundColor = input.value;
             });
             
             
             ordered_list.appendChild(current_element);
         })
         
         
         
         
         update_button = attach_element('button');
         update_button = current_element;
         
         update_button.id = 'update_button';
         update_button.textContent = 'Update current color';
         
         
         
         attach_element('br');
         break_line = current_element;
        //  break_line = br[0];
        //  break_line.class = 'clear';
         
         
       
         
         
        //  input = input[0];
        //  input.id = 'input';
        
        //  br = document.getElementsByTagName('br');
        //  br = br[0];             ------- removed for non essential purpose---
        //  br.class = 'clear';
         
         attach_element('ol');
         ordered_list = current_element;
         ordered_list.id = 'list';
        //  ordered_list.style.backgroundColor = random_color();
        
        // ordered_list.children.addEventListener('click', function(){
            
        // });
         
         update_button.addEventListener('click',function(event){
           
          
         });
         
    //      button.addEventListener('click',function(){
         
    //             button_code();
    //             click_enter();

         
    // });
    
    
});    button.addEventListener('click',function(event) {
             
             attach_element('li');
             
             current_element.textContent = String(random_color());
             current_element.style.backgroundColor = current_element.textContent;
             
        current_element.addEventListener('click', function(){
               if (update_input.value === '' || update_input.value === null ){
                  return current_element.textContent = String(random_color());}
                         current_element.style.backgroundColor = current_element.textContent;
                   
                this.textContent = update_input.value;
                this.style.backgroundColor = update_input.value;
            });     
             
        current_element.addEventListener('contextmenu', function(el){
                
                    this.remove();
                    el.preventDefault();
                    return false;
                
                },false);
             
             ordered_list.appendChild(current_element);
         });