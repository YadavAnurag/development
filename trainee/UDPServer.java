import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.SocketException;
import java.util.Scanner;

public class UDPServer{
	public static void main(String args[]){
		InetAddress ip = null;
		DatagramSocket ds = null;
		Scanner sc = new Scanner(System.in);
		String input = "";
		byte buf[] = null;
		try{
			ip = InetAddress.getLocalHost();
			ds = new DatagramSocket(9000, ip);
		}catch(Exception se){
			System.out.println(se);
		}

		byte[] byteReceive = new byte[65535];
		DatagramPacket dpReceive = null; 

		while(true){
			dpReceive = new DatagramPacket(byteReceive, byteReceive.length);
			try{
				ds.receive(dpReceive);
			}catch(Exception e){
				System.out.println(e);
			}
			String clientMsg = ""+data(byteReceive);
			input = sc.nextLine();

			if(clientMsg != null){
				System.out.println("Client Message--> "+ clientMsg);
				if(data(byteReceive).toString().equals("bye")){
					System.out.println("Client Message--> Bye...!");
					break;
				}
				byteReceive = new byte[65535];
			}
			if(input != null){
				buf = input.getBytes();
				DatagramPacket dpSend = new DatagramPacket(buf, buf.length, ip, 8000);
				try{
					ds.send(dpSend);
				}catch(Exception e){
					System.out.println(e);
				}
				
				System.out.println("sent from server");
			}
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