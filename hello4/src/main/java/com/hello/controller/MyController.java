package com.hello.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class MyController {
	
	@GetMapping("/test")
	public ModelAndView test() {
		ModelAndView modelAndView = new ModelAndView("test");
		return modelAndView;
	}

}
