
public class Student extends Person implements Action{
	private int id;

	public Student(String name, int age) {
		super( 1.0 ,name, age);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void talk() {
		// TODO Auto-generated method stub
		System.out.println("student");
	}
}
