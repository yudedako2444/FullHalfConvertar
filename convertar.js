$(function(){
    $('.input').blur(function(){
        FullHarfConvert($(this));
    });

    FullHarfConvert = function(ele){
        var val = ele.val();
        var han = val.replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)});

        if(val.match(/[Ａ-Ｚａ-ｚ０-９]/g)){
            $(ele).val(han);
        }
    }
});
