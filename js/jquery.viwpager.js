//为了更好的兼容性，开始前有个分号
;(function($) {
    $.fn.extend({
        "viwpager" : function (options) {
            //设置默认值
            options = $.extend({
                originSrc: "",
                prevClick: "",
                nextClick: "",
                thumbnailClick: ""
            }, options);

            if (options.originSrc == "") {
                alert('no source pic');
                return;
            } else if (options.thumbnailClick == "") {
                alert('no thumbnail click');
                return;
            }

            $(options.originSrc)[0].style.display = "block";
            $(options.prevClick).click( function () {
                console.log("click prev");
                prev();
            });

            function prev () {
                var items = $(options.originSrc);
                var length = items.length;
                for (var i = 0; i < length; i++) {
                    if (items[i].style.display == "block") {
                        break;
                    }
                }

                if ( i < length ) {
                    var current = items[i];
                    current.style.display = "none";
                    items[(i - 1 + length) % length].style.display = "block";
                }
            }

            $(options.nextClick).click( function () {
                console.log("click next");
                next();
            });

            function next () {
                var items = $(options.originSrc);
                var length = items.length;
                for (var i = 0; i < length; i++) {
                    if (items[i].style.display == "block") {
                        break;
                    }
                }

                if ( i < length ) {
                    var current = items[i];
                    current.style.display = "none";
                    items[(i + 1) % length].style.display = "block";
                }
            }

            $(options.thumbnailClick).click ( function () {
                console.log("in thumbnail");
                var currentFlag = this.innerHTML;
                var items = $(options.originSrc);
                var length = items.length;
                for (var i = 0; i < length; i++) {
                    if (items[i].style.display == "block") {
                        break;
                    }
                }

                if ( i < length ) {
                    var current = items[i];
                    current.style.display = "none";
                    items[currentFlag - 1].style.display = "block";
                }
            });
        }
    });
})(jQuery);