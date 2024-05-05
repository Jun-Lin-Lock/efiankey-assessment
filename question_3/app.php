<?php
function daysBetweenAndOddEven($date1, $date2)
{
    $timestamp1 = strtotime($date1);
    $timestamp2 = strtotime($date2);

    $difference = abs($timestamp2 - $timestamp1);

    $days = floor($difference / (60 * 60 * 24));

    $dayIsEven = ($days % 2 == 0) ? true : false;

    return array('days' => $days, 'even' => $dayIsEven);
}

$date1 = "2024-04-01";
$date2 = "2024-05-01";
$result = daysBetweenAndOddEven($date1, $date2);
echo "Number of days between $date1 and $date2: " . $result['days'] . "\n";
echo "Is the day even? " . ($result['even'] ? "Yes" : "No");
?>