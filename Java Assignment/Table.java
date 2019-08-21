class Table{
	public static void main(String[] args) {
		int no,limit;
		no=Integer.parseInt(args[0]);
		limit=Integer.parseInt(args[1]);
		for(int i=1;i<=limit;i++){
			System.out.println(no+"*"+i+"="+(no*i));
		}
	}
}