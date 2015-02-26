<?php 

require "function.php";

$info = get_actor_info($_GET["actor_id"]);

include 'views/actor.tmpl.php';