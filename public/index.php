<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration</title>
    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="../js/validationform.js"> </script>
</head>
<body>
<form name="reg" action="code_exec.php" onsubmit="return validateForm()" method="POST">
    <table class="form">
        <tr>
            <td colspan="2">
                <div align="center">
                    <?php
                        // $remarks=$_GET['remarks];
                        if (!isset($_GET['remarks'])){
                            echo 'Register here';
                        }
                        if (isset($_GET['remarks']) && $_GET['remarks'] == 'success'){
                            echo 'Register succes';
                        }
                    ?>
                </div>
            </td> 
        </tr>
        <tr>
            <td>
                <div>
                    First name:                    
                </div>
            </td>
            <td>
                <input type="text" name="fname" />
                <div id="placeholderfname"></div>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                    Last Name:
                </div>
            </td>
            <td>
                <input type="text" name="lname" />
                <div id="placeholderlname"></div>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                    Gender:
                </div>
            </td>
            <td>
                <input type="text" name="gender" />
                <div id="placeholdergender"> </div>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                    Username:
                </div>
            </td>
            <td>
                <input type="text" name="username" />
                <div id="placeholderusername"> </div>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                    Password:
                </div>
            </td>
            <td>
                <input type="password" name="password" />
                <div id="placeholderpassword"> </div>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                        
                </div>
            </td>
            <td>
                <input type="submit" name="submit" value="Submit" />
            </td>
        </tr>
    </table>
</form>
</body>
