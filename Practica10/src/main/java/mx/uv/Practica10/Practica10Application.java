package mx.uv.Practica10;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class Practica10Application {

	public static void main(String[] args) {
		SpringApplication.run(Practica10Application.class, args);
	}
	@RequestMapping("/")
	String home(){
		return "Bienvenido";
	}
}
