$('document').ready(function()
{
	//Check off item in list
	$("ul").on("click","li",function()
	{
		this.classList.toggle("completed");
	}
	);
	//Delete item from list
	$("ul").on("click","span",function(event)
	{
		$(this).parent().fadeOut(500,function()
			{
				$(this).remove();
			});
		//$(this).remove();
		event.stopPropagation();
	});
	$("input[type='text']").keypress(function(event)
	{
		if(event.which==13)
		{
			var textInput=$(this).val();
			if(textInput!="")
			{
				$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+textInput+"</li>");
				$(this).val("");
			}
			else alert('Input cannot be empty!');
		}
	});
	$(".fa-plus").click(function()
	{
		$("input[type='text']").fadeToggle();
	});
}
);