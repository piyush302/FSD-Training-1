class Factorial{
	public static void main(String[] args) {
		double fact=1;
		int no = Integer.parseInt(args[0]);
		for(int i=no;i>0;i--){
			fact = fact*i;
		}
		System.out.println(fact);
	}
}