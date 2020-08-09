function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
	return obj.currentStyle[name];
	}
	else
	{
		return getComputerStyle(obj,false)[name];
	}
};

function startMove(obj,json,fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(move,30);
	function move(){
		var cur=0;
		var stop=true;
		for(var attr in json)
		{
			if(attr=='opacity')
			{
				cur=Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else
			{
				cur=parseInt(getStyle(obj,attr));
			}
			
			var speed=(json[attr]-cur)/6;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
			if(json[attr]!=cur)
			{
				stop=false;//还有东西未到
				if(attr=='opacity')
				{
					obj.style[attr]=(speed+cur)/100;     //大多数浏览器
					obj.style.filter="alpha:("+[attr]+"="+(speed+cur)+")";
					//IE浏览器
				}
				else
				{
					obj.style[attr]=cur+speed+'px';
				}
			}
		}
		if(stop==true)
		{
			clearInterval(obj.timer);
			if(fnEnd) fnEnd();
		}
	}
}
