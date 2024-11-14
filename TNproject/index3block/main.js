


// 定義具名函數，負責初始化 .block-a 的 click 事件
function initializeBlockAEvent() {
    // 監聽點擊事件
    $(document).on("click", function(event) {
        // 檢查點擊的是否是 .block-a
        if ($(event.target).closest(".block-a").length ) {
            // 點擊 .block-a 時，添加 .op 類別
            $('.block-a').addClass('op');
            // 檢查 .block-a 是否有 .op 類別
            if ($(".block-a").hasClass("op")) {
                $('.block-a').addClass('click-bl-op');
                $('.block-b').addClass('click-bl-op-s');
                $('.block-c').addClass('click-bl-op-s');
                $('.block-c').addClass('click-bl-op-s');
            } else {
                $(".block-a").removeClass('click-bl-op');
                $(".block-b").removeClass('click-bl-op-s');
                $(".block-c").removeClass('click-bl-op-s');
            }
        } else {

                     if ($(event.target).closest(".block-b,.block-c").length) {
                             // 點擊其他地方時，移除 .op 類別
                            $('.block-a').removeClass('op').removeClass('click-bl-op');
                            $('.block-b').removeClass('op').removeClass('click-bl-op-s');
                            $('.block-c').removeClass('op').removeClass('click-bl-op-s');
                        } 
           
        }
    });

     // 監聽點擊事件
    $(document).on("click", function(event) {
        // 檢查點擊的是否是 .block-b
        if ($(event.target).closest(".block-b").length) {
            // 點擊 .block-b 時，添加 .op 類別
            $('.block-b').addClass('op');
            // 檢查 .block-b 是否有 .op 類別
            if ($(".block-b").hasClass("op")) {
                $('.block-b').addClass('click-bl-op');
                $('.block-a').addClass('click-bl-op-s');
                $('.block-c').addClass('click-bl-op-s');
            } else {
                $(".block-b").removeClass('click-bl-op');
                $(".block-a").removeClass('click-bl-op-s');
                $(".block-c").removeClass('click-bl-op-s');
            }
        } else {
            if ($(event.target).closest(".block-a,.block-c").length) {
                // 點擊其他地方時，移除 .op 類別
                $('.block-b').removeClass('op').removeClass('click-bl-op');
                $('.block-a').removeClass('op').removeClass('click-bl-op-s');
                $('.block-c').removeClass('op').removeClass('click-bl-op-s');
            }
        }
    });

    // 監聽點擊事件
    $(document).on("click", function(event) {
        // 檢查點擊的是否是 .block-c
        if ($(event.target).closest(".block-c").length) {
            // 點擊 .block-c 時，添加 .op 類別
            $('.block-c').addClass('op');
            // 檢查 .block-c 是否有 .op 類別
            if ($(".block-c").hasClass("op")) {
                $('.block-c').addClass('click-bl-op');
                $('.block-b').addClass('click-bl-op-s');
                $('.block-a').addClass('click-bl-op-s');
            } else {
                $(".block-c").removeClass('click-bl-op');
                $('.block-b').removeClass('click-bl-op-s');
                $('.block-a').removeClass('click-bl-op-s');
            }
        } else {
            if ($(event.target).closest(".block-a,.block-b").length) {
                // 點擊其他地方時，移除 .op 類別
                $('.block-c').removeClass('op').removeClass('click-bl-op');
                $('.block-a').removeClass('op').removeClass('click-bl-op-s');
                $('.block-b').removeClass('op').removeClass('click-bl-op-s');
            }
        }
    });


}

// 當 DOM 加載完成後執行 initializeBlockAEvent 函數
$(document).ready(initializeBlockAEvent);

 // $('.owl-nav.disabled').addClass('m-open');
// $('.owl-dots').removeClass('m-close'); //如果沒有的話就刪除 