//调用全屏的方法
$(function(){
	$('#fullpage').fullpage({
        //设置每个屏幕的颜色
		sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        //滚到每屏后调用
        afterLoad:function(link,index){
         	//将所有的屏幕都移除current类
         	$('.section').removeClass('current');
         	//调用到那个屏就延迟100ms添加current类
         	setTimeout(function(){
         		$('.section').eq(index-1).addClass('current');
         	},100);
        },
	});
});
