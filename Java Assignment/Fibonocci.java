class Fibonocci{
	public static void main(String[] args) {
		int a=1,b=1;
		System.out.println(a);
		System.out.println(b);
		while(b<89){
			int c=a+b;
			System.out.println(c);
			a=b;
			b=c;
		}
	}
}