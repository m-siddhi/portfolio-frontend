<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Connect to DB
$conn = new mysqli("localhost", "root", "", "portfolio_db");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Read POST values directly (NOT JSON)
  $name = $conn->real_escape_string($_POST['name']);
  $email = $conn->real_escape_string($_POST['email']);
  $website = $conn->real_escape_string($_POST['website']);
  $message = $conn->real_escape_string($_POST['message']);

  $sql = "INSERT INTO contacts (name, email, website, message) VALUES ('$name', '$email', '$website', '$message')";

  if ($conn->query($sql)) {
    http_response_code(200);
    echo json_encode(["message" => "Inserted"]);
  } else {
    http_response_code(500);
    echo json_encode(["message" => "Error: " . $conn->error]);
  }
}
?>
