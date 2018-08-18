package com.american.express.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.american.express.document.News;
import com.american.express.service.NewsService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class NewsController {
	
	@Autowired
	NewsService newsService;
	
	@GetMapping("/news")
	public List<News> getAllNews(){	
		return newsService.getAllNews();		
		
	}
	
}
