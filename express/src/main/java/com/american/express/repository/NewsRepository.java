package com.american.express.repository;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

import com.american.express.document.News;

@Repository
public interface NewsRepository  extends ElasticsearchRepository<News, String>{
	

}
