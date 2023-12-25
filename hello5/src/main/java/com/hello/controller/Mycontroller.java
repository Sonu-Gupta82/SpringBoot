package com.hello.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class Mycontroller {
	
	@GetMapping("index")
	public ModelAndView index() {
		return new ModelAndView("index");
	}
	@GetMapping("test")
	public ModelAndView test() {
		return new ModelAndView("test2");
	}
	@GetMapping("new")
	public ModelAndView hello() {
		return new ModelAndView("NewFile");
	}

}
