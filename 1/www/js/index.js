function testConnect(){
	if(navigator.network.connection.type == Connection.NONE)
		return false;
	else
		return true;
}

function NetworkTestRedirect()
{
	alert(testConnect());
	if(testConnect())
	{
		if(Auth("rwerwe", "fdsfsd"))
		{
			$.mobile.navigate( "#dashboard" );
		}
		else
		{
			alert("Неверный логин или пароль");
			$.mobile.navigate( "#login" );
		}
		console.log("Интернет есть");
	}
	else
	{
		$.mobile.navigate( "#networkTest" );
		console.log("Интернета нет");
	}
}

function Auth(login, password)
{
	return true;
}



$('#networkTestButton').click(function () {
	NetworkTestRedirect();
});
window.onload = NetworkTestRedirect();

$('#btnLogin').onclick(function () {
	if(Auth("rwerwe", "fdsfsd"))
	{
		$.mobile.navigate( "#dashboard" );
	}
	else
	{
		alert("Неверный логин или пароль");
		$.mobile.navigate( "#login" );
	}
});

function OpenDialog(id)
{
	alert(id);
	$.mobile.navigate( '#dialog' );
}
