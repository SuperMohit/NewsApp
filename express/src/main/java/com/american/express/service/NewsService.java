package com.american.express.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.american.express.document.News;
import com.american.express.repository.NewsRepository;

@Service 
public class NewsService {	
	@Autowired
	NewsRepository newsRepository;
	
	@Transactional
	public List<News> getAllNews() {
		List<News> news = new ArrayList<>();				
		newsRepository.findAll().forEach(news::add);		
		return news;
		
	}
}
