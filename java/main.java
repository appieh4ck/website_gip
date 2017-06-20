

import java.util.Timer;
import java.util.TimerTask;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import jssc.SerialPort;
import jssc.SerialPortException;

public class main extends TimerTask{
	
	static SerialPort serialPort = new SerialPort("/dev/ttyACM0");

	static Connection con = null;
	
	byte sync = 0b01010101;
	byte addr = 0b01110011;
	byte servo=0;
	byte led=0;
	byte servo2=0;
	byte servo3=0;
	
	@Override
    public void run() {
	
		PreparedStatement statement;
		try {
			statement = con.prepareStatement("select * from arduino");
	
		ResultSet result = statement.executeQuery();

		while(result.next())
		{
			
		System.out.println(result.getString(1) + " " + result.getString(2) +" " + result.getString(3)+" " + result.getString(4) +" " + result.getString(5));
		servo = (byte) Integer.parseInt(result.getString(2));
		led = (byte) Integer.parseInt(result.getString(3));
		servo2 = (byte) Integer.parseInt(result.getString(4));
		servo3=(byte) Integer.parseInt(result.getString(5));
		
		
		}
		
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		try {
			
			serialPort.writeByte(sync);
			serialPort.writeByte(addr);
			serialPort.writeByte(servo);
			serialPort.writeByte(led);
			serialPort.writeByte(servo2);
			serialPort.writeByte(servo3);
			
        }
        catch (SerialPortException ex) {
            System.out.println(ex);
        }
				
	}
	
	
	
	public static void main(String[] args) throws Exception {

		// TODO Auto-generated method stub
		
		Class.forName("com.mysql.jdbc.Driver");

		con = DriverManager.getConnection("jdbc:mysql://192.168.2.21:3306/control","admin","appieh4ck");

		try {
            serialPort.openPort();//Open serial port
            serialPort.setParams(SerialPort.BAUDRATE_9600, 
                                 SerialPort.DATABITS_8,
                                 SerialPort.STOPBITS_1,
                                 SerialPort.PARITY_NONE);//Set params. Also you can set params by this string: serialPort.setParams(9600, 8, 1, 0);
        }
        catch (Exception ex) {
            System.out.println(ex);
        }
		
		
		TimerTask timerTask = new main();
		
		Timer timer = new Timer(true);
	       
        timer.scheduleAtFixedRate(timerTask, 0, 3);
        
        
        try {
            Thread.sleep(1200000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        timer.cancel();
        serialPort.closePort();//Close serial port
        con.close();
		
		
	}

}
