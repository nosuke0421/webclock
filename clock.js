function clock(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    if(hour < 10){
        hour = attach_0(hour);
    }
    if(minute < 10){
        minute = attach_0(minute);
    }
    if(second < 10){
        second = attach_0(second);
    }

    change_img(hour);
    $('#h').text(hour);
    $('#m').text(minute);
    $('#s').text(second);
}
$(function(){
    setInterval(clock, 1000);  
})

function attach_0(num){
    return '0' + num;
}

var DIR = 'imgs/'
var IMGS = {
    '00':'nature.jpg',
    '01':'adult.jpg',
    '02':'people.jpg',
    '03':'lamp.jpg',
    '04':'starry-sky.jpg',
    '05':'sun.jpg',
    '06':'sunrise.jpg',
    '07':'the-road.jpg',
    '08':'rose.jpg',
    '09':'balloon.jpg',
    '10':'bridge.jpg',
    '11':'sky.jpg',
    '12':'yorkshire.jpg',
    '13':'oak.jpg',
    '14':'water.jpg',
    '15':'autumn.jpg',
    '16':'golden-gate-bridge.jpg',
    '17':'road.jpg',
    '18':'sunset.jpg',
    '19':'sparkler.jpg',
    '20':'yellowstone.jpg',
    '21':'earth.jpg',
    '22':'night.jpg',
    '23':'aurora.jpg',
};
var NOW_IMG_NUM = 0;
function change_img(hour){
    if(NOW_IMG_NUM != hour){
        $('body').css('background','url(' + DIR + IMGS[hour] + ')');
        NOW_IMG_NUM = hour;
    }
}