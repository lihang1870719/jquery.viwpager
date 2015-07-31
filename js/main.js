/**
 * Created by lh100756 on 2015/7/31.
 */
$(function(){
    var originSrc = $('.tabs-content ul li');
    var prevClick = $('.prev');
    var nextClick = $('.next');
    var thumbnailClick = $('.thumbnail li a');
    var options = {
        originSrc: originSrc,
        prevClick: prevClick,
        nextClick: nextClick,
        thumbnailClick: thumbnailClick
    };
    $('.tabs').viwpager(options);
});