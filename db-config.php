<?php
$servername = "localhost";  // XAMPP uses localhost
$username = "root";         // Default MySQL username for XAMPP
$password = "";             // Default MySQL password for XAMPP (leave empty)
$dbname = "mydatabase";     // Database name (make sure it matches what you created)

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
