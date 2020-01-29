import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Scanner;

public class UDPClient{
	public static void main(String args[]) throws IOException{
		Scanner sc = new Scanner(System.in);

		InetAddress ip = InetAddress.getLocalHost();
		DatagramSocket ds = new DatagramSocket(8000, ip);
		byte buf[] = null;


		byte[] byteReceive = new byte[65535];
		DatagramPacket dpReceive = null; 
		DatagramPacket dpSend = null; 
		System.out.println("Enter bye to exit");
		while(true){
			System.out.println("Started");
			dpReceive = new DatagramPacket(byteReceive, byteReceive.length);
			try{
				ds.receive(dpReceive);
			}catch(Exception e){
				System.out.println(e);
			}

			System.out.println("waiting to input");
			String input = sc.nextLine();
			System.out.println("input received");
			String serverMsg = ""+data(byteReceive);

			if(input.equals("bye")){
				break;
			}
			if(input != null){
				buf = input.getBytes();
				dpSend = new DatagramPacket(buf, buf.length, ip, 9000);
				ds.send(dpSend);
			}
			if(serverMsg != null){
				System.out.println("Server Message--> "+ serverMsg);
				if(data(byteReceive).toString().equals("bye")){
					System.out.println("Server Message--> Bye...!");
					break;
				}
				byteReceive = new byte[65535];
			}
			

			// System.out.println(res);
		}
	}
	public static StringBuilder data(byte a[]){
		if(a == null){
			return null;
		}
		StringBuilder ret = new StringBuilder();
		int i = 0;
		while(a[i] != 0){
			ret.append((char) a[i]);
			i++;
		}
		return ret;
	}
}