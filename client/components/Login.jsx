import React from 'react';

const Login = ({ appName, login }) => {
	const triggerLogin = (e) => {
		const parent = e.target.closest('.login');
		const username = parent.querySelector('#username').value;
		const password = parent.querySelector('#password').value;
		login(username, password);
	};
	return (
		<div className="center login">
			<div>
				<h1>{appName || 'email'}</h1>

				<div className="mdl-textfield mdl-js-textfield">
					<input className="mdl-textfield__input" type="text" id="username" name="username" />
					<label className="mdl-textfield__label" htmlFor="username">Username</label>
				</div>

				<div className="mdl-textfield mdl-js-textfield">
					<input className="mdl-textfield__input" type="password" id="password" name="password" />
					<label className="mdl-textfield__label" htmlFor="password">Password</label>
				</div>

				<button
					className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
					onClick={triggerLogin}
				>Login</button>
			</div>
		</div>
	);
};

export default Login;