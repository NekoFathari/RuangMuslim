<?php
$host = "iix1332.idcloudhost.com";
    $user = "expostof";
    $token = "KVEFV455IDAHUFQ9OK3WAGRGT5GDCITW";

    $query = "https://" . $host . ":2083/cpsess5654595049/execute/ServerInformation/get_information";

    function checkApiStatus() {
        global $query, $user, $token;

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST,0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER,0);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,1);

        $header[0] = "Authorization: cpanel $user:$token";
        curl_setopt($curl,CURLOPT_HTTPHEADER,$header);
        curl_setopt($curl, CURLOPT_URL, $query);  

        $start_time = microtime(true); // Get start time
        $result = curl_exec($curl);
        $end_time = microtime(true); // Get end time

        $response_time = ($end_time - $start_time) * 1000; // Calculate response time in milliseconds

        $http_status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($http_status != 200) {
            echo "[!] Error: " . $http_status . " returned\n";
        } else {
            $response = json_decode($result);
            for ($i = 0; $i < count($response->data); $i++) {
                echo $response->data[$i]->name . "  ";
            }
            echo "Response time " . $response_time . " ms"; // Output response time
        }

        curl_close($curl); // Close the cURL session
    }
    checkApiStatus();

    echo 1/207 * 100;
?>