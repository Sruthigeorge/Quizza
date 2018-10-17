<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Registration system PHP and MySQL</title>
   <script type="text/javascript" src="v.js"></script>
</head>
</head>
<body>
  
  <h1>QUIZZA</h1>
   <p class="t">Test your knowledge....! </p>
  <div class="header">
  	<h2 >Login</h2>
  </div>
	 
  <form method="post" action="login.php">
  	<?php include('errors.php'); ?>
  	<div class="input-group">
  		<label>Username</label>
  		<input type="text" name="username" >
  	</div>
  	<div class="input-group">
  		<label>Password</label>
  		<input type="password" name="password">
  	</div>
  	<div class="input-group">
  		<button type="submit" class="btn" name="login_user" >Login</button>
  	</div>
  	<p>
      <a href="#">Forget Password ?</a><br/>
  		Create an account <a href="register.php">Sign up</a>
  	</p>
  </form>
</body>
</html>