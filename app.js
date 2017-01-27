console.log("done");
		$(document).ready(function () {
			var login = localStorage.getItem('login');
			var password = localStorage.getItem('password');

			if (login != null && password != null) {
				var checkLogin = false;

				$.post('checkLogin.php', 
				{
					login: login,
					password: password
				}, 
				function (data) {
					if (data == 'true') {
						checkLogin = true;
						if (checkLogin) {
							$('#wrapper').html('\
								<h1>Administrator zone</h1>\
								<button id="logOut">Log out</button>');
							$('#logOut').click(function () {
								localStorage.removeItem('login');
								localStorage.removeItem('password');
								window.location.reload();
								checkLogin = false;
							});
						}
					}
					else {
						localStorage.removeItem('login');
						localStorage.removeItem('password');
						window.location.reload();
						checkLogin = false;
					}
				});

				
			}
			else {
				$('#wrapper').html('\
					<input id="login" type="text" placeholder="Login" /><br />\
					<input id="password" type="password" placeholder="Password" /><br />\
					<button id="logIn">Log in</button><br />\
					<p id="alert"></p>');

				$('#logIn').click(function () {
					var login = $('#login').val();
					var password = $('#password').val();

					$.post('checkLogin.php', 
						{
							login: login,
							password: password
						}, 
						function (data) {
							if (data == 'true') {
								localStorage.setItem('login', login);
								localStorage.setItem('password', password);
								window.location.reload();
							}
							else {
								$('#alert').html('Login or password are wrong!');
							}
						});
				});
			}
		});
	