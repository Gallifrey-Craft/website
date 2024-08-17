<?php
$file = 'cicada3301.txt';

if (file_exists($file)) {
    header('Content-Description: File Transfer');
    header('Content-Type: text/plain');
    header('Content-Disposition: inline; filename="'.basename($file).'"');
    readfile($file);
    exit;
} else {
    echo 'File not found.';
}
?>
