class Pass{
	public static void main(String[] args) {
		int a,b,c;
		a=Integer.parseInt(args[0]);
		b=Integer.parseInt(args[1]);
		c=Integer.parseInt(args[2]);
		int total=a+b+c;
		check=0;
		if (a>=40) {
			check++;
		}
		if (b>=40){
			check++;
		}
		if (c>=40){
			check++;
		}
		if (total>=125){
			check++;
		}
		if(check==4)
			System.out.println("Passed");
		if (check<4)
			System.out.println("Failed");

	}
}