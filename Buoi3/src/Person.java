// tim hieu class/ object

public class Person {
	public double height;
	private String name;
	private int age;

	
	public Person(double height, String name, int age) {
		this.height = height;
		this.name = name;
		this.age = age;
	}
	
	public double getHeight() {
		return height;
	}



	public void setHeight(double height) {
		this.height = height;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public int getAge() {
		return age;
	}



	public void setAge(int age) {
		this.age = age;
	}



	public void swim () {
		System.out.println("swim!");
	}
	
}
