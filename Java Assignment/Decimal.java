class Decimal{
	public static void main(String[] args) {
		int dec=Integer.parseInt(args[0]);
		String bin = "";
		while (dec>0){
			int a=dec%2;
			bin=a+bin;
			dec=dec/2;
		}
		System.out.println(bin);
	}
}