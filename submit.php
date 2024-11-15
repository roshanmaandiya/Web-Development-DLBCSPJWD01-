<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// Include the database configuration
include 'db-config.php';

// Include the database configuration
include 'db-config.php';

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from the form
    $currency_code = htmlspecialchars($_POST['currency_code']);
    $currency_rate = htmlspecialchars($_POST['currency_rate']);

    // Prepare the SQL statement
    $sql = "INSERT INTO currency_data (currency_code, currency_rate) VALUES (?, ?)";

    // Prepare and bind
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("sd", $currency_code, $currency_rate);  // "s" for string, "d" for double/decimal
        
        // Execute the statement
        if ($stmt->execute()) {
            echo "New currency data inserted successfully!";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "Error: " . $conn->error;
    }

    // Close the connection
    $conn->close();
}
?>
