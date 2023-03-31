<?php

$curl = curl_init();

$token = "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";

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.github.com/users/robertosm822/repos',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    //'X-GitHub-Api-Version: 2022-11-28',
    'Content-Type: application/json',
    'Authorization: Token '.$token
  ),
));

$response = curl_exec($curl);

curl_close($curl);
sleep(2);
var_dump($response);
