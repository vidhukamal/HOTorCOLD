$(document).ready(function(){
	var answer = Math.floor(Math.random()*100);
	//answer = 47;
	$('form').on('submit',function(){
		
		var guess = $('#user_guess').val();	
		var diff = getSwitchRange(Math.abs(answer - guess));
		
		//If user guessed correctly we are done.
		if(answer == guess)
		{
			$('#result').html("You won! Hurray!");
			$('body').css('background-color','green');
			return false;
		}
		
		switch(diff){
			case 0:
				$('#result').html("Too hot");
				$('body').css('background-color','red');
				break;
			case 1:
				$('#result').html("Hotter");
				$('body').css('background-color','red');
				break;
			case 2:
				$('#result').html("Hot");
				$('body').css('background-color','orangered');
				break;
			case 3:
				$('#result').html("Warmer");
				$('body').css('background-color','orange');
				break;
			case 4:
				$('#result').html("Warm");
				$('body').css('background-color','coral');
				break;
			case 5:
				$('#result').html("Normal");
				$('body').css('background-color','salmon');
				break;
			case 6:
				$('#result').html("Cool");
				$('body').css('background-color','cornsilk');
				break;
			case 7:
				$('#result').html("Cooler");
				$('body').css('background-color','cyan');
				break;
			case 8:
				$('#result').html("Cold");
				$('body').css('background-color','mediumslateblue');
				break;
			case 9:
				$('#result').html("Colder");
				$('body').css('background-color','deepskyblue');
				break;
			case 10:
				$('#result').html("Too cold");
				$('body').css('background-color','blue');
				break;
			default:
				$('#result').html("Take a good guess! " + diff);
				$('body').css('background-color','gray');
				break;
		}
		
		/*if(guess >= answer)	{
			$('#result').html("Too hot");
			$('body').css('background-color','red');
		}else
		{
			$('#result').html("Too cold");			
			$('body').css('background-color','blue');
		};*/
		
		return false;
	});
	
	function getSwitchRange(n)
	{
		return Math.min(10,Math.floor(n/5));
	};
});