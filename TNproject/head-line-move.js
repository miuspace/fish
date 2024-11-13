
// const links = document.querySelectorAll(".myLink");

// $("#first_element").click(function(){
    
// var secondDivPosition=$("#second_element").position();
//        var firstDivPosition=$("#first_element").position();
 
//     var topSecond =secondDivPosition.left.toString()+'px';
//       var topFirst =firstDivPosition.left.toString()+'px';
      
//     if(firstDivPosition.top==secondDivPosition.top)
//     {
//       $(".decoline").animate({"top":"0px"},300, function() {});
//             $("#second_element").css({"visibility":"initial"});
      
   
//     }else
//     {
//       $(".decoline").animate({"top":topSecond},300, function() {
//         $("#second_element").css({"visibility":"hidden"});
//       });
    
      
    
//     }

  
//   });


document.addEventListener("DOMContentLoaded", function() {
  setupLinkEvents();
});

function setupLinkEvents() {


	// 選取所有 class 為 "myLink" 的元素
  const ml = document.querySelectorAll(".first_element");
  const m2 = document.querySelectorAll(".second_element");
 const mlwidth = document.querySelector(".first_element").offsetWidth;
 const m2width = document.querySelector(".second_element").offsetWidth;
	// const mlContentWidth = mlRect.width - (parseFloat(getComputedStyle(ml).paddingLeft) + parseFloat(getComputedStyle(ml).paddingRight));
	// const m2ContentWidth = m2Rect.width - (parseFloat(getComputedStyle(m2).paddingLeft) + parseFloat(getComputedStyle(m2).paddingRight));

  var firstDivPosition=$("#first_element").position();
   var secondDivPosition=$("#second_element").position();
   var topFirst =(firstDivPosition.left + 20).toString()+'px';
   var topSecond =(secondDivPosition.left + 20).toString()+'px';

  // 為每個選到的元素添加點擊事件監聽器
  ml.forEach(link => {
    link.addEventListener("click", function(event) {

    // 阻止預設的跳轉行為
      event.preventDefault();
        // 執行點擊後的動作

       $(".decoline").animate({"left":topFirst},300, function() {});
            // $(".decoline").css({"left":"block"});
            $(".decoline").css({"opacity":"1"});
            	$(".decoline").width(mlwidth);
             
             

    });
  });




   // 為每個選到的元素添加點擊事件監聽器
  m2.forEach(link => {
    link.addEventListener("click", function(event) {

    // 阻止預設的跳轉行為
      event.preventDefault();
        // 執行點擊後的動作

    
      $(".decoline").animate({"left":topSecond},300, function() {
         // $(".decoline").css({"left":"0px"});
         $(".decoline").css({"opacity":"1"});
         $(".decoline").width(m2width)
       });
     




    });
  });




}
