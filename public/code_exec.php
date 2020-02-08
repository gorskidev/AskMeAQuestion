<?php
session_start();

include('connection.php');

$fname      = $_POST['fname'];
$lname      = $_POST['lname'];
$gender     = $_POST['gender'];
$contact    = $_POST['contact'];
$username   = $_POST['username'];
$password   = $_POST['password'];

//mysqli_query($bd, "INSERT INTO member(fname, lname, gender, contact, username, password)VALUES('$fname', '$lname', '$gender', '$address', '$contact', '$username', '$password')");

header("location: index.php");

mysqli_close($con);
?>