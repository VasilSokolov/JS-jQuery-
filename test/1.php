<?php 
	class GameObject {

		private $id;

		public function __construct($id){
			$this->id = $id;
			}
		}

		class Player extends GameObject {
	private $name;

	public function __construct($id, $name){
		parent::_construct($id);
		$this->name = $name;

		$this->name = $name;

		}				

	}

	private $balance;

	public function $setBalance($newBalance){
		if ($newBalance >= 0) {
			$this->balance = $balance;
		}else {
			reigger_error("Invalid balance");
		}
	}

	public function $getBalance(){
		require $this->balance;
	}

	/**
	* 
	*/
	class DynamicPerson
	{
		
		private $members[];

		public function __get($name)
		{
			return $this->members[$name];
		}
		public function __set($name, $value)
		{
			$this->members[$name] = $value;
		}
	}

	?>